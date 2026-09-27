# -*- coding: utf-8 -*-
"""
编程羊毛导航 · 自动抓取更新脚本
================================
数据源（best-effort，任一失败不影响其它源）：
  1. awesome-coding-ai README 促销审计表（110+ 工具，含免费额度/试用说明）
  2. cp.pingfan.me 首页（20 产品入门套餐价格）

输出：
  data-remote.json  —— 「查询更新」按钮在 HTTP 环境下 fetch 合并
  data-remote.js    —— file:// 双击打开时由按钮注入 <script> 合并

合并规则（网站侧）：按 id 或 厂商+名称 匹配 → 更新已有条目；未匹配 → 追加为
「自动抓取」条目（note 带 🤖 标记）。内置 data.js 的手工条目永远优先保留，
可在网页「数据源 → 恢复内置数据」一键还原。

用法：python update_data.py   （或直接双击 一键更新.bat）
"""
import datetime
import json
import pathlib
import re
import sys
import urllib.request

ROOT = pathlib.Path(__file__).parent
README_URL = "https://raw.githubusercontent.com/ohong/awesome-coding-ai/main/README.md"
PINGFAN_URL = "https://cp.pingfan.me"
UA = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) wool-nav-updater"}

TAG2CAT = {"ide": "ide", "gui": "ide", "extension": "ide", "cli": "cli",
           "background": "cli", "app-builder": "builder", "oss": "cli",
           "own-model": "plan"}
CN_HINTS = ["trae", "qoder", "iflow", "codebuddy", "glm", "kimi", "qwen",
            "minimax", "comate", "lingma", "marscode", "siliconflow",
            "modelscope", "zhipu", "moonshot", "deepseek", "codegeex",
            "fitten", "bigmodel", "心流", "智谱", "通义", "快码"]
FREE_HINTS = ["free", "免费", "白嫖", "trial", "试用", "credit", "quota", "student", "promo", "discount", "off"]


def log(msg):
    try:
        print(msg)
    except UnicodeEncodeError:
        print(msg.encode("gbk", "replace").decode("gbk"))


def fetch(url, timeout=40):
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.read().decode("utf-8", "replace")


def norm(s):
    return re.sub(r"[\s（）()·／/\-_.！!？?：:]", "", str(s).lower())


# ---------- 内置数据（用于去重与按 id 出补丁） ----------
def load_builtin():
    pat = re.compile(
        r"id:\s*'([^']+)',\s*vendor:\s*'([^']*)',\s*name:\s*'([^']*)'", re.S)
    try:
        text = (ROOT / "data.js").read_text(encoding="utf-8")
    except OSError:
        return []
    return [{"id": m[0], "vendor": m[1], "name": m[2]} for m in pat.findall(text)]


# ---------- 源 1：awesome-coding-ai 促销表 ----------
def parse_awesome():
    md = fetch(README_URL)
    today = datetime.date.today().isoformat()
    out = []
    # 表行形如 | [Name](https://...) | tag1 tag2 | notes | promo |
    row = re.compile(
        r"^\|\s*\[([^\]]+)\]\((https?://[^)\s]+)[^)]*\)\s*\|([^|]*)\|([^|]*)\|([^|]*)\|",
        re.M)
    for name, url, tags, notes, promo in row.findall(md):
        name = name.strip()
        tags_l = tags.strip().lower()
        blob = f"{tags} {notes} {promo}".lower()
        cat = "plan"
        for t in TAG2CAT:
            if t in tags_l:
                cat = TAG2CAT[t]
                break
        is_free = any(h in blob for h in FREE_HINTS)
        region = "cn" if any(h in blob or h in name.lower() for h in CN_HINTS) else "intl"
        value = 4 if is_free else 3
        free_text = re.sub(r"\s+", " ", f"{notes.strip()} {promo.strip()}").strip(" -|")
        out.append({
            "id": "aw-" + norm(name)[:40],
            "vendor": name,
            "name": name,
            "cat": cat,
            "region": region,
            "isFree": is_free,
            "free": free_text or "见官方页面说明",
            "price": "以官网为准",
            "tags": ["自动抓取"] + [t.strip() for t in tags.split() if t.strip()][:2],
            "value": value,
            "hot": False,
            "url": url,
            "note": "🤖 自动抓取自 awesome-coding-ai，未经人工核查",
            "checked": today + "(自动)",
        })
    return out


# ---------- 源 2：cp.pingfan.me 首页价格 ----------
PRICE_RE = re.compile(r"(\$ ?[\d][\d,.]*|¥ ?[\d][\d,.]*)")
# 品牌 → 内置条目 id 的别名表（用于把抓到的价格打补丁到已有条目）
ALIAS = {
    "claude": "claude-code", "chatgpt": "codex", "grok": "grok-build",
    "kimi": "kimi-coding", "glm": "glm-coding", "qwen": "qwen-code",
    "copilot": "copilot-free", "githubcopilot": "copilot-free",
    "windsurf": "windsurf", "cursor": "cursor", "kiro": "kiro",
    "opencode": "opencode", "commandcode": "commandcode", "trae": "trae",
    "devin": "devin", "amazonq": "amazon-q", "jetbrains": "jetbrains-ai",
    "replit": "replit", "deepseek": "deepseek", "openrouter": "openrouter",
    "antigravity": "antigravity", "google": "antigravity", "augment": "augment",
}


def parse_pingfan():
    html = fetch(PINGFAN_URL)
    # React SSR 会在文本节点间插入 <!-- --> 注释，先清掉再解析
    html = html.replace("<!-- -->", "")
    today = datetime.date.today().isoformat()
    out = []
    for seg in html.split("<a "):
        m = re.search(r'href="(/products/[a-z0-9-]+)"', seg)
        if not m:
            continue
        slug = m.group(1)
        pm = PRICE_RE.search(seg)
        if not pm:
            continue
        # 名称形如：<span ...>#1</span>Claude <span ...>· Pro</span>
        nm = re.search(r">#\d+</span>([^<]+)(?:<span[^>]*>·\s*([^<]+))?", seg)
        brand = nm.group(1).strip() if nm else slug.split("/")[-1]
        tier = (nm.group(2) or "").strip() if nm else ""
        name = f"{brand} {tier}".strip()
        region = "cn" if re.search(r"中国|国内", seg) else "intl"
        out.append({"name": name, "brand": brand.lower().replace(" ", ""),
                    "price": pm.group(1).replace(" ", ""), "region": region,
                    "url": PINGFAN_URL + slug})
    seen, uniq = set(), []
    for e in out:
        k = norm(e["name"])
        if k and k not in seen:
            seen.add(k)
            uniq.append(e)
    return uniq


# ---------- 主流程 ----------
def main():
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass
    today = datetime.date.today().isoformat()
    builtin = load_builtin()
    bi_index = {}
    for b in builtin:
        bi_index[norm(b["name"])] = b
        bi_index[norm(b["vendor"] + b["name"])] = b
    log(f"内置条目 {len(builtin)} 条，开始抓取远程源…")

    remote, patches = [], []
    # 源 1
    try:
        aw = parse_awesome()
        skip = 0
        for e in aw:
            k = norm(e["name"])
            if k in bi_index or (e["vendor"] + e["name"] and norm(e["vendor"] + e["name"]) in bi_index):
                skip += 1  # 网站已有权威条目，跳过避免重复
                continue
            remote.append(e)
        log(f"[1/2] awesome-coding-ai：抓到 {len(aw)} 条，跳过已收录 {skip} 条，新增 {len(remote)} 条")
    except Exception as e:
        log(f"[1/2] awesome-coding-ai 抓取失败：{e}")

    # 源 2
    try:
        pf = parse_pingfan()
        enriched = 0
        for e in pf:
            k = norm(e["name"])
            bid = ALIAS.get(norm(e["brand"]))
            hit = bi_index.get(k) or next(
                (b for b in builtin if b["id"] == bid), None)
            if hit:
                patches.append({"id": hit["id"], "price": e["price"],
                                "checked": today + "(自动)"})
            else:
                t = next((r for r in remote if norm(r["name"]) == k), None)
                if t:
                    t["price"] = e["price"]
                    enriched += 1
                else:
                    remote.append({
                        "id": "pf-" + norm(e["name"])[:40],
                        "vendor": e["brand"],
                        "name": e["name"],
                        "cat": "plan", "region": e.get("region", "intl"),
                        "isFree": bool(re.search(r"free|0", e["price"], re.I)),
                        "free": "自动抓取的入门套餐信息，详见链接页面",
                        "price": e["price"],
                        "tags": ["自动抓取", "Coding Plan"],
                        "value": 3, "hot": False,
                        "url": e["url"],
                        "note": "🤖 自动抓取自 cp.pingfan.me，未经人工核查",
                        "checked": today + "(自动)",
                    })
        log(f"[2/2] cp.pingfan.me：产品 {len(pf)} 个，价格补丁 {len(patches)} 条，"
            f"补全远程条目 {enriched} 条")
    except Exception as e:
        log(f"[2/2] cp.pingfan.me 抓取失败：{e}")

    remote.sort(key=lambda x: -x.get("value", 3))
    meta = {
        "generated": datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "sources": ["awesome-coding-ai README", "cp.pingfan.me"],
        "newEntries": len(remote),
        "patches": len(patches),
    }
    payload = {"meta": meta, "offers": remote + patches}

    (ROOT / "data-remote.json").write_text(
        json.dumps(payload, ensure_ascii=False, indent=1), encoding="utf-8")
    js = ("/* 自动生成于 %s，由 update_data.py 抓取，勿手改 */\n"
          "window.WOOL_REMOTE = %s;\n"
          "window.WOOL_REMOTE_META = %s;\n"
          % (meta["generated"],
             json.dumps(remote + patches, ensure_ascii=False),
             json.dumps(meta, ensure_ascii=False)))
    (ROOT / "data-remote.js").write_text(js, encoding="utf-8")
    log(f"完成：新增候选 {len(remote)} 条，价格补丁 {len(patches)} 条 "
        f"→ data-remote.json / data-remote.js")
    if not remote and not patches:
        log("提示：本次没有新数据（源站结构可能变化，请人工核对聚合站）")


if __name__ == "__main__":
    main()

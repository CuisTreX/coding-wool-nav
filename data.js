/* ============================================================
 * 编程羊毛导航 · 内置优惠数据（v2 扩充版）
 * 数据来源：各官网 + cp.pingfan.me + awesome-coding-ai 促销审计（2026-07-23）
 *          + linux.do / V2EX / Reddit / X 等社区讨论，核查截至 2026-09-27
 * 字段说明：
 *   id       唯一标识          vendor  厂商            name  计划/产品名
 *   cat      plan订阅 | ide编辑器 | cli命令行 | builder应用构建 | api免费额度 | student学生福利
 *   region   cn国内 | intl国际    isFree  是否有免费层/免费额度
 *   free     免费内容描述        price   付费价格         promo 限时活动（有则显示高亮条）
 *   tags     标签               value   羊毛指数 1-5    hot   推荐标记
 *   url      领取/开通页        home    官网主页（可选）  note  备注（可选）
 *   checked  最后核查时间（羊毛时效性强，以官网为准）
 * ============================================================ */
window.WOOL_DATA = [

  /* ============ 订阅 Plan ============ */
  {
    id: 'glm-coding', vendor: '智谱 AI', name: 'GLM Coding Plan', cat: 'plan', region: 'cn',
    isFree: false,
    free: '付费用户夜间 23:00–次日 9:00 用 GLM-5.3-Flash 额度按 0 计费（ZCode 内），活动延期至 2026-10-07',
    price: 'Lite ¥118/月起 · 首季/首年半价活动 · Max 首月 ¥200',
    promo: '夜间免费畅用延至 2026-10-07',
    tags: ['限时活动', '夜间免费', '邀请码95折'],
    value: 5, hot: true,
    url: 'https://www.bigmodel.cn/glm-coding',
    home: 'https://open.bigmodel.cn',
    note: '邀请码可享 95 折；仅支持 GLM 系模型',
    checked: '2026-09-27'
  },
  {
    id: 'commandcode', vendor: 'Command Code', name: 'Command Code', cat: 'plan', region: 'intl',
    isFree: true,
    free: 'Go 档 $1 得 $10 额度（10 倍杠杆）；含 4 条免费模型路由（Ling 3.0 Flash Sante 每日 100 次）；BYOK 150+ 供应商免费接入',
    price: 'Go $1/月 · GOAT $10=$70 额度 · Pro $20=$80 额度',
    promo: '$1 Go 档 10 倍额度杠杆',
    tags: ['X热荐', '10倍杠杆', '免费模型路由', 'BYOK'],
    value: 5, hot: true,
    url: 'https://commandcode.ai',
    note: '社区评价比中转站靠谱；额度结转不失效（加量包）',
    checked: '2026-09-27'
  },
  {
    id: 'codex', vendor: 'OpenAI', name: 'Codex', cat: 'plan', region: 'intl',
    isFree: true,
    free: 'ChatGPT 订阅即含 Codex；Go 档 $8/月是最低门槛官方入口',
    price: 'Go $8/月 · Plus $20/月',
    tags: ['低价官方入口'],
    value: 4,
    url: 'https://openai.com/codex/',
    checked: '2026-09-27'
  },
  {
    id: 'kimi-coding', vendor: '月之暗面', name: 'Kimi For Coding', cat: 'plan', region: 'cn',
    isFree: false,
    free: '不定期开放新用户优惠与免费体验；开放平台注册送体验金；Kimi Code CLI 已开源',
    price: 'Andante ¥49/月起',
    tags: ['不定期开放'],
    value: 3,
    url: 'https://www.kimi.com/',
    home: 'https://platform.moonshot.cn',
    note: '购买入口不定期关闭，蹲官方公告',
    checked: '2026-09-27'
  },
  {
    id: 'minimax-coding', vendor: 'MiniMax', name: 'MiniMax Coding Plan', cat: 'plan', region: 'cn',
    isFree: false,
    free: '开放平台注册送体验额度，订阅制 Coding Plan（M2 系主打）',
    price: '订阅制，以官网为准',
    tags: ['注册送额度'],
    value: 3,
    url: 'https://platform.minimaxi.com/',
    checked: '2026-09'
  },
  {
    id: 'claude-code', vendor: 'Anthropic', name: 'Claude Code', cat: 'plan', region: 'intl',
    isFree: false,
    free: '无免费层，需订阅后使用；Claude 网页免费层不含 Claude Code',
    price: 'Pro $20/月 · Max $100/$200',
    tags: ['需订阅'],
    value: 2,
    url: 'https://claude.com/product/claude-code',
    checked: '2026-09-27'
  },
  {
    id: 'grok-build', vendor: 'xAI', name: 'Grok Build', cat: 'plan', region: 'intl',
    isFree: false,
    free: '随 SuperGrok 订阅提供',
    price: 'SuperGrok $30/月',
    tags: ['需订阅'],
    value: 2,
    url: 'https://grok.com/',
    checked: '2026-09'
  },
  {
    id: 'cerebras-code', vendor: 'Cerebras', name: 'Cerebras Code', cat: 'plan', region: 'intl',
    isFree: true,
    free: '订阅享极高速 Qwen-Coder 推理，注册有试用',
    price: '订阅制，以官网为准',
    tags: ['极速推理'],
    value: 3,
    url: 'https://www.cerebras.ai/coding-plan',
    home: 'https://cloud.cerebras.ai',
    checked: '2026-07'
  },

  /* ============ AI IDE / 编辑器 ============ */
  {
    id: 'lingma', vendor: '阿里云', name: '通义灵码（Qoder CN）', cat: 'ide', region: 'cn',
    isFree: true,
    free: '个人基础版完全免费，代码补全不限次；AI IDE 免费开放，深度适配千问3',
    price: '个人版 ¥0',
    tags: ['完全免费', '补全不限次'],
    value: 5, hot: true,
    url: 'https://lingma.aliyun.com/',
    note: '品牌已并入 Qoder（Qoder CN），个人免费层保留',
    checked: '2026-09-27'
  },
  {
    id: 'comate', vendor: '百度', name: '文心快码 Comate', cat: 'ide', region: 'cn',
    isFree: true,
    free: '个人版完全免费、无次数限制，中文理解强，VSCode / JetBrains 全系列',
    price: '个人版 ¥0',
    tags: ['完全免费', '无次数限制'],
    value: 5, hot: true,
    url: 'https://comate.baidu.com/',
    note: 'Comate Auto 邀测限免（不限量 Token）已于 2026-09-24 结束，蹲下一波',
    checked: '2026-09-27'
  },
  {
    id: 'copilot-free', vendor: 'GitHub', name: 'GitHub Copilot Free', cat: 'ide', region: 'intl',
    isFree: true,
    free: '永久免费层：约 2000 次/月补全 + 50 次/月聊天与 Agent，VSCode/JetBrains/Neovim 全支持',
    price: 'Pro $10/月（含 $15 高级请求池）',
    tags: ['永久免费层', '生态最广'],
    value: 5, hot: true,
    url: 'https://github.com/features/copilot',
    checked: '2026-09-27'
  },
  {
    id: 'qoder', vendor: '阿里', name: 'Qoder', cat: 'ide', region: 'cn',
    isFree: true,
    free: 'Free 体验版免费下载使用，Quest 模式额度较足',
    price: 'Pro ¥59/月 · Pro+ ¥169/月',
    tags: ['免费体验版'],
    value: 4,
    url: 'https://qoder.com/',
    note: '重度功能（文档/Agent）消耗额度较快',
    checked: '2026-09-27'
  },
  {
    id: 'codebuddy', vendor: '腾讯云', name: 'CodeBuddy', cat: 'ide', region: 'cn',
    isFree: true,
    free: '体验版每月 500 基础积分 + 代码实时补全限免无限次；插件 / IDE / CLI 三形态',
    price: '国内个人版限时免费 · 国际 Pro 半价 $9.95/月（原 $19.90）',
    promo: '国际版 Pro 限时半价 $9.95',
    tags: ['限时免费', '每月积分', '国际版半价'],
    value: 4,
    url: 'https://www.codebuddy.cn/',
    home: 'https://www.codebuddy.ai',
    checked: '2026-09-27'
  },
  {
    id: 'windsurf', vendor: 'Windsurf', name: 'Windsurf', cat: 'ide', region: 'intl',
    isFree: true,
    free: '免费层含无限快速补全 + 每月少量高级模型积分，公认最慷慨免费层之一',
    price: 'Pro $20/月',
    tags: ['无限补全', '慷慨免费层'],
    value: 4, hot: true,
    url: 'https://windsurf.com/',
    checked: '2026-09-27'
  },
  {
    id: 'cursor', vendor: 'Anysphere', name: 'Cursor', cat: 'ide', region: 'intl',
    isFree: true,
    free: '免费层含少量快速请求，用完降速；学生认证专属优惠不定期开放',
    price: 'Pro $20/月',
    tags: ['免费层有限', '学生优惠不定期'],
    value: 3,
    url: 'https://cursor.com/',
    note: '综合体验最强，但免费层较紧',
    checked: '2026-09-27'
  },
  {
    id: 'trae', vendor: '字节跳动', name: 'Trae / 豆包MarsCode', cat: 'ide', region: 'cn',
    isFree: true,
    free: 'MarsCode 免费；Trae 国内版个人免费（SOLO 国内免费），但普通版已全面限额',
    price: 'Trae 国际 Lite $3/月（含 $5 用量池）',
    tags: ['免费但限额', 'SOLO免费'],
    value: 3,
    url: 'https://www.trae.cn/',
    home: 'https://www.marscode.cn',
    checked: '2026-09-27'
  },
  {
    id: 'zed', vendor: 'Zed Industries', name: 'Zed', cat: 'ide', region: 'intl',
    isFree: true,
    free: '编辑器免费开源，注册送 AI 使用额度，可 BYOK',
    price: 'AI 按用量',
    tags: ['开源', 'BYOK'],
    value: 3,
    url: 'https://zed.dev/',
    checked: '2026-09'
  },
  {
    id: 'jetbrains-ai', vendor: 'JetBrains', name: 'JetBrains AI / Junie', cat: 'ide', region: 'intl',
    isFree: true,
    free: 'IDE 内置 AI 免费层（有限额度）；Junie 可 30 天试用 AI Pro',
    price: 'AI Pro $10/月',
    promo: 'Junie 30 天 AI Pro 试用',
    tags: ['免费层', '试用'],
    value: 3,
    url: 'https://www.jetbrains.com/ai/',
    checked: '2026-07'
  },
  {
    id: 'amazon-q', vendor: 'AWS', name: 'Amazon Q Developer', cat: 'ide', region: 'intl',
    isFree: true,
    free: '免费层（有限的 Builder 使用额度），AWS 生态内好用',
    price: 'Pro $19/月',
    tags: ['免费层'],
    value: 3,
    url: 'https://aws.amazon.com/q/developer/',
    checked: '2026-09'
  },
  {
    id: 'kiro', vendor: 'AWS', name: 'Kiro', cat: 'ide', region: 'intl',
    isFree: true,
    free: '有免费层（spec 驱动开发 Agent IDE），另有 Kiro CLI',
    price: 'Pro $20/月',
    tags: ['免费层'],
    value: 3,
    url: 'https://kiro.dev/',
    checked: '2026-09'
  },
  {
    id: 'ibm-bob', vendor: 'IBM', name: 'IBM Bob', cat: 'ide', region: 'intl',
    isFree: true,
    free: '30 天全功能试用，含 40 Bobcoins 额度（企业级编码 Agent）',
    price: '试用后企业订阅',
    promo: '30 天试用 + 40 Bobcoins',
    tags: ['大厂试用', '企业级'],
    value: 2,
    url: 'https://bob.ibm.com/trial',
    checked: '2026-07'
  },
  {
    id: 'zcode-zai', vendor: '智谱 AI', name: 'ZCode 桌面 Agent', cat: 'ide', region: 'cn',
    isFree: true,
    free: '新用户 5 天试用；GLM Coding Plan 用户配合夜间活动可 0 成本重度使用',
    price: '随 GLM Coding Plan',
    tags: ['5天试用', '配合夜间活动'],
    value: 3,
    url: 'https://zcode.z.ai',
    checked: '2026-07'
  },
  {
    id: 'codegeex', vendor: '智谱 AI', name: 'CodeGeeX', cat: 'ide', region: 'cn',
    isFree: true,
    free: '个人使用免费，多语言代码补全与翻译',
    price: '个人版 ¥0',
    tags: ['完全免费'],
    value: 3,
    url: 'https://codegeex.cn/',
    checked: '2026-09'
  },
  {
    id: 'fitten', vendor: '非十科技', name: 'Fitten Code', cat: 'ide', region: 'cn',
    isFree: true,
    free: '个人免费，国产高速代码补全',
    price: '个人版 ¥0',
    tags: ['完全免费'],
    value: 3,
    url: 'https://code.fittentech.com/',
    checked: '2026-09'
  },
  {
    id: 'zencoder', vendor: 'Zencoder', name: 'Zencoder', cat: 'ide', region: 'intl',
    isFree: true,
    free: '有免费层（Zen Agent / 补全），以官网为准',
    price: '免费层 + 订阅',
    tags: ['免费层'],
    value: 3,
    url: 'https://www.zencoder.ai/',
    checked: '2026-07'
  },

  /* ============ 命令行 Agent ============ */
  {
    id: 'qwen-code', vendor: '阿里通义', name: 'Qwen Code CLI', cat: 'cli', region: 'cn',
    isFree: true,
    free: 'CLI 免费使用，Qwen 账号 OAuth 登录即享每日免费请求额度',
    price: 'Token Plan Personal Lite $6/月起',
    tags: ['每日免费额度'],
    value: 4,
    url: 'https://chat.qwen.ai/',
    home: 'https://qwenlm.github.io/qwen-code-docs/',
    checked: '2026-09-27'
  },
  {
    id: 'jules', vendor: 'Google', name: 'Jules', cat: 'cli', region: 'intl',
    isFree: true,
    free: '异步编码 Agent 有免费层（每日/每月限次任务），挂后台跑任务',
    price: '免费层 + AI 订阅加量',
    tags: ['异步Agent', '免费层'],
    value: 4,
    url: 'https://jules.google.com',
    checked: '2026-07'
  },
  {
    id: 'antigravity', vendor: 'Google', name: 'Antigravity（含 Gemini CLI）', cat: 'cli', region: 'intl',
    isFree: true,
    free: 'Antigravity 有免费层；Gemini CLI 已并入，消费版 Code Assist 免费层 2026-06-18 退役',
    price: 'Code Assist Standard $19/月',
    tags: ['免费层', '政策变动快'],
    value: 3,
    url: 'https://antigravity.google/',
    home: 'https://github.com/google-gemini/gemini-cli',
    note: '以官方页面最新说明为准',
    checked: '2026-09-27'
  },
  {
    id: 'iflow', vendor: '心流 iFlow', name: 'iFlow CLI', cat: 'cli', region: 'cn',
    isFree: true,
    free: 'CLI 免费，内置多家模型免费额度（社区公认曾是大额白嫖口）',
    price: '¥0',
    tags: ['免费', '有停更传闻'],
    value: 4,
    url: 'https://iflow.cn/',
    note: '⚠️ awesome-coding-ai 记录 CLI 已于 2026-04-17 停止更新，入口以官网为准',
    checked: '2026-07'
  },
  {
    id: 'augment', vendor: 'Augment', name: 'Augment Code', cat: 'cli', region: 'intl',
    isFree: true,
    free: '注册送 30,000 credits 试用（需绑卡）',
    price: '试用额度 + 订阅',
    tags: ['大额试用', '需绑卡'],
    value: 4,
    url: 'https://www.augmentcode.com/',
    checked: '2026-07'
  },
  {
    id: 'kilo', vendor: 'Kilo Code', name: 'Kilo Code', cat: 'cli', region: 'intl',
    isFree: true,
    free: 'Laguna S 2.1 / Hy3 等模型当前免费调用；新用户注册送额度；500+ 模型可接',
    price: '按量 + 订阅',
    promo: 'Laguna S 2.1 / Hy3 限免',
    tags: ['免费模型', 'OpenRouter热门'],
    value: 4,
    url: 'https://kilo.ai',
    checked: '2026-07'
  },
  {
    id: 'opencode', vendor: 'OpenCode', name: 'OpenCode', cat: 'cli', region: 'intl',
    isFree: true,
    free: '开源 CLI 完全免费 BYOK；Zen 平台 6 款模型限免，Union Alpha 隐蔽模型各平台限免',
    price: 'Zen Go $10/月',
    tags: ['开源', 'BYOK', '免费模型'],
    value: 4,
    url: 'https://opencode.ai/',
    checked: '2026-09-27'
  },
  {
    id: 'rovo-dev', vendor: 'Atlassian', name: 'Rovo Dev', cat: 'cli', region: 'intl',
    isFree: true,
    free: '30 天 Standard 试用，每月 2000 credits',
    price: 'Standard 含在订阅',
    promo: '30 天 Standard 试用',
    tags: ['大厂试用', '终端Agent'],
    value: 4,
    url: 'https://www.atlassian.com/software/rovo',
    checked: '2026-07'
  },
  {
    id: 'warp', vendor: 'Warp', name: 'Warp', cat: 'cli', region: 'intl',
    isFree: true,
    free: 'AI 终端有免费层（含一定 AI 请求额度）',
    price: '免费层 + Pro 订阅',
    tags: ['AI终端', '免费层'],
    value: 3,
    url: 'https://www.warp.dev/',
    checked: '2026-07'
  },
  {
    id: 'factory', vendor: 'Factory', name: 'Factory Droid', cat: 'cli', region: 'intl',
    isFree: true,
    free: '注册有试用额度（Droid CLI / 背景Agent）',
    price: '试用 + 订阅',
    tags: ['试用额度'],
    value: 3,
    url: 'https://factory.ai/',
    checked: '2026-07'
  },
  {
    id: 'mistral-vibe', vendor: 'Mistral AI', name: 'Mistral Vibe', cat: 'cli', region: 'intl',
    isFree: true,
    free: 'Mistral 官方编码 CLI，配合 La Plateforme 免费层使用',
    price: '随 API 计费（有免费层）',
    tags: ['官方CLI', 'BYOK'],
    value: 3,
    url: 'https://mistral.ai/',
    checked: '2026-07'
  },
  {
    id: 'kimi-cli', vendor: '月之暗面', name: 'Kimi Code CLI', cat: 'cli', region: 'cn',
    isFree: true,
    free: '官方 CLI 已开源，配置 Kimi 账号/API 使用',
    price: '随 Kimi 订阅 / API',
    tags: ['开源', '官方CLI'],
    value: 3,
    url: 'https://www.kimi.com/',
    note: '入口见官网 Code 页面',
    checked: '2026-07'
  },
  {
    id: 'amp', vendor: 'Sourcegraph', name: 'Amp', cat: 'cli', region: 'intl',
    isFree: true,
    free: 'Agent CLI，注册有试用额度，可 BYOK',
    price: '按量 / 订阅',
    tags: ['试用额度', 'BYOK'],
    value: 2,
    url: 'https://ampcode.com/',
    checked: '2026-07'
  },
  {
    id: 'devin', vendor: 'Cognition', name: 'Devin', cat: 'cli', region: 'intl',
    isFree: false,
    free: '背景异步 Agent，另有 Devin for Desktop / Terminal',
    price: 'Pro $20/月 起',
    tags: ['背景Agent'],
    value: 2,
    url: 'https://devin.ai/',
    checked: '2026-07'
  },
  {
    id: 'cline', vendor: 'Cline', name: 'Cline', cat: 'cli', region: 'intl',
    isFree: true,
    free: '开源 VSCode Agent 插件，完全免费，自带免费模型入口，BYOK 接任意 API',
    price: '工具 ¥0（按 API 计费）',
    tags: ['开源', 'BYOK', '免费工具'],
    value: 4, hot: true,
    url: 'https://cline.bot/',
    checked: '2026-09'
  },
  {
    id: 'roo', vendor: 'Roo Code', name: 'Roo Code', cat: 'cli', region: 'intl',
    isFree: true,
    free: '开源 Agent 插件（Cline 分支），免费 BYOK',
    price: '工具 ¥0（按 API 计费）',
    tags: ['开源', 'BYOK'],
    value: 4,
    url: 'https://roocode.com/',
    checked: '2026-09'
  },
  {
    id: 'aider', vendor: 'Aider', name: 'Aider', cat: 'cli', region: 'intl',
    isFree: true,
    free: '开源终端结对编程工具，免费 BYOK，可接本地模型',
    price: '工具 ¥0（按 API 计费）',
    tags: ['开源', 'BYOK', '本地模型'],
    value: 4,
    url: 'https://aider.chat/',
    checked: '2026-09'
  },
  {
    id: 'goose', vendor: 'Block', name: 'Goose', cat: 'cli', region: 'intl',
    isFree: true,
    free: 'Block 开源 AI Agent，免费 BYOK，可本地运行',
    price: '工具 ¥0（按 API 计费）',
    tags: ['开源', 'BYOK'],
    value: 3,
    url: 'https://block.github.io/goose/',
    checked: '2026-09'
  },
  {
    id: 'continue', vendor: 'Continue', name: 'Continue', cat: 'cli', region: 'intl',
    isFree: true,
    free: '开源 AI 代码助手（IDE 插件 + CLI），免费 BYOK',
    price: '工具 ¥0（按 API 计费）',
    tags: ['开源', 'BYOK'],
    value: 3,
    url: 'https://continue.dev/',
    checked: '2026-09'
  },
  {
    id: 'openhands', vendor: 'OpenHands', name: 'OpenHands', cat: 'cli', region: 'intl',
    isFree: true,
    free: '开源背景编码 Agent（原 OpenDevin），免费 BYOK 自部署',
    price: '工具 ¥0（按 API 计费）',
    tags: ['开源', 'BYOK', '自部署'],
    value: 3,
    url: 'https://github.com/All-Hands-AI/OpenHands',
    checked: '2026-09'
  },

  /* ============ App 构建 ============ */
  {
    id: 'bolt', vendor: 'StackBlitz', name: 'Bolt.new', cat: 'builder', region: 'intl',
    isFree: true,
    free: '每日免费 token 额度（约 7-8 轮对话用完，可多工具轮换薅）',
    price: '免费层 + 订阅',
    tags: ['每日免费', '额度较浅'],
    value: 4,
    url: 'https://bolt.new/',
    checked: '2026-09-27'
  },
  {
    id: 'v0', vendor: 'Vercel', name: 'v0', cat: 'builder', region: 'intl',
    isFree: true,
    free: '免费层每月一定 credits（生成 UI / 全栈应用）',
    price: '免费层 + Premium $20/月',
    tags: ['每月credits'],
    value: 3,
    url: 'https://v0.dev/',
    checked: '2026-09-27'
  },
  {
    id: 'lovable', vendor: 'Lovable', name: 'Lovable', cat: 'builder', region: 'intl',
    isFree: true,
    free: '每日免费 credits（限次，社区常用 Bolt+v0+Lovable 轮换白嫖）',
    price: '免费层 + 订阅',
    tags: ['每日免费', '额度较浅'],
    value: 3,
    url: 'https://lovable.dev/',
    checked: '2026-09-27'
  },
  {
    id: 'replit', vendor: 'Replit', name: 'Replit Agent', cat: 'builder', region: 'intl',
    isFree: true,
    free: '免费层有限 Agent 试用；Core $25/月',
    price: '免费层 · Core $25/月',
    tags: ['免费层'],
    value: 3,
    url: 'https://replit.com/',
    checked: '2026-09'
  },

  /* ============ API 免费额度（国内） ============ */
  {
    id: 'modelscope', vendor: '阿里魔搭', name: 'ModelScope API-Inference', cat: 'api', region: 'cn',
    isFree: true,
    free: '每天 2000 次免费调用（单模型约 500 次/天），3000+ 开源模型：Qwen/DeepSeek/Kimi/GLM/MiniMax',
    price: '免费额度 + 按量',
    tags: ['每日2000次', '模型超多'],
    value: 5, hot: true,
    url: 'https://modelscope.cn/my/access/token',
    home: 'https://modelscope.cn',
    note: 'OpenAI 兼容格式，限速较严注意 429 重试；额度政策可能调整',
    checked: '2026-09-27'
  },
  {
    id: 'siliconflow', vendor: '硅基流动', name: 'SiliconFlow', cat: 'api', region: 'cn',
    isFree: true,
    free: '注册送体验额度；部分小模型（Qwen 小杯等）永久免费调用',
    price: '按量 · 有免费层',
    tags: ['注册送额度', '免费模型'],
    value: 4, hot: true,
    url: 'https://siliconflow.cn/',
    checked: '2026-09'
  },
  {
    id: 'bailian', vendor: '阿里云', name: '百炼平台', cat: 'api', region: 'cn',
    isFree: true,
    free: '新用户每款模型 100 万 tokens（长期有效）',
    price: '免费额度 + 按量',
    tags: ['100万tokens'],
    value: 4,
    url: 'https://bailian.aliyun.com/',
    checked: '2026-09-27'
  },
  {
    id: 'volcark', vendor: '火山引擎', name: '火山方舟', cat: 'api', region: 'cn',
    isFree: true,
    free: '每模型 50 万 tokens 免费额度；豆包系列每日 200 万 tokens 活动通道',
    price: '免费额度 + 按量',
    tags: ['每日200万tokens'],
    value: 4,
    url: 'https://www.volcengine.com/product/ark',
    note: '活动额度以控制台公告为准',
    checked: '2026-09-27'
  },
  {
    id: 'bigmodel-api', vendor: '智谱 AI', name: 'BigModel 开放平台', cat: 'api', region: 'cn',
    isFree: true,
    free: '注册送 GLM 系列体验 tokens，含 Flash 免费模型',
    price: '免费额度 + 按量',
    tags: ['注册送额度', '免费模型'],
    value: 4,
    url: 'https://open.bigmodel.cn/',
    checked: '2026-09'
  },
  {
    id: 'qianfan', vendor: '百度智能云', name: '千帆平台', cat: 'api', region: 'cn',
    isFree: true,
    free: '每款模型 100 万 tokens / 3 个月',
    price: '免费额度 + 按量',
    tags: ['100万tokens'],
    value: 3,
    url: 'https://qianfan.baidubce.com/',
    checked: '2026-09-27'
  },
  {
    id: 'hunyuan', vendor: '腾讯云', name: '混元大模型', cat: 'api', region: 'cn',
    isFree: true,
    free: '混元模型 100 万 tokens / 年',
    price: '免费额度 + 按量',
    tags: ['100万tokens'],
    value: 3,
    url: 'https://cloud.tencent.com/product/hunyuan',
    checked: '2026-09-27'
  },
  {
    id: 'deepseek', vendor: '深度求索', name: 'DeepSeek 开放平台', cat: 'api', region: 'cn',
    isFree: false,
    free: '无免费额度，但 API 定价全网最低档，V4 系列性价比极高',
    price: '按量计费 · 极低',
    tags: ['低价羊毛'],
    value: 3,
    url: 'https://platform.deepseek.com/',
    checked: '2026-09-27'
  },

  /* ============ API 免费额度（国际） ============ */
  {
    id: 'openrouter', vendor: 'OpenRouter', name: 'OpenRouter', cat: 'api', region: 'intl',
    isFree: true,
    free: '带 :free 后缀的模型免费调用（每日 50 次 / 充值 $10 后每日 1000 次）；Union Alpha 隐蔽模型限免',
    price: '免费层 + 按量',
    tags: ['免费模型', '聚合平台'],
    value: 5, hot: true,
    url: 'https://openrouter.ai/models?max_price=0',
    checked: '2026-09-27'
  },
  {
    id: 'gh-models', vendor: 'GitHub', name: 'GitHub Models', cat: 'api', region: 'intl',
    isFree: true,
    free: '免费 playground + 限速 API，可白嫖 GPT / Llama / DeepSeek / Grok 等多款模型',
    price: '免费层（限速）',
    tags: ['免费模型', '限速'],
    value: 5, hot: true,
    url: 'https://github.com/marketplace/models',
    checked: '2026-09-27'
  },
  {
    id: 'aistudio', vendor: 'Google', name: 'AI Studio / Gemini API', cat: 'api', region: 'intl',
    isFree: true,
    free: 'Gemini API 免费层（有限速），网页版 AI Studio 直接调试',
    price: '免费层 + 按量',
    tags: ['免费层'],
    value: 4,
    url: 'https://aistudio.google.com/',
    checked: '2026-09'
  },
  {
    id: 'groq', vendor: 'Groq', name: 'Groq Cloud', cat: 'api', region: 'intl',
    isFree: true,
    free: '免费层超高速推理（Llama / 开源模型，限速）',
    price: '免费层 + 按量',
    tags: ['免费层', '极速推理'],
    value: 4,
    url: 'https://console.groq.com/',
    checked: '2026-09'
  },
  {
    id: 'cerebras', vendor: 'Cerebras', name: 'Cerebras Inference', cat: 'api', region: 'intl',
    isFree: true,
    free: '免费层每日额度，推理速度全网第一梯队',
    price: '免费层 + 按量',
    tags: ['免费层', '极速推理'],
    value: 4,
    url: 'https://cloud.cerebras.ai/',
    checked: '2026-09'
  },
  {
    id: 'cloudflare', vendor: 'Cloudflare', name: 'Workers AI', cat: 'api', region: 'intl',
    isFree: true,
    free: '每天 1 万 neurons 免费额度（Llama / Qwen / Whisper 等数十款模型）',
    price: '免费额度 + 按量',
    tags: ['每日免费', '边缘推理'],
    value: 4,
    url: 'https://developers.cloudflare.com/workers-ai/',
    checked: '2026-09'
  },
  {
    id: 'huggingface', vendor: 'Hugging Face', name: 'Inference Providers', cat: 'api', region: 'intl',
    isFree: true,
    free: '免费账户每月送少量推理积分，可调各家托管模型',
    price: '每月免费积分 + 按量',
    tags: ['每月积分'],
    value: 3,
    url: 'https://huggingface.co/docs/inference-providers',
    checked: '2026-09'
  },
  {
    id: 'together', vendor: 'Together AI', name: 'Together AI', cat: 'api', region: 'intl',
    isFree: true,
    free: '注册送体验金；少量模型有免费端点',
    price: '体验金 + 按量',
    tags: ['注册送额度', '免费模型'],
    value: 3,
    url: 'https://www.together.ai/',
    checked: '2026-09'
  },
  {
    id: 'mistral', vendor: 'Mistral AI', name: 'La Plateforme', cat: 'api', region: 'intl',
    isFree: true,
    free: 'Experiment 免费层（需绑卡，限速）；Leanstral 等模型有免费路由',
    price: '免费层 + 按量',
    tags: ['免费层', '需绑卡'],
    value: 3,
    url: 'https://console.mistral.ai/',
    checked: '2026-07'
  },
  {
    id: 'cohere', vendor: 'Cohere', name: 'Cohere Trial', cat: 'api', region: 'intl',
    isFree: true,
    free: '试用 Key 每月 1000 次免费调用（含评价用途）',
    price: '每月 1000 次',
    tags: ['每月1000次'],
    value: 3,
    url: 'https://cohere.com/',
    checked: '2026-07'
  },
  {
    id: 'sambanova', vendor: 'SambaNova', name: 'SambaNova Cloud', cat: 'api', region: 'intl',
    isFree: true,
    free: '免费层限速调用开源模型',
    price: '免费层 + 按量',
    tags: ['免费层'],
    value: 3,
    url: 'https://cloud.sambanova.ai/',
    checked: '2026-09'
  },
  {
    id: 'nvidia-nim', vendor: 'NVIDIA', name: 'NIM / build.nvidia.com', cat: 'api', region: 'intl',
    isFree: true,
    free: '注册送 1000 credits，试用各家开源大模型 API',
    price: '试用额度',
    tags: ['试用额度'],
    value: 3,
    url: 'https://build.nvidia.com/',
    checked: '2026-09'
  },

  /* ============ 学生 / 特殊群体福利 ============ */
  {
    id: 'gh-student', vendor: 'GitHub', name: 'Student Developer Pack', cat: 'student', region: 'intl',
    isFree: true,
    free: '学生认证后 Copilot Pro 免费 + JetBrains 全家桶 / 云资源 / 域名等大礼包',
    price: '学生 ¥0',
    tags: ['学生福利', '价值极高'],
    value: 5, hot: true,
    url: 'https://education.github.com/pack',
    checked: '2026-09-27'
  },
  {
    id: 'jetbrains-student', vendor: 'JetBrains', name: '学生教育授权', cat: 'student', region: 'intl',
    isFree: true,
    free: '在校认证后全家桶 IDE（IDEA/PyCharm/WebStorm…）免费一年，可续期',
    price: '学生 ¥0',
    tags: ['学生福利', '可续期'],
    value: 5,
    url: 'https://www.jetbrains.com/community/education/',
    checked: '2026-09'
  },
  {
    id: 'ona', vendor: 'Ona（原 Gitpod）', name: 'Ona 开源维护者计划', cat: 'student', region: 'intl',
    isFree: true,
    free: '认证开源维护者每月最多 $200 云开发额度',
    price: 'OSS 维护者 ¥0',
    promo: '每月最高 $200 额度',
    tags: ['开源维护者', '高价值'],
    value: 4,
    url: 'https://ona.com/open-source',
    checked: '2026-07'
  }
];

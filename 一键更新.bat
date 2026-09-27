@echo off
chcp 65001 >nul
cd /d %~dp0
echo ============================================
echo   编程羊毛导航 · 一键更新并打开
echo ============================================
echo.

echo [1/2] 抓取最新优惠数据（awesome-coding-ai + cp.pingfan.me）...
python update_data.py
if errorlevel 1 (
    echo.
    echo [!] 抓取失败：请检查 python 是否在 PATH、网络是否可用。
    pause
    exit /b 1
)

echo.
echo [2/2] 启动本地服务并打开页面（关闭弹出的窗口即停止服务）...
start "wool-server" /min cmd /c "python -m http.server 8433 --bind 127.0.0.1"
timeout /t 1 >nul
start "" "http://127.0.0.1:8433/index.html"

echo.
echo 完成！页面打开后点右上角「🔄 查询更新」即可合并最新数据。
echo （下次可直接双击 index.html 使用，数据已保存在浏览器中）
echo.
pause

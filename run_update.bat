
@echo off
chcp 65001 >nul
title JavaScript README Auto Updater

set "REPO_URL=https://github.com/yudix10/JavaScript.git"
set "REPO_DIR=JavaScript"

echo ==============================
echo   JavaScript README Updater
echo ==============================

where git >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Git не установлен!
    pause
    exit /b 1
)

where python >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Python не установлен!
    pause
    exit /b 1
)

if not exist "%REPO_DIR%\.git" (
    echo [INFO] Cloning repository...
    git clone "%REPO_URL%" "%REPO_DIR%"
    if errorlevel 1 goto error
)

cd /d "%REPO_DIR%"

echo [INFO] Pulling latest changes...
git pull --rebase origin HEAD
if errorlevel 1 goto error

echo [INFO] Updating README...
python update_readme.py
if errorlevel 1 goto error

git diff --quiet -- README.md
if not errorlevel 1 (
    echo [INFO] README is already up to date.
    goto finish
)

echo [INFO] Saving changes...
git add README.md
git commit -m "Auto-update README structure"
if errorlevel 1 goto error

echo [INFO] Pushing to GitHub...
git push
if errorlevel 1 goto error

echo [SUCCESS] README updated and pushed!

:finish
echo.
pause
exit /b 0

:error
echo.
echo [ERROR] Update failed!
echo Check Git, Python and GitHub access.
pause
exit /b 1
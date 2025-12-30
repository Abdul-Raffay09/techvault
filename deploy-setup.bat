@echo off
echo ===================================
echo   Git Configuration Script
echo ===================================
echo.

cd /d C:\Users\Rafay\Desktop\lab7\lab7

echo Configuring Git...
git config --global user.name "Abdul-Raffay09"
git config --global user.email "abdulraffay@example.com"

echo.
echo Initializing repository...
git init

echo.
echo Adding files...
git add .

echo.
echo Committing...
git commit -m "Deploy TechVault E-Commerce"

echo.
echo Creating main branch...
git branch -M main

echo.
echo ===================================
echo NEXT STEPS:
echo 1. Go to: https://github.com/new
echo 2. Create repo: techvault
echo 3. Copy the URL (e.g., https://github.com/Abdul-Raffay09/techvault.git)
echo 4. Run: git remote add origin YOUR-GITHUB-URL
echo 5. Run: git push -u origin main
echo ===================================
echo.
pause

@echo off
echo ========================================================
echo   Fokus & Maqsad - GitHub Repository Ulanish Skripti
echo ========================================================
echo.
set DEFAULT_REPO=https://github.com/MIS-uz/Maqsad.git
echo Standart Repository: %DEFAULT_REPO%
set /p REPO_URL="Boshqa repo URL kiritasizmi yoki Enterni bosing: "

if "%REPO_URL%"=="" (
    set REPO_URL=%DEFAULT_REPO%
)

echo.
echo [1/4] Git omborini ishga tushirish (git init)...
git init

echo [2/4] Barcha fayllarni qoshish (git add)...
git add .

echo [3/4] Dastlabki commitni yaratish (git commit)...
git commit -m "feat: initial release of Fokus & Maqsad app"

echo [4/4] GitHub masofaviy omboriga yuklash (git push)...
git branch -M main
git remote remove origin 2>nul
git remote add origin %REPO_URL%
git push -u origin main --force

echo.
echo ========================================================
echo [Muvaffaqiyatli] Kod GitHub ga yuklandi!
echo ========================================================
pause

@echo off
set /p commitMessage="Please enter the commit message (type 'cancel' to cancel): "
if /I "%commitMessage%"=="cancel" (goto:cancel)
git add .

git commit -m "%DATA% %TIME%: %commitMessage%"
git push origin master
goto:end

:cancel
echo Canceled

:end
pause
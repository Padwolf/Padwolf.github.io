@echo off
set /p commitMessage=Please enter the commit message (type "cancel" to cancel): 
if /I %commitMessage% EQU "cancel" (GOTO:EOF)
cd C:\Users\970098955\Programming\HTML\PersonalSite
rmdir /S /Q ftc-2016-2017
xcopy /s C:\Users\970098955\Programming\FTC\website C:\Users\970098955\Programming\HTML\PersonalSite\ftc-2016-2017
git add *
git commit -m "%DATE% %TIME%: %commitMessage%"
echo "Done"
pause
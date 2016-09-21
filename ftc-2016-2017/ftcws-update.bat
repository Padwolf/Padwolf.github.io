@echo off
set /p commitMessage="Please enter the commit message (type 'cancel' to cancel): "
if /I "%commitMessage%"=="cancel" (goto:cancel)
cd C:\Users\970098955\Programming\HTML\PersonalSite
rmdir /S /Q ftc-2016-2017
echo d | xcopy /s C:\Users\970098955\Programming\FTC\website C:\Users\970098955\Programming\HTML\PersonalSite\ftc-2016-2017
git add *
git commit -m "%DATE% %TIME%: %commitMessage%"
echo Committed
:push
set /p push="Do you want to push the changes to GitHub? [Y]es/[N]o: "
if /I "%push%"=="y" (
	git push -u origin master
	echo Pushed
	pause
	goto:eof
)
if /I "%push%"=="n" (
	echo Done
	pause
	goto:eof
)
echo "Please say [Y]es or [N]o"
goto:push
pause
goto:eof
:cancel
echo Canceled
pause
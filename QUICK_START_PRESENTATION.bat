@echo off
echo ========================================
echo CryptoZombies Presentation Setup
echo ========================================
echo.
echo Step 1: Make sure Ganache is running!
echo Press any key when Ganache is ready...
pause
echo.
echo Step 2: Deploying contracts...
call truffle migrate --reset
echo.
echo Step 3: Starting frontend server...
echo Open http://localhost:8080 in your browser
echo Press CTRL+C to stop the server
echo.
call npx http-server -p 8080


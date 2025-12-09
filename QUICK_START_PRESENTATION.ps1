Write-Host "========================================" -ForegroundColor Cyan
Write-Host "CryptoZombies Presentation Setup" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Step 1: Make sure Ganache is running!" -ForegroundColor Yellow
Write-Host "Press any key when Ganache is ready..." -ForegroundColor Yellow
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
Write-Host ""
Write-Host "Step 2: Deploying contracts..." -ForegroundColor Green
truffle migrate --reset
Write-Host ""
Write-Host "Step 3: Starting frontend server..." -ForegroundColor Green
Write-Host "Open http://localhost:8080 in your browser" -ForegroundColor Cyan
Write-Host "Press CTRL+C to stop the server" -ForegroundColor Yellow
Write-Host ""
npx http-server -p 8080


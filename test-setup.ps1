# CryptoZombies DApp - Test Setup Script
# This script will help you set up and test your DApp

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  CryptoZombies DApp Test Setup" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Step 1: Checking prerequisites..." -ForegroundColor Yellow
Write-Host ""

# Check Node.js
Write-Host "Checking Node.js..." -ForegroundColor White
try {
    $nodeVersion = node --version
    Write-Host "  ✓ Node.js: $nodeVersion" -ForegroundColor Green
}
catch {
    Write-Host "  ✗ Node.js not found. Please install Node.js v14.16.0+" -ForegroundColor Red
    exit
}

# Check npm
Write-Host "Checking npm..." -ForegroundColor White
try {
    $npmVersion = npm --version
    Write-Host "  ✓ npm: $npmVersion" -ForegroundColor Green
}
catch {
    Write-Host "  ✗ npm not found" -ForegroundColor Red
    exit
}

Write-Host ""
Write-Host "Step 2: Installing dependencies (if needed)..." -ForegroundColor Yellow
Write-Host ""

if (!(Test-Path "node_modules")) {
    npm install
}
else {
    Write-Host "  ✓ Dependencies already installed" -ForegroundColor Green
}

Write-Host ""
Write-Host "Step 3: Checking Ganache..." -ForegroundColor Yellow
Write-Host ""
Write-Host "  ⚠ Please ensure Ganache is running on:" -ForegroundColor Yellow
Write-Host "     - Host: 127.0.0.1" -ForegroundColor White
Write-Host "     - Port: 7545" -ForegroundColor White
Write-Host "     - Network ID: 1337" -ForegroundColor White
Write-Host ""
$ganacheCheck = Read-Host "  Is Ganache running? (y/n)"

if ($ganacheCheck -ne "y") {
    Write-Host "  ⚠ Please start Ganache before proceeding" -ForegroundColor Yellow
    Write-Host "  Press any key to continue after starting Ganache..."
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
}

Write-Host ""
Write-Host "Step 4: Compiling contracts..." -ForegroundColor Yellow
Write-Host ""

truffle compile

if ($LASTEXITCODE -ne 0) {
    Write-Host "  ✗ Compilation failed. Check for errors above." -ForegroundColor Red
    exit
}

Write-Host "  ✓ Compilation successful" -ForegroundColor Green

Write-Host ""
Write-Host "Step 5: Deploying contracts to Ganache..." -ForegroundColor Yellow
Write-Host ""
Write-Host "  This may take a minute..." -ForegroundColor White
Write-Host ""

truffle migrate --reset

if ($LASTEXITCODE -ne 0) {
    Write-Host "  ✗ Deployment failed. Check Ganache is running." -ForegroundColor Red
    exit
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "  ✅ Setup Complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""

Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Configure MetaMask to connect to Ganache:" -ForegroundColor White
Write-Host "   - Network Name: Ganache Local" -ForegroundColor White
Write-Host "   - RPC URL: http://127.0.0.1:7545" -ForegroundColor White
Write-Host "   - Chain ID: 1337" -ForegroundColor White
Write-Host "   - Import an account from Ganache" -ForegroundColor White
Write-Host ""
Write-Host "2. Start the web server:" -ForegroundColor White
Write-Host "   npx http-server -p 8080" -ForegroundColor Yellow
Write-Host ""
Write-Host "3. Open in browser:" -ForegroundColor White
Write-Host "   http://localhost:8080" -ForegroundColor Yellow
Write-Host ""

Read-Host "Press Enter to start the web server now (or Ctrl+C to exit)"

Write-Host ""
Write-Host "Starting web server on port 8080..." -ForegroundColor Cyan
Write-Host "Open http://localhost:8080 in your browser" -ForegroundColor Green
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""

npx http-server -p 8080


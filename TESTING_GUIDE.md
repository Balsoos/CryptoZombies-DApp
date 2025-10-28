# Testing Guide - CryptoZombies DApp

## 🧪 Complete Testing Checklist

Follow these steps to test your CryptoZombies DApp:

---

## Step 1: Install Dependencies (if not already done)

```powershell
npm install
```

This will install:
- web3.js
- truffle-hdwallet-provider
- browser-sync
- other dependencies

---

## Step 2: Start Ganache

1. **Open Ganache Desktop**
2. **Create/Open a workspace with these settings:**
   - **Host:** 127.0.0.1
   - **Port:** 7545
   - **Network ID:** 1337
3. **Start Ganache**
4. **Copy the first account's private key** (you'll need it for MetaMask)

---

## Step 3: Configure MetaMask

### Option A: If MetaMask is already configured
- Make sure you're on the "Ganache Local" network (Chain ID: 1337)

### Option B: First time setup
1. Click MetaMask extension
2. Click on network dropdown (usually shows "Ethereum Mainnet")
3. Click "Add Network" → "Add a network manually"
4. Enter:
   - **Network Name:** `Ganache Local`
   - **RPC URL:** `http://127.0.0.1:7545`
   - **Chain ID:** `1337`
   - **Currency Symbol:** `ETH`
5. Click "Save"
6. Import Ganache account:
   - Click "Import Account"
   - Paste the private key from Ganache (first account)
   - Click "Import"

---

## Step 4: Compile & Deploy Contracts

Open a new terminal in the project directory and run:

```powershell
# Make sure you're in the project directory
cd cryptozombie_demo_package

# Compile contracts
truffle compile

# Deploy to Ganache (this will create deployment-info.json)
truffle migrate --reset
```

**Expected Output:**
```
Compiling your contracts...
Compilation successful.

Migrations dry-run (simulation)

Starting migrations...
1_initial_migration.js...
2_deploy_contracts.js...
ZombieFactory deployed at: 0x...
ZombieFeeding deployed at: 0x...
...
ZombieOwnership (MAIN CONTRACT) deployed at: 0x...
KittyContract deployed at: 0x...

==========================================
DEPLOYMENT COMPLETE!
==========================================
ZombieOwnership Contract Address: 0x...
KittyContract Address: 0x...
Network: development
Owner Account: 0x...
==========================================

Deployment info saved to deployment-info.json
```

---

## Step 5: Start the Web Server

In the same terminal (or a new one), run:

```powershell
# Using npx (recommended)
npx http-server -p 8080

# OR using npm http-server if installed globally
http-server -p 8080

# OR using Python
python -m http.server 8080

# OR using Node.js http module
node -e "require('http').createServer((req,res)=>require('fs').readFile(require('path').join(__dirname,req.url==='/'?'index.html':req.url),(e,d)=>res.end(e?e:d))).listen(8080)"
```

You should see:
```
Starting up http-server, serving ./
Available on:
  http://127.0.0.1:8080
  http://[your-ip]:8080
```

---

## Step 6: Test in Browser

1. **Open Chrome/Browser**
2. **Navigate to:** `http://localhost:8080`
3. **Connect MetaMask:**
   - Make sure you're on the "Ganache Local" network
   - Make sure the account has ETH (should have ~100 ETH)

---

## Step 7: Test Each Feature

### Test 1: Create a Zombie
1. Click "⚡ Create Zombie"
2. Enter a name (e.g., "ZombieKing")
3. Confirm in MetaMask
4. Wait for confirmation
5. ✅ **Expected:** Status shows "Successfully created [name]!"

### Test 2: View Your Zombies
1. Click "👁️ Show My Zombies"
2. ✅ **Expected:** Your zombie appears in a card with:
   - Name
   - DNA
   - Level (1)
   - Wins: 0
   - Losses: 0
   - Unique color based on DNA

### Test 3: Level Up a Zombie
1. Make sure you have a zombie
2. Click "⬆️ Level Up"
3. Confirm transaction (costs 0.001 ETH)
4. ✅ **Expected:** Status shows "Power overwhelming! Zombie successfully leveled up!"

### Test 4: Create Another Zombie
**Note:** The current contract only allows ONE zombie per address initially (as per the original CryptoZombies tutorial).

To test with multiple accounts:
1. In Ganache, copy another account's private key
2. In MetaMask, import another account
3. Switch accounts in MetaMask
4. Create a zombie with the new account

---

## Step 8: Test Edge Cases

### Edge Case 1: No Zombies Yet
1. Use a fresh MetaMask account
2. Click "Show My Zombies"
3. ✅ **Expected:** Shows "No zombies yet! Create your first one above 🧟"

### Edge Case 2: Connection Issues
1. Disconnect from Ganache network in MetaMask
2. Try to create a zombie
3. ✅ **Expected:** Clear error message

### Edge Case 3: Insufficient Funds
1. Use an account with < 0.001 ETH
2. Try to level up
3. ✅ **Expected:** MetaMask shows "Insufficient funds" error

---

## Troubleshooting Tests

### Issue: "Could not find contract address"
**Solution:**
```powershell
truffle migrate --reset
```

### Issue: Transaction fails
**Check:**
1. Ganache is running
2. MetaMask is on correct network (Chain ID: 1337)
3. Account has enough ETH
4. Browser console (F12) for errors

### Issue: Nothing happens on button click
**Check:**
1. Open browser console (F12)
2. Look for JavaScript errors
3. Check if `deployment-info.json` exists

### Issue: Contracts not deploying
**Check:**
1. Ganache is running on port 7545
2. Network settings in `truffle-config.js` match Ganache
3. Try: `truffle migrate --reset --network development`

---

## Automated Testing (Optional)

Run the test suite:

```powershell
truffle test
```

**Note:** The test file references "CryptoZombies" contract, but ours is "ZombieOwnership". You may need to update the test file.

---

## Quick Test Commands

Create a test script:

```powershell
# Save this as test-setup.ps1

Write-Host "Starting CryptoZombies DApp Test..." -ForegroundColor Green
Write-Host ""
Write-Host "Step 1: Checking Node..." -ForegroundColor Yellow
node --version

Write-Host ""
Write-Host "Step 2: Installing dependencies..." -ForegroundColor Yellow
npm install

Write-Host ""
Write-Host "Step 3: Compiling contracts..." -ForegroundColor Yellow
truffle compile

Write-Host ""
Write-Host "Step 4: Deploying contracts..." -ForegroundColor Yellow
truffle migrate --reset

Write-Host ""
Write-Host "✅ Setup complete!" -ForegroundColor Green
Write-Host "Now run: npx http-server -p 8080" -ForegroundColor Cyan
Write-Host "Then open: http://localhost:8080" -ForegroundColor Cyan
```

Run it with:
```powershell
.\test-setup.ps1
```

---

## Demo Day Checklist

Before your demo, verify:

- [ ] ✅ Ganache is running
- [ ] ✅ Contracts deployed successfully
- [ ] ✅ Can create a zombie
- [ ] ✅ Can view zombies with nice UI
- [ ] ✅ Can level up a zombie
- [ ] ✅ MetaMask connects properly
- [ ] ✅ All buttons work
- [ ] ✅ Error messages are clear
- [ ] ✅ Demo laptop ready
- [ ] ✅ Backup device ready

---

## Using Warp (Alternative)

If you have Warp installed and want to use it as your shell:

1. Open Warp terminal
2. Navigate to project: `cd cryptozombie_demo_package`
3. Follow the same steps above

Warp supports `&&` operator, so you can use:
```bash
npm install && truffle compile && truffle migrate --reset
```

---

## Need Help?

If something doesn't work:
1. Check the browser console (F12)
2. Check Ganache for transaction errors
3. Verify MetaMask network settings
4. Check that `deployment-info.json` was created
5. Try resetting with `truffle migrate --reset`


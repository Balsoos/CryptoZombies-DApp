# CryptoZombies DApp - CPSC 559 Midterm Project
**GitHub Repository:** [https://github.com/Balsoos/CryptoZombies-DApp](https://github.com/Balsoos/CryptoZombies-DApp)

## Team Information

**Team Members:**
Abdurrahman Balsus- CWID: [886086487] - Email: [abdubalsus@csu.fullerton.edu]
I did this project by myself

---

## Description

CryptoZombies is a decentralized application (DApp) built on Ethereum that allows users to create, collect, and battle with unique zombie NFTs. This project is an enhanced version of the CryptoZombies lesson starter code, featuring improved UI/UX, dynamic contract deployment, and additional functionality. (Note this is an extension of the cryptozombies DApp I did for the midterm, I just improved on it)

---

## Recent Fixes & Improvements

### Critical Bug Fixes (Latest)
1. **Fixed `_transfer` Bug** ✅
   - **Issue:** The `_transfer` function in `zombieownership.sol` was using `msg.sender` instead of `_from` parameter
   - **Fix:** Changed to use `_from` parameter correctly for balance tracking
   - **Impact:** Prevents incorrect zombie ownership balance calculations

2. **Fixed ABI Mismatch** ✅
   - **Issue:** `getAllZombies` function was in ABI but not implemented in contract
   - **Fix:** Removed the non-existent function from `cryptozombies_abi.js`
   - **Impact:** Prevents potential frontend errors

3. **Fixed Web3.js Compatibility** ✅
   - **Issue:** Old Web3.js v0.x syntax in fallback code (`web3.eth.accounts[0]`)
   - **Fix:** Updated to use async `web3.eth.getAccounts()` for Web3.js v1.x compatibility
   - **Impact:** Better compatibility with modern Web3 providers

### New Improvements (Latest)
1. **Enhanced Input Validation** ✅
   - Added zombie name length validation (max 50 characters)
   - Added check to prevent creating multiple free zombies
   - Better validation messages

2. **Improved Error Handling** ✅
   - User-friendly error messages for common issues
   - Balance check before leveling up
   - Better transaction error categorization

3. **Better User Feedback** ✅
   - Clear messages for insufficient balance
   - Validation before attempting transactions
   - More informative error messages

### Previous Improvements

1. **Dynamic Contract Address Loading** ✅
   - Automatic contract address detection through `deployment-info.json`
   - No manual editing required when deploying to different networks

2. **Modern UI/UX Design** ✅
   - Gradient backgrounds and glassmorphism effects
   - Animated zombie cards with hover effects
   - Color-coded zombie avatars based on DNA
   - Responsive grid layout

3. **Enhanced User Experience** ✅
   - Real-time transaction status updates
   - Empty state messaging
   - Detailed zombie statistics display
   - Connection status indicators

4. **Enhanced Deployment Process** ✅
   - Automatic deployment info saving
   - Clear console output for debugging
   - Network information display

---

## Prerequisites

Before running this project, ensure you have the following installed:

1. **Node.js** v14.16.0 or compatible
2. **Truffle** v5.4.25
3. **Ganache** v2.5.4 (Desktop version)
4. **MetaMask** browser extension
5. **Git** (optional, for version control)

---

## Quick Start Guide

### Prerequisites
- **Node.js** v14.16.0 or compatible
- **Truffle** v5.4.25 (install with `npm install -g truffle@5.4.25`)
- **Ganache Desktop** v2.5.4
- **MetaMask** browser extension

### Step-by-Step Setup

#### 1. Install Dependencies
```bash
npm install
```

#### 2. Start Ganache
1. Open **Ganache Desktop**
2. Create a new workspace with these settings:
   - **Host:** `127.0.0.1`
   - **Port:** `7545`
   - **Network ID:** `1337`
3. Click **"Save"** to start the blockchain

#### 3. Configure MetaMask
1. Open MetaMask extension
2. Click network dropdown → **"Add Network"** → **"Add a network manually"**
3. Enter:
   - **Network Name:** `Ganache Local`
   - **RPC URL:** `http://127.0.0.1:7545`
   - **Chain ID:** `1337`
   - **Currency Symbol:** `ETH`
4. Click **"Save"**
5. Import an account:
   - Click **"Import Account"** in MetaMask
   - Copy the **private key** from Ganache (click key icon next to first account)
   - Paste and import

#### 4. Deploy Contracts
```bash
truffle migrate --reset
```

**Expected Output:**
```
Compiling your contracts...
Compilation successful.
...
ZombieOwnership (MAIN CONTRACT) deployed at: 0x...
Deployment info saved to deployment-info.json
```

> **Note:** The Kitty contract is automatically deployed and configured. No manual setup needed!

#### 5. Start Frontend Server
```bash
# Option 1: Using npx (recommended)
npx http-server -p 8080

# Option 2: Using Python
python -m http.server 8080

# Option 3: Install globally first
npm install -g http-server
http-server -p 8080
```

#### 6. Open the DApp
1. Navigate to: **http://localhost:8080**
2. MetaMask should prompt to connect (or click MetaMask icon)
3. Make sure you're on the **"Ganache Local"** network (Chain ID: 1337)

### Using the DApp

1. **Create Your First Zombie:**
   - Click **"⚡ Create Zombie"**
   - Enter a name (max 50 characters)
   - Confirm transaction in MetaMask
   - Wait for confirmation

2. **View Your Zombies:**
   - Click **"👁️ Show My Zombies"**
   - See your zombie collection with stats

3. **Level Up:**
   - Click **"⬆️ Level Up"**
   - Costs **0.001 ETH**
   - Confirm transaction in MetaMask

> **Important:** You can only create **one free zombie** per account. After that, you need to feed on kitties or attack other zombies to get more!

---

## Project Structure

```
cryptozombie_demo_package/
├── contracts/              # Solidity smart contracts
│   ├── ZombieFactory.sol      # Creates zombies
│   ├── ZombieFeeding.sol      # Feed on kitties functionality
│   ├── ZombieHelper.sol       # Level up functionality
│   ├── ZombieAttack.sol       # Zombie battles
│   ├── ZombieOwnership.sol    # NFT ownership (main contract)
│   ├── KittyContract.sol      # Sample kitty contract
│   ├── erc721.sol             # NFT standard interface
│   ├── safemath.sol           # Safe math operations
│   └── ownable.sol            # Ownership pattern
├── migrations/             # Deployment scripts
│   ├── 1_initial_migration.js
│   └── 2_deploy_contracts.js
├── test/                   # Test files
│   ├── CryptoZombies.js
│   └── helpers/
├── index.html              # Frontend UI
├── cryptozombies_abi.js    # Contract ABI
├── truffle-config.js       # Truffle configuration
├── deployment-info.json    # Auto-generated deployment info
└── package.json           # Node dependencies

```

---

## How to Use

### Creating a Zombie

1. Connect your MetaMask wallet
2. Click "Create Zombie"
3. Enter a name for your zombie
4. Confirm the transaction in MetaMask
5. Wait for confirmation
6. Your zombie will appear!

### Viewing Your Zombies

1. Click "Show My Zombies"
2. All your zombies will be displayed in a grid
3. Each zombie card shows:
   - Unique ID
   - Name
   - DNA sequence
   - Level
   - Win/Loss count
   - Ready status

### Leveling Up

1. Click "Level Up"
2. Confirm the transaction (costs 0.001 ETH)
3. Your zombie's level will increase

### Transferring Zombies

Transfer functionality is implemented but currently accessed through smart contract directly. Future UI improvements will include a transfer button.

---

## Troubleshooting

### Issue: "Could not find contract address"

**Solution:** Run `truffle migrate --reset` to deploy contracts and generate `deployment-info.json`

### Issue: Transaction failures in MetaMask

**Solutions:**
1. Check that you're connected to Ganache network (Chain ID: 1337)
2. Ensure you have enough ETH in your MetaMask account
3. Check Ganache is running and connected to port 7545
4. Try resetting your MetaMask account (Settings → Advanced → Reset Account)

### Issue: "Error: Cannot read property 'address' of undefined"

**Solution:** Ensure contracts deployed successfully. Run `truffle migrate --reset` again.

### Issue: Nothing happens when clicking buttons

**Solutions:**
1. Check browser console for errors (F12)
2. Ensure MetaMask is unlocked
3. Verify network connection
4. Reload the page

### Issue: Contract methods not found

**Solutions:**
1. Verify you're using the ZombieOwnership contract address
2. Check that the ABI matches your deployed contract
3. Re-compile and migrate: `truffle compile && truffle migrate --reset`

---

## Testing

To run the test suite:

```bash
truffle test
```

**Note:** The test file references "CryptoZombies" but the actual contract is "ZombieOwnership". You may need to update the test file.

---

## Demo Preparation

### Before Demo Day:

1. **Deploy contracts on Ganache**
   ```bash
   truffle migrate --reset
   ```

2. **Start local server**
   ```bash
   http-server -p 8080
   ```

3. **Create several zombies** to demonstrate the collection feature

4. **Test all functionality** to ensure it works smoothly

5. **Prepare talking points:**
   - Explain how the blockchain integration works
   - Show the smart contract code
   - Demonstrate zombie creation
   - Show the improved UI/UX
   - Explain the improvements made

### Demo Flow (10 minutes):

1. **Introduction** (1 min)
   - Team members
   - Project overview

2. **Technical Stack** (2 min)
   - Smart contracts architecture
   - Frontend technology

3. **Live Demonstration** (5 min)
   - Create a new zombie
   - Show zombie collection
   - Level up a zombie
   - Explain improvements

4. **Q&A** (2 min)

---

## References

- CryptoZombies Tutorial: https://cryptozombies.io/
- Original Zombie Factory: https://github.com/loomnetwork/cryptozombies-lesson-code
- Truffle Documentation: https://www.trufflesuite.com/docs/truffle/overview
- Web3.js Documentation: https://web3js.readthedocs.io/
- http-server package: https://www.npmjs.com/package/http-server

---

## Version Information

- **Truffle:** v5.4.25
- **Ganache:** v2.5.4
- **Solidity:** 0.4.25
- **Node.js:** v14.16.0
- **Web3.js:** v1.2.7

---

## License

This project is created for educational purposes as part of CPSC 559 Blockchain Technologies course at California State University, Fullerton.

---

---

**Last Updated:** [12.7.2025]


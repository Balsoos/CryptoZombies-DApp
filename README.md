# CryptoZombies DApp - CPSC 559 Midterm Project

## Team Information

**Team Members:**
Abdurrahman Balsus- CWID: [886086487] - Email: [abdubalsus@csu.fullerton.edu]
I did this project by myself

---

## Description

CryptoZombies is a decentralized application (DApp) built on Ethereum that allows users to create, collect, and battle with unique zombie NFTs. This project is an enhanced version of the CryptoZombies lesson starter code, featuring improved UI/UX, dynamic contract deployment, and additional functionality.

---

## Improvements Made

### 1. **Dynamic Contract Address Loading** ✅
- **Description:** Removed hard-coded contract addresses and implemented dynamic loading from deployment artifacts
- **Implementation:** Created automatic contract address detection through `deployment-info.json` file
- **Benefit:** No more manual editing required when deploying to different networks

### 2. **Modern UI/UX Design** ✅
- **Description:** Completely redesigned the frontend with modern, responsive UI
- **Features:**
  - Gradient backgrounds and glassmorphism effects
  - Animated zombie cards with hover effects
  - Color-coded zombie avatars based on DNA
  - Real-time status updates
  - Responsive grid layout for zombie display
  - Improved button styling and interactions

### 3. **Enhanced User Experience** ✅
- **Description:** Added better visual feedback and user interactions
- **Features:**
  - Real-time transaction status updates with emojis
  - Empty state messaging when no zombies exist
  - Detailed zombie statistics display
  - Connection status indicators
  - Smooth animations and transitions

### 4. **Zombie Visual Representation** ✅
- **Description:** Added visual representation of zombies based on their DNA
- **Implementation:** Color gradients generated from zombie DNA values
- **Benefit:** Each zombie has a unique visual identity

### 5. **Improved Error Handling** ✅
- **Description:** Better error messages and user feedback
- **Features:**
  - Clear status messages for all operations
  - Error display with specific details
  - Connection validation before operations

### 6. **Enhanced Deployment Process** ✅
- **Description:** Improved migration script with better logging
- **Features:**
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

## Installation & Setup

### Step 1: Install Dependencies

```bash
cd cryptozombie_demo_package
npm install
```

### Step 2: Start Ganache

1. Open Ganache Desktop application
2. Ensure the following settings:
   - **Host:** 127.0.0.1
   - **Port:** 7545
   - **Network ID:** 1337
3. Create a new workspace if needed
4. Copy the mnemonic phrase (12-word phrase)

### Step 3: Configure MetaMask

1. Open MetaMask extension
2. Click on the network dropdown
3. Select "Add Network" → "Add a network manually"
4. Enter the following details:
   - **Network Name:** Ganache Local
   - **RPC URL:** http://127.0.0.1:7545
   - **Chain ID:** 1337
   - **Currency Symbol:** ETH
5. Import an account from Ganache:
   - Click "Import Account" in MetaMask
   - Paste the private key from Ganache (first account recommended)

### Step 4: Deploy Smart Contracts

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

### Step 5: Connect Kitty Contract (Optional)

If you want to enable the "Feed on Kitties" functionality:

```bash
# First, deploy the Kitty contract
truffle console

# In the console:
let kitty = await KittyContract.deployed()
await ZombieOwnership.deployed().setKittyContractAddress(kitty.address)
```

### Step 6: Start the Frontend

Install and start a local HTTP server:

**Option 1: Using http-server (npm)**
```bash
npm install -g http-server
http-server -p 8080
```

**Option 2: Using Python**
```bash
python -m http.server 8080
```

**Option 3: Using Node.js http-server**
```bash
npx http-server -p 8080
```

### Step 7: Access the DApp

1. Open your browser and navigate to: `http://localhost:8080`
2. Make sure MetaMask is connected to the Ganache network
3. Click "Create Zombie" to create your first zombie!
4. Click "Show My Zombies" to view your zombie collection
5. Click "Level Up" to level up your zombies (costs 0.001 ETH)

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

## Git Repository

[Include your GitHub repository link here if applicable]

Repository URL: [https://github.com/yourusername/cryptozombies-dapp]

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

## Contact

For questions or issues, please contact the team via email:
- [Team Member Email 1]
- [Team Member Email 2]

---

**Last Updated:** [Current Date]


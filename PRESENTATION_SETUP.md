# Presentation Setup Guide - Complete Checklist

## 🎯 Pre-Presentation Checklist

### ✅ Step 1: Start Ganache
1. Open **Ganache Desktop** application
2. Create/Open workspace with these settings:
   - **Host:** `127.0.0.1`
   - **Port:** `7545`
   - **Network ID:** `1337`
3. Click **"Save"** and ensure Ganache is running
4. **Verify:** You should see accounts with 100 ETH each

### ✅ Step 2: Configure MetaMask
1. Open MetaMask browser extension
2. Click network dropdown → **"Add Network"** → **"Add a network manually"**
3. Enter:
   - **Network Name:** `Ganache Local`
   - **RPC URL:** `http://127.0.0.1:7545`
   - **Chain ID:** `1337`
   - **Currency Symbol:** `ETH`
4. Click **"Save"**
5. Import an account:
   - In Ganache, click the **key icon** next to the first account
   - Copy the private key
   - In MetaMask: **"Import Account"** → Paste private key → **"Import"**
6. **Verify:** You should see ~100 ETH in MetaMask

### ✅ Step 3: Deploy Contracts
Open terminal in project directory and run:
```bash
truffle migrate --reset
```

**Expected Output:**
```
Compiling your contracts...
Compilation successful.
...
ZombieOwnership (MAIN CONTRACT) deployed at: 0x...
KittyContract deployed at: 0x...
Deployment info saved to deployment-info.json
```

**⚠️ Important:** Note the contract address for reference!

### ✅ Step 4: Start Frontend Server
In a new terminal (keep the first one open), run:
```bash
npx http-server -p 8080
```

**Expected Output:**
```
Starting up http-server, serving ./
Available on:
  http://127.0.0.1:8080
  http://192.168.x.x:8080
Hit CTRL-C to stop the server
```

### ✅ Step 5: Open DApp in Browser
1. Open your browser (Chrome/Firefox recommended)
2. Navigate to: **http://localhost:8080**
3. MetaMask should prompt to connect (or click MetaMask icon)
4. **Verify:** Status should show "✅ Connected! Ready to create zombies."

---

## 🎤 Presentation Demo Flow

### Demo 1: Create Your First Zombie (2 min)
1. Click **"⚡ Create Zombie"** button
2. Enter a name (e.g., "PresentationZombie")
3. Confirm transaction in MetaMask
4. **Show:** Transaction pending → Success message
5. **Highlight:** 
   - Modern UI with gradient design
   - Real-time status updates
   - ZombieCreated event emitted (check browser console F12)

### Demo 2: View Your Zombie Collection (1 min)
1. Click **"👁️ Show My Zombies"** button
2. **Show:**
   - Zombie card with unique DNA-based color
   - Statistics (Level, Wins, Losses)
   - Visual representation
3. **Highlight:**
   - Responsive grid layout
   - Glassmorphism design
   - Color-coded avatars

### Demo 3: Level Up Your Zombie (2 min)
1. Click **"⬆️ Level Up"** button
2. Confirm transaction in MetaMask (0.001 ETH)
3. **Show:** 
   - Transaction processing
   - Success message
   - Level increased in zombie card
4. **Highlight:**
   - ZombieLeveledUp event emitted
   - Ownership validation (only owner can level up)
   - Level cap at 50 (try to explain this)

### Demo 4: Test Level Cap (Optional - 1 min)
1. **Explain:** "Zombies can only level up to level 50"
2. Try to level up a zombie that's already at level 50
3. **Show:** Error message about max level reached

### Demo 5: Transfer Event (Optional - 1 min)
1. **Explain:** "Zombies can be transferred between accounts"
2. Show Transfer event in console (if time permits)

---

## 🎯 Key Points to Mention

### Technical Improvements
1. **Event Emissions:**
   - `ZombieCreated` - Emitted when zombies are created
   - `ZombieLeveledUp` - Emitted when zombies level up
   - `Transfer` - Emitted when zombies are transferred

2. **Enhanced levelUp Function:**
   - Ownership validation (only owner can level up)
   - Level cap at 50
   - Event emission for tracking
   - Fee requirement (0.001 ETH)

3. **Bug Fixes:**
   - Fixed `_transfer` function bug
   - Fixed ABI mismatch
   - Fixed Web3.js compatibility

### UI/UX Features
1. Modern, responsive design
2. Real-time status updates
3. Dynamic contract address loading
4. Better error handling
5. Visual zombie representation

---

## 🐛 Troubleshooting

### Issue: "Could not find contract address"
**Solution:** Run `truffle migrate --reset` again

### Issue: Transaction fails in MetaMask
**Solutions:**
- Check you're on Ganache network (Chain ID: 1337)
- Ensure you have enough ETH
- Check Ganache is running

### Issue: Frontend shows errors
**Solutions:**
- Check browser console (F12) for errors
- Verify MetaMask is connected
- Reload the page
- Check deployment-info.json exists

### Issue: Can't connect to Ganache
**Solutions:**
- Verify Ganache is running
- Check port 7545 is not in use
- Restart Ganache

---

## 📋 Quick Reference Commands

```bash
# Compile contracts
truffle compile

# Deploy contracts
truffle migrate --reset

# Run tests
truffle test test/TestImprovements.js

# Start frontend
npx http-server -p 8080

# Open browser
# Navigate to: http://localhost:8080
```

---

## ✅ Final Pre-Presentation Check

Before starting your presentation:

- [ ] Ganache is running (port 7545)
- [ ] MetaMask is configured and connected to Ganache
- [ ] Contracts are deployed (`truffle migrate --reset` completed)
- [ ] Frontend server is running (`npx http-server -p 8080`)
- [ ] Browser is open at `http://localhost:8080`
- [ ] MetaMask is unlocked and connected
- [ ] You have at least one zombie created (for demo)
- [ ] Browser console is open (F12) to show events
- [ ] You have backup screenshots/video (optional but recommended)

---

## 🎬 Presentation Tips

1. **Start with a working demo** - Create a zombie before the presentation starts
2. **Have backup screenshots** - In case of technical issues
3. **Explain while demonstrating** - Don't just click buttons
4. **Show the code** - If asked, be ready to show contract code
5. **Highlight improvements** - Clearly state what you added/fixed
6. **Keep it simple** - Focus on 2-3 key features
7. **Practice the flow** - Run through the demo at least once before

---

## 📝 Presentation Script Outline

1. **Introduction (30 sec)**
   - "This is a CryptoZombies DApp built on Ethereum"
   - "I've made several improvements including event emissions and enhanced security"

2. **Live Demo (5-7 min)**
   - Create zombie
   - View collection
   - Level up zombie
   - Explain improvements

3. **Technical Discussion (2-3 min)**
   - Event emissions
   - Security improvements
   - Bug fixes

4. **Q&A (1-2 min)**

---

**Good luck with your presentation! 🚀**


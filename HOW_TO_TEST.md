# How to Test Your CryptoZombies DApp 🚀

## Quick Start (Copy & Paste Commands)

### Step 1: Start Ganache
1. Open **Ganache Desktop**
2. Make sure it's running on:
   - Host: `127.0.0.1`
   - Port: `7545`
   - Network ID: `1337`

### Step 2: Configure MetaMask
1. In MetaMask, switch to "Ganache Local" network
2. If you haven't set it up yet:
   - Settings → Networks → Add Network
   - Network Name: `Ganache Local`
   - RPC URL: `http://127.0.0.1:7545`
   - Chain ID: `1337`
   - Currency: `ETH`

### Step 3: Deploy Smart Contracts
Open a terminal (PowerShell or Warp) in the project folder and run:

```powershell
truffle migrate --reset
```

This will:
- Compile all smart contracts
- Deploy them to Ganache
- Create `deployment-info.json` with contract addresses
- Set up the kitty contract automatically

### Step 4: Start Web Server
In the same terminal, run:

```powershell
http-server -p 8080
```

You'll see:
```
Starting up http-server, serving ./
Available on:
  http://127.0.0.1:8080
```

### Step 5: Test in Browser
1. Open Chrome/Browser
2. Go to: `http://localhost:8080`
3. Connect MetaMask when prompted
4. Click "⚡ Create Zombie"
5. Enter a name (e.g., "ZombieTest")
6. Confirm in MetaMask
7. Wait for confirmation!

### Step 6: View Your Zombie
Click "👁️ Show My Zombies" to see your zombie with beautiful UI!

---

## Troubleshooting

**Error: "Could not find contract address"**
→ Run `truffle migrate --reset` again

**Transaction fails**
→ Check Ganache is running and MetaMask is on Chain ID: 1337

**Nothing happens**
→ Open browser console (F12) and check for errors

---

## Testing Checklist

Before demo day, make sure:

- [ ] ✅ Can create a zombie
- [ ] ✅ Can view zombies with nice UI
- [ ] ✅ Can level up (costs 0.001 ETH)
- [ ] ✅ All buttons work
- [ ] ✅ Error messages are clear
- [ ] ✅ MetaMask connects properly
- [ ] ✅ UI looks professional

---

## Using Warp Shell

Since you have Warp installed, you can use bash commands:

```bash
cd cryptozombie_demo_package

# Compile & deploy
truffle migrate --reset

# Start server
http-server -p 8080
```

The commands are the same, but Warp supports better syntax!

---

## Full Command Reference

```powershell
# Navigate to project
cd C:\Users\aeaam\Desktop\Fullerton\CPSC_559\cryptozombie_demo_package

# Compile contracts
truffle compile

# Deploy contracts
truffle migrate --reset

# Start web server
http-server -p 8080

# In another terminal - run tests (optional)
truffle test
```

That's it! You're ready to test! 🎉


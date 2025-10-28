# Quick Start Guide - CryptoZombies DApp

## 🚀 Quick Setup (5 minutes)

### Prerequisites Installed ✅
- Node.js v14.16.0 or compatible
- Ganache Desktop
- MetaMask browser extension

### Step-by-Step:

**1. Install dependencies:**
```bash
cd cryptozombie_demo_package
npm install
```

**2. Start Ganache:**
- Open Ganache Desktop
- Host: 127.0.0.1, Port: 7545, Network ID: 1337
- Click "New" to create a workspace

**3. Configure MetaMask:**
- MetaMask → Settings → Networks → Add Network
- Network Name: `Ganache Local`
- RPC URL: `http://127.0.0.1:7545`
- Chain ID: `1337`
- Currency: `ETH`
- Import first account from Ganache (copy private key)

**4. Deploy contracts:**
```bash
truffle migrate --reset
```

**5. Start frontend:**
```bash
npx http-server -p 8080
```

**6. Open in browser:**
```
http://localhost:8080
```

## 🎮 Using the DApp

1. **Create Zombie:** Click "Create Zombie" → Enter name → Confirm in MetaMask
2. **View Zombies:** Click "Show My Zombies" to see your collection
3. **Level Up:** Click "Level Up" (costs 0.001 ETH)

## ⚠️ Common Issues

**"Could not find contract address"**
→ Run `truffle migrate --reset`

**Transaction fails**
→ Check MetaMask is on correct network (Chain ID: 1337)

**Nothing happens on button click**
→ Check console (F12) for errors

## 📞 Need Help?

See full README.md for detailed instructions and troubleshooting.


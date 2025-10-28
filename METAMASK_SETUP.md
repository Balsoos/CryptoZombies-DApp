# MetaMask Setup Guide - Fix "Non-Ethereum browser detected"

## The Problem
Your browser is showing: "Non-Ethereum browser detected. Please install MetaMask!"

This means you need to install and configure MetaMask.

---

## Step-by-Step Solution

### Step 1: Install MetaMask

1. **Download MetaMask:**
   - Go to: https://metamask.io/download/
   - Click "Install MetaMask for Chrome" (or your browser)
   - Add to Chrome/Edge
   - Pin the extension to your toolbar

2. **Initial Setup:**
   - Click "Get Started"
   - Click "Create a Wallet"
   - Set a password
   - **IMPORTANT:** Save the 12-word recovery phrase somewhere safe
   - Confirm the recovery phrase

---

### Step 2: Add Ganache Local Network

1. **Open MetaMask:**
   - Click the MetaMask icon (fox) in your browser toolbar
   - Unlock with your password

2. **Add Custom Network:**
   - Click the network dropdown (usually shows "Ethereum Mainnet")
   - Scroll down and click "Add a network manually"
   - Fill in the following details:

   **Network Name:** `Ganache Local`  
   **RPC URL:** `http://127.0.0.1:7545`  
   **Chain ID:** `1337`  
   **Currency Symbol:** `ETH`

3. **Save:**
   - Click "Save"
   - You should now see "Ganache Local" as your active network

---

### Step 3: Import Account from Ganache

1. **Get Account Info from Ganache:**
   - Open Ganache Desktop
   - Look at the first account (top of the list)
   - Click the "key" icon on the right
   - Copy the **Private Key** (very long string)

2. **Import into MetaMask:**
   - In MetaMask, click your account icon (top right)
   - Click "Import Account"
   - Paste the private key you copied from Ganache
   - Click "Import"

3. **Verify:**
   - You should now see the account with ~100 ETH
   - The account is imported from Ganache

---

### Step 4: Restart the Web Server (Just in Case)

In your terminal, stop the current server (Ctrl+C), then restart:

```powershell
# If you're in Warp or PowerShell
http-server -p 8080
```

---

### Step 5: Refresh Your Browser

1. Go back to: `http://127.0.0.1:8080`
2. Refresh the page (F5 or Ctrl+R)
3. MetaMask should pop up asking to connect
4. Click "Connect"
5. Select your Ganache account
6. Click "Next" → "Connect"

---

## Success!

Now you should see:
- ✅ Connected status
- No error message
- Your buttons should work!

Try clicking "⚡ Create Zombie" to create your first zombie!

---

## Troubleshooting

### Issue: "Connection failed"

**Solution:**
1. Make sure Ganache is running
2. Check MetaMask is on "Ganache Local" network
3. Verify Chain ID is 1337
4. Try disconnecting and reconnecting

### Issue: "Insufficient funds for gas"

**Solution:**
- Use the first account from Ganache (it has the most ETH)
- Make sure you imported the correct account

### Issue: MetaMask not detected after installation

**Solution:**
1. Restart your browser completely
2. Make sure MetaMask extension is enabled
3. Check that it's not blocked by any extensions

---

## Quick Checklist

- [ ] MetaMask installed
- [ ] MetaMask unlocked
- [ ] Ganache Local network added
- [ ] Account imported from Ganache
- [ ] ~100 ETH visible in MetaMask
- [ ] Browser refreshed
- [ ] Connected to DApp

You're all set! 🚀


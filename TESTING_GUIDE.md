# Testing Guide - Improvements

## Quick Test Steps

### Step 1: Start Ganache
1. Open **Ganache Desktop**
2. Make sure it's running on:
   - **Host:** `127.0.0.1`
   - **Port:** `7545`
   - **Network ID:** `1337`

### Step 2: Run Tests

**Option A: Run the new improvements test**
```bash
truffle test test/TestImprovements.js
```

**Option B: Run all tests**
```bash
truffle test
```

### Step 3: Manual Testing via Frontend

1. **Deploy contracts:**
   ```bash
   truffle migrate --reset
   ```

2. **Start frontend:**
   ```bash
   npx http-server -p 8080
   ```

3. **Test in browser:**
   - Open `http://localhost:8080`
   - Connect MetaMask to Ganache network
   - Create a zombie (check console for ZombieCreated event)
   - Level up zombie (check console for ZombieLeveledUp event)
   - Try to level up past level 50 (should fail with error)

---

## What the Tests Verify

### ✅ Event Emissions
- `ZombieCreated` event when creating zombies
- `ZombieLeveledUp` event when leveling up
- `Transfer` event when transferring zombies

### ✅ Enhanced levelUp Function
- Only owner can level up their zombie
- Level cap enforced (max level 50)
- Exact fee required (0.001 ETH)
- Level increments correctly

---

## Expected Test Results

All tests should pass:
- ✅ ZombieCreated event emission
- ✅ ZombieLeveledUp event emission  
- ✅ Transfer event emission
- ✅ Ownership check for level up
- ✅ Level cap enforcement
- ✅ Fee validation
- ✅ Level increment verification

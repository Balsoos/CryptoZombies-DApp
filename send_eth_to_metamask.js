module.exports = async function(callback) {
    // Your MetaMask account
    const yourAccount = '0x806B42b5a250FbddE5171ea5028d39B44e250Fdc';
    
    // We'll use Ganache Account 0 to send ETH
    const accounts = await web3.eth.getAccounts();
    const sender = accounts[0]; // Account with 999.86 ETH
    
    try {
        console.log('========================================');
        console.log('Sending ETH to Your MetaMask Account');
        console.log('========================================');
        console.log('Your MetaMask Account:', yourAccount);
        console.log('Sending from Ganache Account 0:', sender);
        
        // Check sender balance
        const senderBalance = await web3.eth.getBalance(sender);
        const senderBalanceEth = web3.utils.fromWei(senderBalance, 'ether');
        console.log('Sender Balance:', parseFloat(senderBalanceEth).toFixed(4), 'ETH');
        
        // Check your account balance before
        const balanceBefore = await web3.eth.getBalance(yourAccount);
        const balanceBeforeEth = web3.utils.fromWei(balanceBefore, 'ether');
        console.log('Your Account Balance (Before):', parseFloat(balanceBeforeEth).toFixed(4), 'ETH');
        
        // Send 100 ETH to your account
        const amount = web3.utils.toWei('100', 'ether');
        console.log('\nSending 100 ETH...');
        console.log('This may take a moment...');
        
        const receipt = await web3.eth.sendTransaction({
            from: sender,
            to: yourAccount,
            value: amount,
            gas: 21000
        });
        
        console.log('\n✅ Transaction Successful!');
        console.log('Transaction Hash:', receipt.transactionHash);
        
        // Check your account balance after
        const balanceAfter = await web3.eth.getBalance(yourAccount);
        const balanceAfterEth = web3.utils.fromWei(balanceAfter, 'ether');
        console.log('Your Account Balance (After):', parseFloat(balanceAfterEth).toFixed(4), 'ETH');
        
        console.log('\n========================================');
        console.log('✅ SUCCESS! Your MetaMask account now has ETH!');
        console.log('You can now use the DApp at http://localhost:8080');
        console.log('========================================');
        
    } catch (error) {
        console.error('\n❌ Error:', error.message);
        console.log('\nMake sure:');
        console.log('1. Ganache is running on port 7545');
        console.log('2. Your MetaMask account is: 0x806B42b5a250FbddE5171ea5028d39B44e250Fdc');
        console.log('3. MetaMask is connected to Ganache network (Chain ID: 1337)');
    }
    
    callback();
};


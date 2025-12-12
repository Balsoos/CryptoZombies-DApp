module.exports = async function(callback) {
    const targetAccount = '0x806B42b5a250FbddE5171ea5028d39B44e250Fdc';
    
    try {
        // Get all accounts
        const accounts = await web3.eth.getAccounts();
        console.log('========================================');
        console.log('Funding Account');
        console.log('========================================');
        console.log('Target Account:', targetAccount);
        
        // Check if target account exists in Ganache
        const accountExists = accounts.some(acc => acc.toLowerCase() === targetAccount.toLowerCase());
        
        if (!accountExists) {
            console.log('\n⚠️  Account not found in Ganache account list.');
            console.log('Available accounts:');
            for (let i = 0; i < accounts.length; i++) {
                const balance = await web3.eth.getBalance(accounts[i]);
                const balanceEth = web3.utils.fromWei(balance, 'ether');
                console.log(`  ${i}: ${accounts[i]} - ${balanceEth} ETH`);
            }
            console.log('\n💡 Solution: Use one of the accounts above, or check if Ganache was restarted.');
        } else {
            // Check current balance
            const currentBalance = await web3.eth.getBalance(targetAccount);
            const currentBalanceEth = web3.utils.fromWei(currentBalance, 'ether');
            console.log('Current Balance:', currentBalanceEth, 'ETH');
            
            if (parseFloat(currentBalanceEth) < 1) {
                // Fund from account 0
                const sender = accounts[0];
                const senderBalance = await web3.eth.getBalance(sender);
                const senderBalanceEth = web3.utils.fromWei(senderBalance, 'ether');
                console.log('\nSender Account:', sender);
                console.log('Sender Balance:', senderBalanceEth, 'ETH');
                
                // Send 100 ETH to target account
                const amount = web3.utils.toWei('100', 'ether');
                console.log('\nSending 100 ETH to target account...');
                
                await web3.eth.sendTransaction({
                    from: sender,
                    to: targetAccount,
                    value: amount
                });
                
                // Check new balance
                const newBalance = await web3.eth.getBalance(targetAccount);
                const newBalanceEth = web3.utils.fromWei(newBalance, 'ether');
                console.log('\n✅ Transaction successful!');
                console.log('New Balance:', newBalanceEth, 'ETH');
            } else {
                console.log('\n✅ Account already has sufficient balance!');
            }
        }
        
    } catch (error) {
        console.error('Error:', error.message);
    }
    
    callback();
};


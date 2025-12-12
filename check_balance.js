module.exports = async function(callback) {
    const account = '0x806B42b5a250FbddE5171ea5028d39B44e250Fdc';
    
    try {
        const balance = await web3.eth.getBalance(account);
        const balanceInEth = web3.utils.fromWei(balance, 'ether');
        
        console.log('========================================');
        console.log('Account Balance Check');
        console.log('========================================');
        console.log('Account:', account);
        console.log('Balance:', balanceInEth, 'ETH');
        console.log('Balance (Wei):', balance);
        console.log('========================================');
        
        // Check all accounts
        const accounts = await web3.eth.getAccounts();
        console.log('\nAll Ganache Accounts:');
        for (let i = 0; i < accounts.length; i++) {
            const accBalance = await web3.eth.getBalance(accounts[i]);
            const accBalanceEth = web3.utils.fromWei(accBalance, 'ether');
            const isYourAccount = accounts[i].toLowerCase() === account.toLowerCase();
            console.log(`${i}: ${accounts[i]} - ${accBalanceEth} ETH ${isYourAccount ? '← YOUR ACCOUNT' : ''}`);
        }
        
        const accountExists = accounts.some(acc => acc.toLowerCase() === account.toLowerCase());
        if (!accountExists) {
            console.log('\n⚠️  WARNING: Your account is NOT in the Ganache account list!');
            console.log('You need to import it using the private key from Ganache.');
        }
        
    } catch (error) {
        console.error('Error:', error.message);
    }
    
    callback();
};


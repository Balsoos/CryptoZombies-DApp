// Quick script to check account balance
const Web3 = require('web3');
const web3 = new Web3('http://127.0.0.1:7545');

const account = '0x806B42b5a250FbddE5171ea5028d39B44e250Fdc';

async function checkBalance() {
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
        
        // Check if account exists in network
        const accounts = await web3.eth.getAccounts();
        console.log('Total accounts in Ganache:', accounts.length);
        console.log('Your account in list:', accounts.includes(account) ? 'YES ✅' : 'NO ❌');
        
        if (accounts.includes(account)) {
            const index = accounts.indexOf(account);
            console.log('Account index:', index);
        }
    } catch (error) {
        console.error('Error:', error.message);
        console.log('\nMake sure Ganache is running on port 7545!');
    }
}

checkBalance();


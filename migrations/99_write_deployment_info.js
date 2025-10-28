const fs = require('fs');
const path = require('path');
const ZombieOwnership = artifacts.require('ZombieOwnership');

module.exports = async function (deployer, network, accounts) {
    const instance = await ZombieOwnership.deployed();
    const netId = await web3.eth.net.getId();
    const outPath = path.join(process.cwd(), 'deployment-info.json');

    const payload = {
        contractAddress: instance.address,
        network: network,
        networkId: netId,
        writtenAt: new Date().toISOString()
    };

    fs.writeFileSync(outPath, JSON.stringify(payload, null, 2));
    console.log('✅ Wrote deployment info to:', outPath);
    console.log('   Address:', instance.address, 'Network:', network, 'ID:', netId);
};


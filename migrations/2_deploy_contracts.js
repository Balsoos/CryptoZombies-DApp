var safemath = artifacts.require("./safemath.sol");
var zombiefactory = artifacts.require("./zombiefactory.sol");
var zombiefeeding = artifacts.require("./zombiefeeding.sol");
var zombiehelper = artifacts.require("./zombiehelper.sol");
var zombieattack = artifacts.require("./zombieattack.sol");
var zombieownership = artifacts.require("./zombieownership.sol");
var kittycontract = artifacts.require("./KittyContract.sol");
var fs = require('fs');
const path = require('path');

module.exports = function (deployer, network, accounts) {
    let owner = accounts[0];
    let zombieownershipAddress;
    let kittyAddress;

    deployer.deploy(safemath).then(function () {
        return deployer.link(safemath, [zombiefactory]);
    }).then(function () {
        return deployer.deploy(zombiefactory);
    }).then(function (zombiefactoryInstance) {
        console.log('ZombieFactory deployed at:', zombiefactoryInstance.address);
        return deployer.deploy(zombiefeeding);
    }).then(function (zombiefeedingInstance) {
        console.log('ZombieFeeding deployed at:', zombiefeedingInstance.address);
        return deployer.deploy(zombiehelper);
    }).then(function (zombiehelperInstance) {
        console.log('ZombieHelper deployed at:', zombiehelperInstance.address);
        return deployer.deploy(zombieattack);
    }).then(function (zombieattackInstance) {
        console.log('ZombieAttack deployed at:', zombieattackInstance.address);
        return deployer.deploy(zombieownership);
    }).then(function (zombieownershipInstance) {
        zombieownershipAddress = zombieownershipInstance.address;
        console.log('ZombieOwnership (MAIN CONTRACT) deployed at:', zombieownershipAddress);
        return deployer.deploy(kittycontract);
    }).then(function (kittyInstance) {
        kittyAddress = kittyInstance.address;
        console.log('KittyContract deployed at:', kittyAddress);

        // Set kitty contract address in zombie ownership
        return zombieownership.deployed();
    }).then(function (zombieownershipDeployed) {
        return zombieownershipDeployed.setKittyContractAddress(kittyAddress);
    }).then(function () {
        console.log('\n==========================================');
        console.log('DEPLOYMENT COMPLETE!');
        console.log('==========================================');
        console.log('ZombieOwnership Contract Address:', zombieownershipAddress);
        console.log('KittyContract Address:', kittyAddress);
        console.log('Network:', network);
        console.log('Owner Account:', owner);
        console.log('==========================================\n');

        // Write the deployment info to a JSON file
        const deploymentInfo = {
            contractAddress: zombieownershipAddress,
            kittyContractAddress: kittyAddress,
            network: network,
            owner: owner,
            timestamp: new Date().toISOString()
        };

        fs.writeFileSync(
            path.join(__dirname, '../deployment-info.json'),
            JSON.stringify(deploymentInfo, null, 2)
        );

        console.log('Deployment info saved to deployment-info.json');
    }).catch(function (err) {
        console.error('Deployment failed:', err);
    });
};

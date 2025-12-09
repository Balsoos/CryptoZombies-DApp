const ZombieOwnership = artifacts.require("ZombieOwnership");
const utils = require("./helpers/utils");

contract("ZombieOwnership - Improvements Test", (accounts) => {
    let [alice, bob] = accounts;
    let contractInstance;
    const levelUpFee = web3.utils.toWei("0.001", "ether");

    beforeEach(async () => {
        contractInstance = await ZombieOwnership.new();
    });

    describe("Event Emissions", () => {
        it("should emit ZombieCreated event when creating a zombie", async () => {
            const result = await contractInstance.createRandomZombie("TestZombie", {from: alice});
            
            // Check for NewZombie event (existing)
            const newZombieEvent = result.logs.find(log => log.event === "NewZombie");
            assert(newZombieEvent, "NewZombie event should be emitted");
            
            // Check for ZombieCreated event (new)
            const zombieCreatedEvent = result.logs.find(log => log.event === "ZombieCreated");
            assert(zombieCreatedEvent, "ZombieCreated event should be emitted");
            assert.equal(zombieCreatedEvent.args.zombieId.toNumber(), newZombieEvent.args.zombieId.toNumber());
            assert.equal(zombieCreatedEvent.args.name, "TestZombie");
            assert.equal(zombieCreatedEvent.args.owner, alice);
        });

        it("should emit ZombieLeveledUp event when leveling up", async () => {
            // Create a zombie first
            const createResult = await contractInstance.createRandomZombie("TestZombie", {from: alice});
            const zombieId = createResult.logs[0].args.zombieId.toNumber();
            
            // Level up the zombie
            const levelUpResult = await contractInstance.levelUp(zombieId, {
                from: alice,
                value: levelUpFee
            });
            
            // Check for ZombieLeveledUp event
            const levelUpEvent = levelUpResult.logs.find(log => log.event === "ZombieLeveledUp");
            assert(levelUpEvent, "ZombieLeveledUp event should be emitted");
            assert.equal(levelUpEvent.args.zombieId.toNumber(), zombieId);
            assert.equal(levelUpEvent.args.newLevel.toNumber(), 2); // Should be level 2 after first level up
            assert.equal(levelUpEvent.args.owner, alice);
        });

        it("should emit Transfer event when transferring zombie", async () => {
            // Create a zombie
            const createResult = await contractInstance.createRandomZombie("TestZombie", {from: alice});
            const zombieId = createResult.logs[0].args.zombieId.toNumber();
            
            // Transfer the zombie
            const transferResult = await contractInstance.transferFrom(alice, bob, zombieId, {from: alice});
            
            // Check for Transfer event
            const transferEvent = transferResult.logs.find(log => log.event === "Transfer");
            assert(transferEvent, "Transfer event should be emitted");
            assert.equal(transferEvent.args._from, alice);
            assert.equal(transferEvent.args._to, bob);
            assert.equal(transferEvent.args._tokenId.toNumber(), zombieId);
        });
    });

    describe("Enhanced levelUp Function", () => {
        it("should only allow owner to level up their zombie", async () => {
            // Alice creates a zombie
            const createResult = await contractInstance.createRandomZombie("AliceZombie", {from: alice});
            const zombieId = createResult.logs[0].args.zombieId.toNumber();
            
            // Bob tries to level up Alice's zombie - should fail
            await utils.shouldThrow(
                contractInstance.levelUp(zombieId, {
                    from: bob,
                    value: levelUpFee
                })
            );
            
            // Alice should be able to level up her own zombie
            const result = await contractInstance.levelUp(zombieId, {
                from: alice,
                value: levelUpFee
            });
            assert.equal(result.receipt.status, true);
        });

        it("should enforce level cap of 50", async () => {
            // Create a zombie
            const createResult = await contractInstance.createRandomZombie("TestZombie", {from: alice});
            const zombieId = createResult.logs[0].args.zombieId.toNumber();
            
            // Level up to max level (50)
            // Start at level 1, so we need 49 more level ups
            for (let i = 0; i < 49; i++) {
                await contractInstance.levelUp(zombieId, {
                    from: alice,
                    value: levelUpFee
                });
            }
            
            // Check that zombie is at level 50
            const zombie = await contractInstance.zombies(zombieId);
            assert.equal(zombie.level.toNumber(), 50, "Zombie should be at level 50");
            
            // Try to level up one more time - should fail
            await utils.shouldThrow(
                contractInstance.levelUp(zombieId, {
                    from: alice,
                    value: levelUpFee
                })
            );
        });

        it("should require exact fee payment", async () => {
            const createResult = await contractInstance.createRandomZombie("TestZombie", {from: alice});
            const zombieId = createResult.logs[0].args.zombieId.toNumber();
            
            // Try with wrong fee amount - should fail
            await utils.shouldThrow(
                contractInstance.levelUp(zombieId, {
                    from: alice,
                    value: web3.utils.toWei("0.002", "ether") // Wrong amount
                })
            );
            
            // Try with correct fee - should succeed
            const result = await contractInstance.levelUp(zombieId, {
                from: alice,
                value: levelUpFee
            });
            assert.equal(result.receipt.status, true);
        });

        it("should increment level correctly", async () => {
            const createResult = await contractInstance.createRandomZombie("TestZombie", {from: alice});
            const zombieId = createResult.logs[0].args.zombieId.toNumber();
            
            // Check initial level (should be 1)
            let zombie = await contractInstance.zombies(zombieId);
            assert.equal(zombie.level.toNumber(), 1, "Initial level should be 1");
            
            // Level up once
            await contractInstance.levelUp(zombieId, {
                from: alice,
                value: levelUpFee
            });
            
            // Check level increased to 2
            zombie = await contractInstance.zombies(zombieId);
            assert.equal(zombie.level.toNumber(), 2, "Level should be 2 after first level up");
            
            // Level up again
            await contractInstance.levelUp(zombieId, {
                from: alice,
                value: levelUpFee
            });
            
            // Check level increased to 3
            zombie = await contractInstance.zombies(zombieId);
            assert.equal(zombie.level.toNumber(), 3, "Level should be 3 after second level up");
        });
    });
});


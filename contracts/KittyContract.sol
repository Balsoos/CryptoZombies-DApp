pragma solidity ^0.4.25;

import "./KittyInterface.sol";

contract KittyContract is KittyInterface {
  
  struct Kitty {
    bool isGestating;
    bool isReady;
    uint256 cooldownIndex;
    uint256 nextActionAt;
    uint256 siringWithId;
    uint256 birthTime;
    uint256 matronId;
    uint256 sireId;
    uint256 generation;
    uint256 genes;
  }

  Kitty[] kitties;
  
  // Create some sample kitties for demonstration
  function createKitty(
    bool _isGestating,
    bool _isReady,
    uint256 _cooldownIndex,
    uint256 _nextActionAt,
    uint256 _siringWithId,
    uint256 _birthTime,
    uint256 _matronId,
    uint256 _sireId,
    uint256 _generation,
    uint256 _genes
  ) public returns (uint256) {
    kitties.push(Kitty(
      _isGestating,
      _isReady,
      _cooldownIndex,
      _nextActionAt,
      _siringWithId,
      _birthTime,
      _matronId,
      _sireId,
      _generation,
      _genes
    ));
    return kitties.length - 1;
  }

  function getKitty(uint256 _id) external view returns (
    bool isGestating,
    bool isReady,
    uint256 cooldownIndex,
    uint256 nextActionAt,
    uint256 siringWithId,
    uint256 birthTime,
    uint256 matronId,
    uint256 sireId,
    uint256 generation,
    uint256 genes
  ) {
    Kitty storage kitty = kitties[_id];
    return (
      kitty.isGestating,
      kitty.isReady,
      kitty.cooldownIndex,
      kitty.nextActionAt,
      kitty.siringWithId,
      kitty.birthTime,
      kitty.matronId,
      kitty.sireId,
      kitty.generation,
      kitty.genes
    );
  }

  // Initialize with some sample kitties
  constructor() public {
    // Create 5 sample kitties
    for (uint i = 0; i < 5; i++) {
      createKitty(
        false,
        true,
        1,
        now + 1 hours,
        0,
        now,
        0,
        0,
        0,
        uint256(keccak256(abi.encodePacked(i, now))) % 10 ** 10
      );
    }
  }
}


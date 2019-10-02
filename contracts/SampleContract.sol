pragma solidity ^0.5.12;

import "eth-token-recover/contracts/TokenRecover.sol";

contract SampleContract is TokenRecover {
    event WorkDone(uint256 value);

    address private _creator;

    modifier onlyCreator() {
        require(msg.sender == _creator);
        _;
    }

    constructor() public {
        _creator = owner();
    }

    function creator() public view returns (address) {
        return _creator;
    }

    function creatorDoesWork(uint256 value) public onlyCreator {
        emit WorkDone(value);
    }

    function ownerDoesWork(uint256 value) public onlyOwner {
        emit WorkDone(value);
    }
}

// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

/**
 * @title Donate
 * @dev This donates money to the owner
 */
contract Hello {
    address payable owner;

    constructor() {
        owner = payable(msg.sender);
    }

    function donate() public payable {
        require(msg.value >= 100000 gwei, "Need to pay up at least 10 Finney");
        owner.transfer(msg.value);
    }
}

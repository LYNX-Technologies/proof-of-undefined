// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

/**
 * @title Stake money for your objectives
 * @dev This allows you to stake money for your objectives
 */
contract Staking {
    address payable owner;

    struct UserGoals {
        uint256 startingDate;
        uint256 deadline;
        uint256 stakedAmount;
    }

    mapping(address => UserGoals) private userGoals;
    uint256 public totalPool;

    constructor() {
        owner = payable(msg.sender);
    }

    function stake(uint256 startingDate, uint256 deadline) public payable {
        require(msg.value >= 0.03 ether, "Need to transfer at least 0.03 ether");
        require(userGoals[msg.sender].stakedAmount == 0, "User already has set up a plan");

        userGoals[msg.sender] = UserGoals(startingDate, deadline, msg.value);
        totalPool += msg.value;
    }

    function withdraw(address target) public {
        require(userGoals[target].stakedAmount > 0, "User doesn't have a plan");
        address payable payee = payable(target);
        payee.transfer(userGoals[target].stakedAmount);
        totalPool -= userGoals[target].stakedAmount;
        userGoals[target].stakedAmount = 0;
    }
}

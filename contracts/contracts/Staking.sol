// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./Vault.sol";


/**
 * @title Stake money for your objectives
 * @dev This allows you to stake money for your objectives
 */
contract Staking {
    address payable owner;

    uint256 MAX_INT = 2**256 - 1;
    //    address DAI = 0x6B175474E89094C44Da98b954EedeAC495271d0F; mainnet
    address DAI = 0x51998830821827e12044a903e524b163152eFFd4;
    Vault yDai = Vault(0xF4869878d11145D65136A7e3c8CA36a5A5059dFa);

    ERC20 dai = ERC20(DAI);

    struct UserGoals {
        uint256 deadline;
        uint256 stakedAmount;
        uint256 shares;
    }

    mapping(address => UserGoals) private userGoals;
    uint256 public totalPool;

    constructor() {
        owner = payable(msg.sender);
    }

    function stake(uint256 deadline, uint256 amount) public {
        require(amount >= 1, "Need to transfer at least 1");
        require(userGoals[msg.sender].stakedAmount == 0, "User already has set up a plan");
        require(block.timestamp < deadline, "Deadline must be set in the future");

        dai.transferFrom(msg.sender, address(this), amount);

        dai.approve(address(yDai), MAX_INT);
        uint256 deposited = yDai.deposit(amount);

        userGoals[msg.sender] = UserGoals(deadline, amount, deposited);
        totalPool += amount;
    }

    function withdraw(address target) public {
        require(userGoals[target].stakedAmount > 0, "User doesn't have a plan");
        require(block.timestamp > userGoals[target].deadline, "Deadline hasn't been achieved");
        uint stakedAmount = userGoals[target].stakedAmount;
        uint shares = userGoals[target].shares;

        uint256 stakedPlusInterests = yDai.withdraw(shares);

        totalPool -= stakedAmount;
        userGoals[target] = UserGoals(0, 0, 0);
        dai.transfer(target, stakedPlusInterests);
    }
}

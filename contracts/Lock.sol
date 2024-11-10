// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StakingContract {
    address public owner;
    mapping(address => uint256) public stakes;
    uint256 public totalStaked;
    uint256 public minimumStake;

    event Staked(address indexed user, uint256 amount);
    event Unstaked(address indexed user, uint256 amount);
    event RewardClaimed(address indexed user, uint256 amount);

    constructor(uint256 _minimumStake) {
        owner = msg.sender;
        minimumStake = _minimumStake;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    function stake() external payable {
        require(msg.value >= minimumStake, "Amount is below the minimum stake");
        
        stakes[msg.sender] += msg.value;
        totalStaked += msg.value;

        emit Staked(msg.sender, msg.value);
    }

    function unstake(uint256 amount) external {
        require(stakes[msg.sender] >= amount, "Insufficient staked balance");
        
        stakes[msg.sender] -= amount;
        totalStaked -= amount;
        payable(msg.sender).transfer(amount);

        emit Unstaked(msg.sender, amount);
    }

    function calculateReward(address user) public view returns (uint256) {
        // Simple reward calculation (for demo purposes)
        return stakes[user] / 10;
    }

    function claimReward() external {
        uint256 reward = calculateReward(msg.sender);
        require(reward > 0, "No reward available");

        payable(msg.sender).transfer(reward);

        emit RewardClaimed(msg.sender, reward);
    }

    function updateMinimumStake(uint256 newMinimum) external onlyOwner {
        minimumStake = newMinimum;
    }
}

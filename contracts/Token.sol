// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Token {
    string public name;
    string public symbol;
    uint256 public totalSupply;
    address public owner;

    mapping(address => uint) private balances;

    constructor(){
        name = "HardHatToken";
        symbol = "HHT";
        totalSupply = 10000;
        owner = msg.sender;
        balances[msg.sender] = totalSupply;
    }

    function transfer(address _to, uint amount) external {
        require(balances[msg.sender]>= amount, "not enough token");
        balances[msg.sender] -=amount;
        balances[_to] += amount; 
    }

    function balanceOf(address _account) external view returns(uint256){
        return balances[_account];
    }
}

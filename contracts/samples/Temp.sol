// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.12;
contract Test  {
    mapping(address=>uint256) public userIds;
   

    constructor()  {
        
    }

    function set(uint256 _id) external {
        userIds[msg.sender] = _id;
    }
}

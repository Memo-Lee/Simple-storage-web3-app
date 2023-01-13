// SPDX-License-Identifier: MIT
// Tells the Solidity compiler to compile only from v0.8.13 to v0.9.0
pragma solidity ^0.8.13;

contract SimpleStorage {
    uint storedData;
    function set(uint x) public {
        
    }
    function get() public view returns (uint) {
        // değerlerimizi görüntülemek için 'view returns'
        return storedData;
    } 
}
// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.12;
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";


interface IGamerCard is IERC721 {
    function mint(address owner) external;
    function changeBaseURI(string memory _baseURI) external ;
    function nextTokenId() external view returns(uint256) ;
}
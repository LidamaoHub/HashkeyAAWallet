// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.12;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract GamerCard is ERC721 {
    address private _owner;
    string private baseURI;
    mapping(uint256 => address) private holderAddress;
    uint256 public nextTokenId;
    modifier onlyOwner() {
        require(msg.sender == _owner);
        _;
    }

    constructor() ERC721("Gamer Card", "GCT") {
        _owner = msg.sender;
        baseURI = "";
    }

    function mint(address owner) external {
        _mint(owner, nextTokenId);
        nextTokenId += 1;
    }

    function tokenURI(
        uint256 tokenId
    ) public view virtual override returns (string memory) {
        return baseURI;
    }

    function changeBaseURI(string memory _baseURI) external onlyOwner {
        baseURI = _baseURI;
    }

    function getNftId(address user) external view returns (uint256[] memory) {
        uint256 balance= balanceOf(user);
        uint256[] memory ids = new uint256[](balance);
        uint256 index = 0;
        uint256 i = 0;
        while(index<balance){
            if (ownerOf(i) == user) {
                ids[index] = i;
                index += 1;
            }
            i += 1;

        }
        
        return ids;
    }

    function getA() external view returns(uint256){
        return nextTokenId;
    }
}

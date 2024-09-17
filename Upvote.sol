// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract UpvoteManager {
    // Mapping to store upvotes: canvas creator => canvas index => upvote count
    mapping(address => mapping(uint256 => uint256)) public upvotes;

    // Event to notify when a canvas is upvoted
    event CanvasUpvoted(address indexed creator, uint256 indexed canvasId, uint256 newVoteCount);

    function upvoteCanvas(address creator, uint256 canvasId) public {
        upvotes[creator][canvasId] += 1;
        emit CanvasUpvoted(creator, canvasId, upvotes[creator][canvasId]);
    }

    function getUpvotes(address creator, uint256 canvasId) public view returns (uint256) {
        return upvotes[creator][canvasId];
    }
}

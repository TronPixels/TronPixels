// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CanvasManager {
    struct GridPoint {
        uint8 color;
        uint8 structure;
    }

    struct Canvas {
        address creator;
        GridPoint[625] grid; 
        string title;
        string description;
        string[] tags; 
        uint256 submissionDate;
    }

    mapping(address => Canvas[]) public canvases;
    address[] public canvasCreators;

    event CanvasSaved(address indexed creator, uint indexed canvasId);

    function saveCanvas(
        GridPoint[25][25] memory grid,
        string memory title,
        string memory description,
        string[] memory tags
    ) public {
        Canvas storage newCanvas = canvases[msg.sender].push();
        newCanvas.creator = msg.sender;
        newCanvas.title = title;
        newCanvas.description = description;
        newCanvas.tags = tags;
        newCanvas.submissionDate = block.timestamp;

        // Flatten 2D grid to 1D for storage
        for (uint i = 0; i < 25; i++) {
            for (uint j = 0; j < 25; j++) {
                newCanvas.grid[i * 25 + j] = grid[i][j];
            }
        }

        canvasCreators.push(msg.sender);
        emit CanvasSaved(msg.sender, canvases[msg.sender].length - 1);
    }

    function getCanvas(address creator, uint256 index) 
        public 
        view 
        returns (
            GridPoint[25][25] memory grid, 
            string memory title, 
            string memory description, 
            string[] memory tags, 
            uint256 submissionDate
        ) 
    {
        Canvas storage canvas = canvases[creator][index];
        GridPoint[25][25] memory flattenedGrid;
        for (uint i = 0; i < 25; i++) {
            for (uint j = 0; j < 25; j++) {
                flattenedGrid[i][j] = canvas.grid[i * 25 + j];
            }
        }
        return (flattenedGrid, canvas.title, canvas.description, canvas.tags, canvas.submissionDate);
    }

    function getCanvasCount(address creator) public view returns (uint256) {
        return canvases[creator].length;
    }

    function getCanvasCreators() public view returns (address[] memory) {
        return canvasCreators;
    }
}

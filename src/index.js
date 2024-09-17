const contractABI = [{
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "creator",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "uint256",
        "name": "canvasId",
        "type": "uint256"
    }],
    "name": "CanvasSaved",
    "type": "event"
}, {
    "inputs": [{
        "components": [{
            "internalType": "uint8",
            "name": "color",
            "type": "uint8"
        }, {
            "internalType": "uint8",
            "name": "structure",
            "type": "uint8"
        }],
        "internalType": "struct CanvasManager.GridPoint[25][25]",
        "name": "grid",
        "type": "tuple[25][25]"
    }, {
        "internalType": "string",
        "name": "title",
        "type": "string"
    }, {
        "internalType": "string",
        "name": "description",
        "type": "string"
    }, {
        "internalType": "string[]",
        "name": "tags",
        "type": "string[]"
    }],
    "name": "saveCanvas",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "name": "canvasCreators",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "name": "canvases",
    "outputs": [{
        "internalType": "address",
        "name": "creator",
        "type": "address"
    }, {
        "internalType": "string",
        "name": "title",
        "type": "string"
    }, {
        "internalType": "string",
        "name": "description",
        "type": "string"
    }, {
        "internalType": "uint256",
        "name": "submissionDate",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "creator",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
    }],
    "name": "getCanvas",
    "outputs": [{
        "components": [{
            "internalType": "uint8",
            "name": "color",
            "type": "uint8"
        }, {
            "internalType": "uint8",
            "name": "structure",
            "type": "uint8"
        }],
        "internalType": "struct CanvasManager.GridPoint[25][25]",
        "name": "grid",
        "type": "tuple[25][25]"
    }, {
        "internalType": "string",
        "name": "title",
        "type": "string"
    }, {
        "internalType": "string",
        "name": "description",
        "type": "string"
    }, {
        "internalType": "string[]",
        "name": "tags",
        "type": "string[]"
    }, {
        "internalType": "uint256",
        "name": "submissionDate",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "creator",
        "type": "address"
    }],
    "name": "getCanvasCount",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "getCanvasCreators",
    "outputs": [{
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
    }],
    "stateMutability": "view",
    "type": "function"
}];
const contractAddress = "0xB3179ec4d83ed51BD9f98980beA6d42dedff10D3";
const upvoteContractABI = [{
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "creator",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "uint256",
        "name": "canvasId",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "newVoteCount",
        "type": "uint256"
    }],
    "name": "CanvasUpvoted",
    "type": "event"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "creator",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "canvasId",
        "type": "uint256"
    }],
    "name": "upvoteCanvas",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "creator",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "canvasId",
        "type": "uint256"
    }],
    "name": "getUpvotes",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "name": "upvotes",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}];
const upvoteContractAddress = "0xb637e022689Cf260c007889DE226EC13A7CebD17";
let upvoteContract;
const STATE = {
    mode: "structure",
    gridX: 0,
    gridY: 0,
    current: "",
    structures: "🏠,🏡,🏭,🏢,🏰,🏯,🏫,🏪,🏥,🏨,🌲,🌳,🌵,🌴,⛺,🌋,🌁,🌼,🚗,🚑,🚂,🚋,🚇,🚤,⛵,⛲️,🚦, ",
    colors: ['#ffffff', '#000000', '#ffffe0', '#ffff00', '#ffa500', '#ff0000', '#800020', '#964b00', '#8b4513', '#d4af37', '#8f00ff', '#800080', '#e6e6fa', '#ffc0cb', '#ffb6c1', '#40e0d0', '#0070ff', '#00008b', '#006994', '#32cd32', '#008000', '#808080', '#696969']
};
const COLOR_MAP = {
    1: '#ffffff',
    2: '#000000',
    3: '#ffffe0',
    4: '#ffff00',
    5: '#ffa500',
    6: '#ff0000',
    7: '#800020',
    8: '#964b00',
    9: '#8b4513',
    10: '#d4af37',
    11: '#8f00ff',
    12: '#800080',
    13: '#e6e6fa',
    14: '#ffc0cb',
    15: '#ffb6c1',
    16: '#40e0d0',
    17: '#0070ff',
    18: '#00008b',
    19: '#006994',
    20: '#32cd32',
    21: '#008000',
    22: '#808080',
    23: '#696969'
};
const STRUCTURE_MAP = {
    1: "🏠",
    2: "🏡",
    3: "🏭",
    4: "🏢",
    5: "🏰",
    6: "🏯",
    7: "🏫",
    8: "🏪",
    9: "🏥",
    10: "🏨",
    11: "🌲",
    12: "🌳",
    13: "🌵",
    14: "🌴",
    15: "⛺",
    16: "🌋",
    17: "🌁",
    18: "🌼",
    19: "🚗",
    20: "🚑",
    21: "🚂",
    22: "🚋",
    23: "🚇",
    24: "🚤",
    25: "⛵",
    26: "⛲️",
    27: "🚦",
    28: " "
};

function colorToCode(color) {
    for (let key in COLOR_MAP) {
        if (COLOR_MAP[key] === color) return parseInt(key);
    }
    return 0;
}

function structureToCode(structure) {
    for (let key in STRUCTURE_MAP) {
        if (STRUCTURE_MAP[key] === structure) return parseInt(key);
    }
    return 0;
}

function codeToColor(code) {
    return COLOR_MAP[code] || "#ffffff";
}

function codeToStructure(code) {
    return STRUCTURE_MAP[code] || "";
}
const CANVAS = document.querySelector(".canvas");
const STRUCTURES = document.querySelector(".structures");
const PALETTE = document.querySelector(".palette");
const SAVE_BTN = document.querySelector(".save");
const CLEAR_BTN = document.querySelector(".clear");
const CTX = CANVAS.getContext("2d");
const CWIDTH = 750;
const CHEIGHT = 750;
CANVAS.width = CWIDTH;
CANVAS.height = CHEIGHT;
const GRID_SIZE = 30;
let web3;
let contract;
let accounts;
const plots = new Map();
async function loadWeb3() {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
    } else if (window.web3) {
        web3 = new Web3(window.web3.currentProvider);
    } else {
        alert("Please install MetaMask!");
    }
}
async function loadContract() {
    contract = new web3.eth.Contract(contractABI, contractAddress);
}
async function loadUpvoteContract() {
    upvoteContract = new web3.eth.Contract(upvoteContractABI, upvoteContractAddress);
}
async function load() {
    await loadWeb3();
    await loadContract();
    await loadUpvoteContract();
    accounts = await web3.eth.getAccounts();
    createUI();
    clearCanvas();
    loadAllContent();
}

function createUI() {
    const STRUCT_ARRAY = STATE.structures.split(",");
    STRUCT_ARRAY.forEach(e => {
        createElement({
            parent: STRUCTURES,
            tag: "div",
            content: e,
            classes: "structure",
            addToParent: true
        });
    });
    STATE.colors.forEach(e => {
        createElement({
            parent: PALETTE,
            tag: "div",
            classes: "col",
            addToParent: true,
            style: e,
            hex: e
        });
    });
}

function createElement({
    parent,
    tag,
    content,
    classes,
    addToParent,
    style,
    hex
} = {}) {
    let el = document.createElement(tag);
    if (content) {
        let txt = document.createTextNode(content);
        el.appendChild(txt);
    }
    if (classes) {
        el.setAttribute("class", classes);
    }
    if (style) {
        el.style.backgroundColor = style;
    }
    if (hex) {
        el.dataset.hex = hex;
    }
    if (addToParent) {
        parent.appendChild(el);
    }
    return el;
}

function mouseMove(e) {
    let cx = e.x - CANVAS.offsetLeft;
    let cy = e.y - CANVAS.offsetTop + window.scrollY;
    STATE.gridX = roundDown(cx);
    STATE.gridY = roundDown(cy);
    redraw();
    CTX.fillStyle = "rgba(255, 165, 0, 0.5)";
    CTX.fillRect(STATE.gridX, STATE.gridY, GRID_SIZE, GRID_SIZE);
    CTX.fillStyle = "black";
    switch (e.buttons) {
        case 1:
            paint();
            break;
        case 2:
            erase();
            break;
    }
}

function roundDown(num) {
    return Math.ceil(num / GRID_SIZE) * GRID_SIZE - GRID_SIZE;
}

function redraw() {
    CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
    plots.forEach(e => {
        CTX.fillStyle = e.col;
        CTX.fillRect(e.x, e.y, GRID_SIZE, GRID_SIZE);
        if (e.structure) {
            CTX.fillStyle = "black";
            CTX.font = `${GRID_SIZE}px serif`;
            CTX.textBaseline = "middle";
            CTX.textAlign = "center";
            CTX.fillText(e.structure, e.x + GRID_SIZE / 2, e.y + GRID_SIZE / 2);
        }
    });
}

function canvasClick(e) {
    switch (e.buttons) {
        case 1:
            paint();
            break;
        case 2:
            erase();
            break;
    }
}

function structureClick(e) {
    let t = e.target;
    if (t.className === "structure" && t.childNodes.length === 1 && t.childNodes[0].length <= 2) {
        STATE.mode = "structure";
        STATE.current = t.childNodes[0].textContent;
    }
}

function paletteClick(e) {
    let t = e.target;
    if (t.classList.contains("col")) {
        STATE.mode = "paint";
        STATE.current = t.dataset.hex;
    }
}

function paint() {
    if (STATE.current) {
        let plotKey = `${STATE.gridX}-${STATE.gridY}`;
        let plot = plots.get(plotKey);
        if (!plot) {
            plot = new Plot(STATE.gridX, STATE.gridY, STATE.gridX + GRID_SIZE / 2, STATE.gridY + 4, "transparent", "");
            plots.set(plotKey, plot);
        }
        switch (STATE.mode) {
            case "structure":
                plot.structure = STATE.current;
                break;
            case "paint":
                plot.col = STATE.current;
                break;
        }
        redraw();
    }
}

function erase() {
    let plotKey = `${STATE.gridX}-${STATE.gridY}`;
    let plot = plots.get(plotKey);
    if (plot) {
        plot.structure = "";
        plot.col = "transparent";
        redraw();
    }
}

function clearCanvas() {
    plots.clear();
    for (let x = 0; x < CWIDTH; x += GRID_SIZE) {
        for (let y = 0; y < CHEIGHT; y += GRID_SIZE) {
            plots.set(
                `${x}-${y}`,
                new Plot(x, y, x + GRID_SIZE / 2, y + 4, "transparent", "")
            );
        }
    }
    redraw();
}
class Plot {
    constructor(x, y, charX, charY, col, structure) {
        this.x = x;
        this.y = y;
        this.charX = charX;
        this.charY = charY;
        this.col = col;
        this.structure = structure;
    }
}

function getSelectedTags() {
    const selectedTags = [];
    const checkboxes = document.querySelectorAll('input[name="tags"]:checked');
    checkboxes.forEach((checkbox) => {
        selectedTags.push(checkbox.value);
    });
    return selectedTags;
}

function enforceTagLimit() {
    const checkboxes = document.querySelectorAll('input[name="tags"]');
    const selectedTags = getSelectedTags();
    checkboxes.forEach(checkbox => {
        if (selectedTags.length >= 5 && !checkbox.checked) {
            checkbox.disabled = true;
        } else {
            checkbox.disabled = false;
        }
    });
}
document.querySelectorAll('input[name="tags"]').forEach(checkbox => {
    checkbox.addEventListener('change', enforceTagLimit);
});
async function saveCanvas() {
    let grid = [];
    for (let i = 0; i < 25; i++) {
        let row = [];
        for (let j = 0; j < 25; j++) {
            const plotKey = `${i * GRID_SIZE}-${j * GRID_SIZE}`;
            let plot = plots.get(plotKey) || new Plot(i * GRID_SIZE, j * GRID_SIZE, "transparent", "");
            row.push({
                color: colorToCode(plot.col),
                structure: structureToCode(plot.structure)
            });
        }
        grid.push(row);
    }
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let tags = getSelectedTags();
    if (!title || !description) {
        alert('Title and description are required.');
        return;
    }
    if (tags.length === 0 || tags.length > 5) {
        document.getElementById('tags-limit-message').style.display = 'block';
        return;
    } else {
        document.getElementById('tags-limit-message').style.display = 'none';
    }
    try {
        const gasPrice = await web3.eth.getGasPrice();
        const gasEstimate = await contract.methods.saveCanvas(grid, title, description, tags).estimateGas({
            from: accounts[0]
        });
        const result = await contract.methods.saveCanvas(grid, title, description, tags).send({
            from: accounts[0],
            gas: gasEstimate,
            gasPrice: gasPrice
        });
        alert("Canvas is now on BitTorrent Chain Mainnet");
    } catch (error) {
        console.error("Error saving canvas:", error);
        alert("Failed to save canvas. Check console for details.");
    }
}
enforceTagLimit();
let currentSortMethod = 'new';
document.getElementById('sort-new').addEventListener('click', function() {
    if (currentSortMethod !== 'new') {
        currentSortMethod = 'new';
        loadAllContent();
        updateActiveButton();
    }
});
document.getElementById('sort-popular').addEventListener('click', function() {
    if (currentSortMethod !== 'popular') {
        currentSortMethod = 'popular';
        loadAllContent();
        updateActiveButton();
    }
});

function updateActiveButton() {
    document.querySelectorAll('.sort-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`sort-${currentSortMethod}`).classList.add('active');
}
async function loadAllContent() {
    try {
        const creators = await contract.methods.getCanvasCreators().call();
        const contentDiv = document.getElementById('other-users-content');
        contentDiv.innerHTML = '';
        let allCanvases = [];
        for (const creator of creators) {
            const canvasCount = Number(await contract.methods.getCanvasCount(creator).call());
            for (let index = 0; index < canvasCount; index++) {
                const canvasData = await contract.methods.getCanvas(creator, index).call();
                canvasData.votes = Number(await upvoteContract.methods.getUpvotes(creator, index).call());
                canvasData.creator = creator;
                canvasData.index = index;
                allCanvases.push(canvasData);
            }
        }
        const uniqueCanvases = new Map(allCanvases.map(canvas => [`${canvas.creator}-${canvas.index}`, canvas]));
        let filteredCanvases = [...uniqueCanvases.values()];
        if (currentSortMethod === 'popular') {
            filteredCanvases.sort((a, b) => Number(b.votes) - Number(a.votes));
        } else {
            filteredCanvases.sort((a, b) => Number(b.submissionDate) - Number(a.submissionDate));
        }
        filteredCanvases.forEach(canvas => {
            const {
                grid,
                title,
                description,
                submissionDate,
                tags,
                creator,
                index,
                votes
            } = canvas;
            const date = new Date(Number(submissionDate) * 1000).toLocaleString("en-US");
            const transformedGrid = rotateAndMirrorGrid(grid);
            const smallGrid = createSmallGrid(transformedGrid);
            const container = document.createElement('div');
            container.className = 'content-container';
            container.innerHTML = `
                <div class="metadata">
                    <p class="date">${date}</p>
                    <p class="title">Title: ${title}</p>
                    <p class="description">Description: ${description}</p>
                    <p class="tags">Tags: ${tags.join(', ')}</p>
                    <p class="address">Address: ${creator}</p>
                    <p class="votes">Votes: ${votes}</p>
                    <button class="upvote-btn" data-creator="${creator}" data-canvasid="${index}">Upvote</button>
                </div>`;
            container.appendChild(smallGrid);
            contentDiv.appendChild(container);
        });
        attachUpvoteListeners();
    } catch (error) {
        console.error("Error loading content:", error);
    }
}

function attachUpvoteListeners() {
    document.querySelectorAll('.upvote-btn').forEach(button => {
        button.addEventListener('click', async function() {
            const creator = this.getAttribute('data-creator');
            const canvasId = this.getAttribute('data-canvasid');
            await upvoteCanvas(creator, canvasId);
        });
    });
}

function rotateAndMirrorGrid(grid) {
    const size = grid.length;
    let newGrid = [];
    for (let i = 0; i < size; i++) {
        let newRow = [];
        for (let j = 0; j < size; j++) {
            newRow.push(grid[size - 1 - j][i]);
        }
        newGrid.push(newRow);
    }
    newGrid.forEach(row => row.reverse());
    return newGrid;
}

function createSmallGrid(grid) {
    const smallGrid = document.createElement('div');
    smallGrid.className = 'small-grid';
    smallGrid.style.gridTemplateColumns = `repeat(${grid.length}, 20px)`;
    grid.forEach(row => {
        row.forEach(cell => {
            const square = document.createElement('div');
            square.style.backgroundColor = codeToColor(cell.color);
            square.textContent = codeToStructure(cell.structure);
            smallGrid.appendChild(square);
        });
    });
    return smallGrid;
}

function updateCharCount(inputId, countId, maxLength) {
    const input = document.getElementById(inputId);
    const countElement = document.getElementById(countId);
    input.addEventListener('input', function() {
        const remaining = maxLength - input.value.length;
        countElement.textContent = `${remaining} characters left`;
    });
}
updateCharCount('title', 'title-char-count', 60);
updateCharCount('description', 'description-char-count', 250);
async function upvoteCanvas(creator, canvasId) {
    try {
        const gasPrice = await web3.eth.getGasPrice();
        const gasEstimate = await upvoteContract.methods.upvoteCanvas(creator, canvasId).estimateGas({
            from: accounts[0]
        });
        const result = await upvoteContract.methods.upvoteCanvas(creator, canvasId).send({
            from: accounts[0],
            gas: gasEstimate,
            gasPrice: gasPrice
        });
        console.log("Upvote transaction result:", result);
        alert("Canvas upvoted successfully!");
        window.location.reload();
        const updatedVotesBigInt = await upvoteContract.methods.getUpvotes(creator, canvasId).call();
        const updatedVotes = Number(updatedVotesBigInt);
        const votesElement = document.querySelector(`.votes[data-creator="${creator}"][data-canvasid="${canvasId}"]`);
        if (votesElement) {
            votesElement.textContent = `Votes: ${updatedVotes}`;
        }
    } catch (error) {
        console.error("Error upvoting canvas:", error);
        alert("Failed to upvote canvas. Check console for details.");
    }
}
SAVE_BTN.addEventListener("click", saveCanvas);
CLEAR_BTN.addEventListener("click", clearCanvas);
CANVAS.addEventListener("mousemove", mouseMove);
CANVAS.addEventListener("mousedown", canvasClick);
STRUCTURES.addEventListener("click", structureClick);
PALETTE.addEventListener("click", paletteClick);
load();
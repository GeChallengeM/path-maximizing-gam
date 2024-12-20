const MOVE_NORTH_WEST_MASK = 0x1;
const MOVE_NORTH_MASK = 0x2;
const MOVE_NORTH_EAST_MASK = 0x4;
const MOVE_EAST_MASK = 0x8;
const MOVE_SOUTH_EAST_MASK = 0x10;
const MOVE_SOUTH_MASK = 0x20;
const MOVE_SOUTH_WEST_MASK = 0x40;
const MOVE_WEST_MASK = 0x80;
const MOVE_FULL_MASK = 0x100;

const BUFFERSIZE = 8192;

const BEST_KNOWN_SCORES = {
    level1: {
        score: 1,
        name: "Gech",
        map: {"currentMap":[0],"personalBest":1}
    },
    level2: {
        score: 3,
        name: "Gech",
        map: {"currentMap":[0,0,0,0],"personalBest":3}
    },
    level3: {
        score: 8,
        name: "Gech",
        map: {"currentMap":{"currentMap":[0,0,0,0,0,0,0,0,0],"personalBest":8},"personalBest":8}
    },
    level4: {
        score: 10,
        name: "Gech",
        map: {"currentMap":[0,0,0,0,0,0,4,1,0,0,18,64,0,0,32,0],"personalBest":10}
    },
    level5: {
        score: 16,
        name: "Gech",
        map: {"currentMap":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"personalBest":16}
    },
    level6: {
        score: 21,
        name: "Gech",
        map: {"currentMap":[0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,32,8,128,0,0,0,2,4,1,0,0,0,32,16,64,0,0,0,0,0,0],"personalBest":21}
    },
    level7: {
        score: 28,
        name: "Gech",
        map: {"currentMap":[0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,32,0,0,0,0,8,128,0,8,128,0,0,0,0,2,0,0,0,0,0,0,32,0,0,0,0,0,0,0,0,0,0],"personalBest":28}
    },
    level8: {
        score: 36,
        name: "Gech",
        map: {"currentMap":[0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,32,32,0,0,0,0,8,128,0,0,8,128,0,0,8,128,0,4,9,128,0,0,0,0,2,18,64,0,0,0,0,0,32,32,0,0,0,0,0,0,0,0,0,0,0],"personalBest":36}
    },
    level9: {
        score: 40,
        name: "Gech",
        map: {"currentMap":[0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,0,0,0,0,0,0,32,0,32,0,0,0,0,8,128,0,0,0,8,128,0,0,0,0,0,0,0,0,0,0,0,8,128,0,0,0,8,128,0,0,0,0,2,0,2,0,0,0,0,0,0,32,0,32,0,0,0,0,0,0,0,0,0,0,0,0],"personalBest":40}
    },
    level10: {
        score: 48,
        name: "Gech",
        map: {"currentMap":[0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,0,0,0,0,0,40,138,136,160,0,0,0,0,8,130,0,32,0,4,9,128,0,0,0,42,128,0,0,16,72,128,0,0,0,34,0,0,4,9,128,0,0,0,8,160,4,1,18,64,8,130,0,0,0,0,18,66,32,2,0,32,0,0,0,0,32,32,0,40,128,0,0,0,0,0,0,0,0,0,0,0,0],"personalBest":48}
    },
    level11: {
        score: 56,
        name: "Gech",
        map: {"currentMap":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,40,138,136,138,160,0,0,0,0,8,130,0,32,0,32,0,10,128,0,0,0,42,128,0,0,0,8,162,0,0,0,0,34,0,0,0,0,0,34,0,0,0,0,42,128,0,0,0,8,162,0,0,0,8,160,0,2,0,2,0,40,128,0,0,0,0,10,168,136,168,130,0,0,0,0,0,0,32,0,0,0,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"personalBest":56}
    },
    level12: {
        score: 73,
        name: "Gech",
        map: {"currentMap":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,40,130,0,0,32,10,128,0,0,0,8,130,0,40,138,136,138,160,8,128,0,0,0,40,130,0,32,0,32,0,8,128,0,0,0,0,42,128,0,0,0,10,128,0,0,0,0,0,34,0,0,0,8,160,0,0,0,0,8,128,42,128,0,2,8,130,2,0,0,0,0,10,160,0,10,168,130,32,40,128,0,0,0,32,2,2,32,0,40,130,0,0,0,0,0,0,32,32,0,0,0,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"personalBest":73}
    },
    level13: {
        score: 84,
        name: "Gech",
        map: {"currentMap":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,2,0,2,0,0,0,0,0,0,32,32,8,128,40,128,32,0,0,0,0,8,128,0,0,2,0,10,128,0,8,128,0,0,0,2,2,0,40,138,160,0,0,8,128,0,0,8,160,40,130,0,32,0,10,128,2,0,0,0,0,2,0,42,128,0,8,162,0,32,0,0,0,0,32,8,160,0,2,0,40,130,10,128,0,0,8,128,0,0,10,168,130,0,32,32,0,0,0,8,128,0,8,160,0,32,0,0,8,128,0,0,0,0,2,8,130,8,128,2,2,0,0,0,0,0,0,32,0,32,0,0,32,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"personalBest":84}
    },
    level14: {
        score: 92,
        name: "Gech",
        map: {"currentMap":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,4,1,0,4,1,0,0,0,0,0,0,0,0,40,144,64,8,144,64,0,2,0,0,0,0,8,130,0,8,130,8,136,128,10,160,8,128,0,0,4,33,2,0,40,138,136,138,160,0,8,128,0,0,16,64,40,130,0,32,0,32,0,10,128,0,0,0,0,2,2,42,128,0,0,0,8,160,8,128,0,0,4,33,34,34,0,0,4,1,8,128,0,0,0,0,16,64,32,42,128,0,16,64,8,130,0,0,0,0,0,0,10,160,0,2,2,2,0,32,2,0,0,0,0,8,160,0,10,160,32,40,128,0,40,128,0,0,0,0,2,2,32,2,0,0,8,130,0,0,0,0,0,0,32,32,0,32,0,0,0,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"personalBest":92}
    },
    level15: {
        score: 104,
        name: "Gech",
        map: {"currentMap":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,4,1,0,0,0,4,1,2,0,0,0,0,0,0,32,16,64,8,136,128,16,64,32,0,0,0,0,8,128,0,8,130,8,136,128,10,128,0,8,128,0,0,4,1,2,0,40,138,136,138,160,0,2,4,1,0,0,16,64,40,130,0,32,0,32,0,10,160,16,64,0,0,0,2,2,42,128,0,0,0,8,162,2,2,0,0,0,0,34,34,34,0,0,0,0,0,34,34,34,0,0,0,0,32,32,42,128,0,0,0,8,162,32,32,0,0,0,4,1,10,160,0,2,0,2,0,40,130,4,1,0,0,16,64,32,0,10,168,136,168,130,0,32,16,64,0,0,8,128,0,8,160,8,136,128,40,128,0,8,128,0,0,0,0,2,4,1,8,136,128,4,1,2,0,0,0,0,0,0,32,16,64,0,0,0,16,64,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"personalBest":104}
    },
    level16: {
        score: 112,
        name: "Gech",
        map: {"currentMap":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,2,4,1,0,0,0,40,128,0,0,8,136,128,0,0,8,160,16,64,0,8,130,0,8,130,8,128,0,8,128,10,128,0,8,128,0,0,32,2,0,40,130,8,136,128,10,160,0,10,128,0,0,0,0,40,130,0,40,138,136,138,160,0,10,160,0,0,0,0,0,2,40,130,0,32,0,32,0,10,164,5,1,0,0,0,2,32,2,42,128,0,0,0,8,162,18,80,64,0,0,0,34,0,34,34,0,0,4,1,0,34,34,10,128,0,0,0,32,2,32,42,128,0,16,64,8,162,32,32,0,0,0,0,0,32,10,160,0,2,0,2,0,40,130,0,0,0,0,0,0,10,160,0,10,168,136,168,130,0,32,2,0,0,0,0,2,32,0,10,164,9,136,128,40,128,0,40,128,0,0,8,160,0,10,160,20,65,10,128,0,8,130,0,0,0,0,4,1,2,32,0,16,64,32,0,0,0,32,0,0,0,0,16,64,32,0,0,0,0,0,0,0,0,0,0,0,0],"personalBest":112}
    },
    level17: {
        score: 136,
        name: "Gech",
        map: {"currentMap":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,32,32,8,128,8,136,128,8,128,32,32,0,0,0,0,8,128,0,0,2,0,8,136,128,0,2,0,0,8,128,0,0,8,128,0,0,40,130,8,136,128,10,160,0,0,8,128,0,0,0,2,8,130,0,40,138,136,138,160,0,10,128,2,0,0,0,0,32,0,40,130,0,32,0,32,0,10,160,0,32,0,0,0,0,2,2,2,42,128,0,0,0,8,162,2,2,2,0,0,0,0,34,34,34,34,0,0,0,0,0,34,34,34,34,0,0,0,0,32,32,32,42,128,0,0,0,8,162,32,32,32,0,0,0,0,2,0,10,160,0,2,0,2,0,40,130,0,2,0,0,0,0,32,8,160,0,10,168,136,168,130,0,40,128,32,0,0,0,8,128,0,0,10,160,8,136,128,40,130,0,0,8,128,0,0,8,128,0,0,32,0,8,136,128,0,32,0,0,8,128,0,0,0,0,2,2,8,128,8,136,128,8,128,2,2,0,0,0,0,0,0,32,32,0,0,0,0,0,0,0,32,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"personalBest":136}
    },
    level18: {
        score: 136,
        name: "Gech",
        map: {"currentMap":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,8,130,4,1,0,2,8,130,0,0,0,32,32,8,128,0,0,2,0,32,18,64,8,160,0,40,128,8,128,0,0,0,0,0,0,40,128,0,40,130,0,8,136,128,0,10,128,0,2,8,128,0,0,4,9,130,0,40,130,8,136,128,10,160,0,10,160,0,0,0,0,16,64,40,130,0,40,138,136,138,160,0,2,40,128,0,0,0,0,0,2,0,40,130,0,32,0,32,0,10,168,136,128,0,0,0,0,8,160,2,2,42,128,0,0,0,8,162,2,10,130,0,0,0,0,2,0,34,34,34,0,0,4,1,0,34,34,34,34,8,128,0,0,40,130,32,32,42,128,0,16,64,8,162,32,32,32,0,0,0,0,0,32,0,10,160,0,2,0,2,0,40,130,4,1,0,0,0,0,0,2,10,160,0,10,168,136,168,130,0,40,144,64,0,0,0,0,0,32,32,0,8,162,8,136,128,40,130,0,8,130,0,0,0,8,128,0,0,10,130,34,10,136,128,4,33,2,0,40,128,0,0,8,128,0,8,160,32,32,40,136,128,16,64,40,130,0,0,0,0,0,2,0,2,0,0,0,0,2,0,0,0,0,32,0,0,0,0,0,32,0,32,0,0,0,0,32,0,0,0,0,0,0,0,0],"personalBest":136}
    },
    level19: {
        score: 152,
        name: "Gech",
        map: {"currentMap":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,32,10,128,2,0,8,136,128,0,2,8,130,32,0,0,0,0,8,128,0,32,0,32,0,8,136,128,0,32,0,32,0,8,128,0,0,0,10,128,0,8,130,0,8,136,128,0,10,128,0,8,130,0,0,0,0,32,0,2,0,40,130,8,136,128,10,160,0,2,0,32,0,0,0,0,8,128,40,130,0,40,138,136,138,160,0,10,160,8,128,0,0,0,0,0,0,0,40,130,0,32,0,32,0,10,160,0,0,0,0,0,0,0,2,2,2,2,42,128,0,0,0,8,162,2,2,2,2,0,0,0,0,34,34,34,34,34,0,0,0,0,0,34,34,34,34,34,0,0,0,0,32,32,32,32,42,128,0,0,0,8,162,32,32,32,32,0,0,0,0,0,0,0,10,160,0,2,0,2,0,40,130,0,0,0,0,0,0,0,8,128,10,160,0,10,168,136,168,130,0,40,130,8,128,0,0,0,0,2,0,32,0,10,160,8,136,128,40,130,0,32,0,2,0,0,0,0,40,128,0,8,160,0,8,136,128,0,40,128,0,8,160,0,0,0,8,128,0,2,0,2,0,8,136,128,0,2,0,2,0,8,128,0,0,0,0,2,40,128,32,0,8,136,128,0,32,8,160,2,0,0,0,0,0,0,32,0,0,0,0,0,0,0,0,0,0,0,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"personalBest":152}
    },
    level20: {
        score: 170,
        name: "Gech",
        map: {"currentMap":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,32,0,0,0,4,1,8,136,128,0,0,8,130,34,0,0,0,0,8,128,0,8,130,10,144,64,8,136,128,0,10,128,32,32,8,128,0,0,0,0,2,0,32,32,8,128,8,136,128,0,32,2,0,0,8,128,0,0,0,0,40,128,0,8,130,0,8,136,128,0,10,160,0,8,130,0,0,0,0,0,10,128,2,0,40,130,8,136,128,10,160,0,10,136,160,0,0,0,0,4,33,2,40,130,0,40,138,136,138,160,0,10,160,0,0,0,0,0,0,16,64,32,0,40,130,0,32,0,32,0,10,160,0,8,128,0,0,0,0,2,2,2,2,2,42,128,0,0,0,8,162,2,2,2,2,0,0,0,0,34,34,34,34,34,34,0,0,4,1,0,34,34,34,34,34,8,128,0,0,32,32,32,32,32,42,128,0,16,64,8,162,32,32,32,32,0,0,0,0,0,0,0,0,10,160,0,2,0,2,0,40,130,0,0,0,0,0,0,0,0,10,128,10,160,0,10,168,136,168,130,0,40,130,8,130,0,0,0,0,2,32,8,160,0,10,160,8,136,128,40,130,0,32,0,34,0,0,0,0,40,128,0,0,10,160,0,8,136,128,0,40,128,0,8,160,0,0,0,8,136,128,0,2,34,0,2,8,136,128,0,2,0,2,0,8,128,0,0,0,0,2,2,40,160,0,32,8,136,128,0,40,136,160,2,0,0,0,0,0,0,32,32,0,0,0,0,0,2,0,0,0,0,0,32,0,0,0,0,0,0,0,0,0,0,0,0,0,32,0,0,0,0,0,0,0,0,0],"personalBest":170}
    }
}

let currentMap;
let mapSize;
let distances;
let directions;
let maxDistance;
let mostCommonDistance;
let mostCommonDistanceCount;
let personalBest;

function start() {
    loadMapSize();
    loadOptions();
    if (BEST_KNOWN_SCORES[`level${mapSize}`] == null) {
        document.getElementById("loadglobalbest").disabled = true;
    } else {
        document.getElementById("loadglobalbest").disabled = false;
    }
    loadGameState();

    mapSize = Number(document.getElementById("mapsize").value);
	let canvas = document.getElementById("canvas")
	canvas.onmousedown = onMouseDown;
    loadTileSize();
	rInit(canvas, mapSize*rrTileSize, mapSize*rrTileSize);
	rrInit(rrTileSize);
    calcPath();
    updatePersonalBest();
    drawAll();
}

function increaseSize() {
	setTileSize(rrTileSize + 1);
}

function decreaseSize() {
	if (rrTileSize > 1) {
		setTileSize(rrTileSize - 1);
	}
}

function loadPersonalBest() {
    loadGameState(true);
    calcPath();
    drawAll();
}

function loadGlobalBest() {
    if (personalBest < BEST_KNOWN_SCORES[`level${mapSize}`].score) {
        response = confirm("Are you sure you want to see the solution? It may be more fun finding it yourself.")
        if (response) {
            currentMap = BEST_KNOWN_SCORES[`level${mapSize}`].map.currentMap;
            calcPath();
            drawAll();
        }
    } else if (personalBest == BEST_KNOWN_SCORES[`level${mapSize}`].score) {
        currentMap = BEST_KNOWN_SCORES[`level${mapSize}`].map.currentMap;
        calcPath();
        drawAll();
        console.log(currentMap);
    } else {
        loadPersonalBest();
    }
}

function importGameState() {
    navigator.clipboard.readText()
        .then((clipText) => {
            try {
                let gameState = JSON.parse(clipText)
                currentMap = gameState.currentMap;
                document.getElementById("mapsize").value = Math.sqrt(Number(currentMap.length));
                let oldMapSize = mapSize;
                saveGameState();
                mapSize = Number(document.getElementById("mapsize").value);
                if (BEST_KNOWN_SCORES[`level${mapSize}`] == null) {
                    document.getElementById("loadglobalbest").disabled = true;
                } else {
                    document.getElementById("loadglobalbest").disabled = false;
                }
                saveMapSize();
                calcPath();
                setTileSize(Math.round(rrTileSize*oldMapSize/mapSize));
                rResizeCanvas(rrTileSize*mapSize, rrTileSize*mapSize);
                drawAll();
            } catch (error) {
                alert("Failed to parse clipboard data.");
            }
        })
}

function exportGameState() {
    const stateString = JSON.stringify({currentMap: currentMap, personalBest: personalBest});
    navigator.clipboard.writeText(stateString)
        .then(() => {
            alert("Obstacles map copied to clipboard!");
        })
        .catch((err) => {
            console.error("Failed to copy game state: ", err);
        });
}

function clearMap() {
    currentMap = new Array(mapSize*mapSize).fill(0);
    calcPath();
    drawAll();
}

function setTileSize(size) {
	rResizeCanvas(size*mapSize, size*mapSize);
	rrSetTileSize(size);
    saveTileSize();
	drawAll();
}

function onMouseDown(e) {
	let canvasRect = rCanvas.getBoundingClientRect();
	let xDistance = Math.min((e.clientX - canvasRect.left) % rrTileSize, rrTileSize - (e.clientX - canvasRect.left) % rrTileSize);
	let yDistance = Math.min((canvasRect.bottom - 1 - e.clientY) % rrTileSize, rrTileSize - (canvasRect.bottom - 1 - e.clientY) % rrTileSize);
	let xCoord = (e.clientX - canvasRect.left) / rrTileSize;
    let yCoord = (canvasRect.bottom - 1 - e.clientY) / rrTileSize;
    if (document.getElementById("symmetricplacement").checked) {
        placeBlocking(xDistance, yDistance, xCoord, yCoord, true);
        placeBlocking(yDistance, xDistance, yCoord, xCoord, true);
        if (mapSize % 2 == 1) {
            placeBlocking(yDistance, xDistance, mapSize - yCoord, xCoord, true);
            placeBlocking(xDistance, yDistance, xCoord, mapSize - yCoord, true);
            placeBlocking(xDistance, yDistance, mapSize - xCoord, mapSize - yCoord, true);
            placeBlocking(yDistance, xDistance, mapSize - yCoord, mapSize - xCoord, true);
            placeBlocking(yDistance, xDistance, yCoord, mapSize - xCoord, true);
            placeBlocking(xDistance, yDistance, mapSize - xCoord, yCoord, true);
        }
    } else {
        placeBlocking(xDistance, yDistance, xCoord, yCoord);
    }
    saveGameState();
    calcPath();
    updatePersonalBest();
    drawAll();
}

function placeBlocking(xDistance, yDistance, xCoord, yCoord, extra=false) {
    if (xDistance*xDistance + yDistance*yDistance < 0.25*rrTileSize*0.25*rrTileSize) {
        // Corner
        let xCoordC = Math.round(xCoord);
        let yCoordC = Math.round(yCoord);
        if (extra) {
            if (xCoordC == yCoordC && xDistance < yDistance) {
                return;
            }
            if (mapSize % 2 == 1) {
                if (yCoordC == mapSize - xCoordC && xDistance < yDistance) {
                    return;
                }/*
                if (xCoordC == Math.trunc(mapSize/2) && yCoordC < Math.trunc(mapSize/2)) {
                    return;
                }
                if (yCoordC == Math.trunc(mapSize/2) && xCoordC < Math.trunc(mapSize/2)) {
                    return;
                }*/
            }
        }
        if (xCoordC < mapSize && yCoordC < mapSize) {
            // Toggle NE tile's corner blocking
            currentMap[xCoordC + mapSize * yCoordC] ^= MOVE_SOUTH_WEST_MASK;
        }
        if (xCoordC < mapSize && yCoordC > 0) {
            // Toggle SE tile's corner blocking
            currentMap[xCoordC + mapSize * (yCoordC - 1)] ^= MOVE_NORTH_WEST_MASK;
        }
        if (xCoordC > 0 && yCoordC > 0) {
            // Toggle SW tile's corner blocking
            currentMap[(xCoordC - 1) + mapSize * (yCoordC - 1)] ^= MOVE_NORTH_EAST_MASK;
        }
        if (xCoordC > 0 && yCoordC < mapSize) {
            // Toggle NW tile's corner blocking
            currentMap[(xCoordC - 1) + mapSize * yCoordC] ^= MOVE_SOUTH_EAST_MASK;
        }
    } else if (document.getElementById("cantogglefullblocking").checked && xDistance > 0.3*rrTileSize && yDistance > 0.3*rrTileSize) {
        // Full blocking
        let xCoordF = Math.trunc(xCoord);
        let yCoordF = Math.trunc(yCoord);
        if (extra) {
            if (xCoordF == yCoordF && xDistance < yDistance) {
                return;
            }
            if (mapSize % 2 == 1) {
                if (yCoordF == mapSize - xCoordF - 1 && xDistance < yDistance) {
                    return;
                }
                if (xCoordF == Math.trunc(mapSize/2) && xCoord < Math.trunc(mapSize/2) + 0.5) {
                    return;
                }
                if (yCoordF == Math.trunc(mapSize/2) && yCoord < Math.trunc(mapSize/2) + 0.5) {
                    return;
                }
                if (xCoordF == Math.trunc(mapSize/2) && yCoordF == Math.trunc(mapSize/2) && xCoord > yCoord) {
                    return;
                }
            }
        }
        currentMap[xCoordF + mapSize * yCoordF] ^= MOVE_FULL_MASK;
    } else if (xDistance < yDistance) {
        // Vertical edge
        let xCoordE = Math.round(xCoord);
        let yCoordE = Math.trunc(yCoord);
        if (extra) {
            if (mapSize % 2 == 1) {
                if (yCoordE == Math.trunc(mapSize/2) && yCoord <= Math.trunc(mapSize/2) + 0.5) {
                    return;
                }
            }
        }
        if (xCoordE < mapSize) {
            // Toggle E tile's wall blocking
            currentMap[xCoordE + mapSize * yCoordE] ^= MOVE_WEST_MASK;
        }
        if (xCoordE > 0) {
            // Toggle W tile's wall blocking
            currentMap[(xCoordE - 1) + mapSize * yCoordE] ^= MOVE_EAST_MASK;
        }
    } else {
        // Horizontal edge
        let xCoordE = Math.trunc(xCoord);
        let yCoordE = Math.round(yCoord);
        if (extra) {
            if (mapSize % 2 == 1) {
                if (xCoordE == Math.trunc(mapSize/2) && xCoord <= Math.trunc(mapSize/2) + 0.5) {
                    return;
                }
            }
        }
        if (yCoordE < mapSize) {
            // Toggle N tile's wall blocking
            currentMap[xCoordE + mapSize * yCoordE] ^= MOVE_SOUTH_MASK;
        }
        if (yCoordE > 0) {
            // Toggle S tile's wall blocking
            currentMap[xCoordE + mapSize * (yCoordE - 1)] ^= MOVE_NORTH_MASK;
        }
    }
}

function updatePersonalBest() {
    if (mostCommonDistanceCount > personalBest || (mostCommonDistanceCount == personalBest && document.getElementById("overwritepersonalbestscoreontie").checked)) {
        personalBest = mostCommonDistanceCount;
        saveGameState(true);
    }
}

function getTileFlag(x, y) {
	return currentMap[x + y * mapSize];
}

function onMapSizeChanged() {
    let oldMapSize = mapSize;
    saveGameState();
    mapSize = Number(document.getElementById("mapsize").value);
    if (mapSize == 0) {
        document.getElementById("mapsize").value = 1;
        mapSize = 1;
    }
    if (mapSize > 128) {
        document.getElementById("mapsize").value = 128;
        mapSize = 128;
    }
    if (BEST_KNOWN_SCORES[`level${mapSize}`] == null) {
        document.getElementById("loadglobalbest").disabled = true;
    } else {
        document.getElementById("loadglobalbest").disabled = false;
    }
    saveMapSize();
    loadGameState();
    calcPath();
    updatePersonalBest();
    setTileSize(Math.round(rrTileSize*oldMapSize/mapSize));
    rResizeCanvas(rrTileSize*mapSize, rrTileSize*mapSize);
    drawAll();
}

function saveGameState(isPB = false) {
    if (isPB) {
        localStorage.setItem("gameState_PB_" + mapSize, JSON.stringify({currentMap: currentMap, personalBest: personalBest}));
    } else {
        localStorage.setItem("gameState_" + mapSize, JSON.stringify({currentMap: currentMap, personalBest: personalBest}));
    }
}

function loadGameState(isPB = false) {
    let savedState;
    if (isPB) {
        savedState = localStorage.getItem("gameState_PB_" + mapSize);
    } else {
        savedState = localStorage.getItem("gameState_" + mapSize);
    }
    if (savedState != null) {
        savedState = JSON.parse(savedState);
        currentMap = savedState.currentMap;
        personalBest = savedState.personalBest;
    } else {
        currentMap = new Array(mapSize*mapSize).fill(0);
        personalBest = 0;
    }
}

function saveMapSize() {
    localStorage.setItem("mapSize", mapSize);
}

function loadMapSize() {
    mapSize = Number(localStorage.getItem("mapSize")) ?? 7;
    if (mapSize == 0) {
        mapSize = 7;
    }
    document.getElementById("mapsize").value = mapSize;
}

function saveOptions() {
    let options = {
        symmetricplacement: document.getElementById("symmetricplacement").checked,
        cantogglefullblocking: document.getElementById("cantogglefullblocking").checked,
        overwritepersonalbestscoreontie: document.getElementById("overwritepersonalbestscoreontie").checked,
        displaymostcommontilesgreen: document.getElementById("displaymostcommontilesgreen").checked,
        displaypathcolorgradient: document.getElementById("displaypathcolorgradient").checked,
        displayshortestpathsgraph: document.getElementById("displayshortestpathsgraph").checked
    };
    localStorage.setItem("options", JSON.stringify(options));
}

function loadOptions() {
    let options = JSON.parse(localStorage.getItem("options"));
    if (options == null) {
        options = {
            symmetricplacement: false,
            cantogglefullblocking: false,
            overwritepersonalbestscoreontie: false,
            displaymostcommontilesgreen: true,
            displaypathcolorgradient: true,
            displayshortestpathsgraph: true
        };
    }
    document.getElementById("symmetricplacement").checked = options["symmetricplacement"] ?? true;
    document.getElementById("cantogglefullblocking").checked = options["cantogglefullblocking"] ?? false;
    document.getElementById("overwritepersonalbestscoreontie").checked = options["overwritepersonalbestscoreontie"] ?? false;
    document.getElementById("displaymostcommontilesgreen").checked = options["displaymostcommontilesgreen"] ?? true;
    document.getElementById("displaypathcolorgradient").checked = options["displaypathcolorgradient"] ?? true;
    document.getElementById("displayshortestpathsgraph").checked = options["displayshortestpathsgraph"] ?? true;
}

function saveTileSize() {
    localStorage.setItem("rrTileSize", rrTileSize);
}

function loadTileSize() {
    rrTileSize = Number(localStorage.getItem("rrTileSize")) ?? 50;
    if (rrTileSize == 0) {
        rrTileSize = 50;
    }
}

function calcPath() {
    // Initialise distances
    distances = new Array(mapSize);
    directions = new Array(mapSize);
    for (let i = 0; i < distances.length; i++) {
        distances[i] = new Array(mapSize).fill(2147483647);
        directions[i] = new Array(mapSize).fill(0);
    }

    distances[Math.trunc(mapSize / 2)][Math.trunc(mapSize / 2)] = 0;
    directions[Math.trunc(mapSize / 2)][Math.trunc(mapSize / 2)] = 99;
    let index1 = 0;
    let bufferX = new Array(mapSize);
    bufferX[0] = Math.trunc(mapSize / 2);
    let index2 = 1;
    let bufferY = new Array(mapSize);
    bufferY[0] = Math.trunc(mapSize / 2);

    let currentDistanceCount = 0;
    let lastDistance = 0;
    mostCommonDistance = 0;
    mostCommonDistanceCount = 0;

    while (index1 != index2) {
        let currentX = bufferX[index1];
        let currentY = bufferY[index1];
        index1 = index1 + 1 & (BUFFERSIZE - 1);
        let currentDistance = distances[currentX][currentY] + 1;
        if (lastDistance == distances[currentX][currentY]) {
            currentDistanceCount++;
            if (currentDistanceCount > mostCommonDistanceCount) {
                mostCommonDistanceCount = currentDistanceCount;
                mostCommonDistance = lastDistance;
            }
        } else {
            currentDistanceCount = 1;
        }
        lastDistance = distances[currentX][currentY];
        maxDistance = currentDistance - 1;        
        if (currentX > 0 && distances[currentX - 1][currentY] == 2147483647 && (getTileFlag(currentX - 1, currentY) & 0b1001001000000000100001000) == 0) {
            // Able to move 1 tile west
            bufferX[index2] = currentX - 1;
            bufferY[index2] = currentY;
            index2 = index2 + 1 & (BUFFERSIZE-1);
            distances[currentX - 1][currentY] = currentDistance;
            directions[currentX - 1][currentY] = 2;
        }

        if (currentX < mapSize-1 && distances[currentX + 1][currentY] == 2147483647 && (getTileFlag(currentX + 1, currentY) & 0b1001001000000000110000000) == 0) {
            // Able to move 1 tile east
            bufferX[index2] = currentX + 1;
            bufferY[index2] = currentY;
            index2 = index2 + 1 & (BUFFERSIZE-1);
            distances[currentX + 1][currentY] = currentDistance;
            directions[currentX + 1][currentY] = 8;
        }

        if (currentY > 0 && distances[currentX][currentY - 1] == 2147483647 && (getTileFlag(currentX, currentY - 1) & 0b1001001000000000100000010) == 0) {
            // Able to move 1 tile south
            bufferX[index2] = currentX;
            bufferY[index2] = currentY - 1;
            index2 = index2 + 1 & (BUFFERSIZE-1);
            distances[currentX][currentY - 1] = currentDistance;
            directions[currentX][currentY - 1] = 1;
        }

        if (currentY < mapSize-1 && distances[currentX][currentY + 1] == 2147483647 && (getTileFlag(currentX, currentY + 1) & 0b1001001000000000100100000) == 0) {
            // Able to move 1 tile north
            bufferX[index2] = currentX;
            bufferY[index2] = currentY + 1;
            index2 = index2 + 1 & (BUFFERSIZE-1);
            distances[currentX][currentY + 1] = currentDistance;
            directions[currentX][currentY + 1] = 4;
        }

        if (currentX > 0 && currentY > 0 && distances[currentX - 1][currentY - 1] == 2147483647 && (getTileFlag(currentX - 1, currentY - 1) & 0b1001001000000000100001110) == 0 && (getTileFlag(currentX - 1, currentY) & 0b1001001000000000100001000) == 0 && (getTileFlag(currentX, currentY - 1) & 0b1001001000000000100000010) == 0) {
            // Able to move 1 tile south-west
            bufferX[index2] = currentX - 1;
            bufferY[index2] = currentY - 1;
            index2 = index2 + 1 & (BUFFERSIZE-1);
            distances[currentX - 1][currentY - 1] = currentDistance;
            directions[currentX - 1][currentY - 1] = 3;
        }

        if (currentX < mapSize-1 && currentY > 0 && distances[currentX + 1][currentY - 1] == 2147483647 && (getTileFlag(currentX + 1, currentY - 1) & 0b1001001000000000110000011) == 0 && (getTileFlag(currentX + 1, currentY) & 0b1001001000000000110000000) == 0 && (getTileFlag(currentX, currentY - 1) & 0b1001001000000000100000010) == 0) {
            // Able to move 1 tile south-east
            bufferX[index2] = currentX + 1;
            bufferY[index2] = currentY - 1;
            index2 = index2 + 1 & (BUFFERSIZE-1);
            distances[currentX + 1][currentY - 1] = currentDistance;
            directions[currentX + 1][currentY - 1] = 9;
        }

        if (currentX > 0 && currentY < mapSize-1 && distances[currentX - 1][currentY + 1] == 2147483647 && (getTileFlag(currentX - 1, currentY + 1) & 0b1001001000000000100111000) == 0 && (getTileFlag(currentX - 1, currentY) & 0b1001001000000000100001000) == 0 && (getTileFlag(currentX, currentY + 1) & 0b1001001000000000100100000) == 0) {
            // Able to move 1 tile north-west
            bufferX[index2] = currentX - 1;
            bufferY[index2] = currentY + 1;
            index2 = index2 + 1 & (BUFFERSIZE-1);
            distances[currentX - 1][currentY + 1] = currentDistance;
            directions[currentX - 1][currentY + 1] = 6;
        }

        if (currentX < mapSize-1 && currentY < mapSize-1 && distances[currentX + 1][currentY + 1] == 2147483647 && (getTileFlag(currentX + 1, currentY + 1) & 0b1001001000000000111100000) == 0 && (getTileFlag(currentX + 1, currentY) & 0b1001001000000000110000000) == 0 && (getTileFlag(currentX, currentY + 1) & 0b1001001000000000100100000) == 0) {
            // Able to move 1 tile north-east
            bufferX[index2] = currentX + 1;
            bufferY[index2] = currentY + 1;
            index2 = index2 + 1 & (BUFFERSIZE-1);
            distances[currentX + 1][currentY + 1] = currentDistance;
            directions[currentX + 1][currentY + 1] = 12;
        }
    }
}

function drawAll() {
    rSetDrawColor(127, 127, 127, 255);
    rClear();
    drawPathGradient();
    if (document.getElementById("displayshortestpathsgraph").checked) {
        drawPath();
    }
    drawMap();
    drawGrid();
    rPresent();
    document.getElementById("currentscore").innerHTML = `Current score: ${mostCommonDistanceCount} - ${(mostCommonDistanceCount/mapSize/mapSize*100).toFixed(2)}%`;
    document.getElementById("personalbestscore").innerHTML = `Personal best score: ${personalBest} - ${(personalBest/mapSize/mapSize*100).toFixed(2)}%`; "Personal best score: " + personalBest;
    let globalBest = BEST_KNOWN_SCORES[`level${mapSize}`];
    if (globalBest == null) {
        document.getElementById("globalbestscore").innerHTML = "Global best score: None yet.<br>If you think you did well, feel free to send your obstacles map to the game creator to get your score displayed here for everyone.";
    } else {
        if (globalBest.score >= personalBest) {
            document.getElementById("globalbestscore").innerHTML = `Global best score: ${globalBest.score} - ${(globalBest.score/mapSize/mapSize*100).toFixed(2)}% (first obtained by ${globalBest.name})`;
        } else {
            document.getElementById("globalbestscore").innerHTML = `Global best score: ${personalBest} - ${(personalBest/mapSize/mapSize*100).toFixed(2)}% (first obtained by YOU!)<br>Send your savefile to the game creator to get your score displayed here for everyone.`
        }
    }
}

function drawPathGradient() {
    for (let x = 0; x < mapSize; x++) {
        for (let y = 0; y < mapSize; y++) {
            let distance = distances[x][y];
            if (distance == 2147483647) {
                continue;
            }
            if (distance == mostCommonDistance && document.getElementById("displaymostcommontilesgreen").checked) {
                rSetDrawColor(0, 255, 0, 191);
                rrFill(x, y);
            } else if (document.getElementById("displaypathcolorgradient").checked) {
                rSetDrawColor(255, Math.trunc(255 * distance / maxDistance), 0, 191);
                rrFill(x, y);
            }
        }
    }
}

function drawPath() {
    rSetDrawColor(0, 0, 255, 127)
    rDrawPixel(rXYToI(Math.trunc(mapSize/2) * rrTileSize + Math.trunc((rrTileSize + 1)/2) - 1, Math.trunc(mapSize/2) * rrTileSize + Math.trunc((rrTileSize + 1)/2) - 1));
    for (let x = 0; x < mapSize; x++) {
        for (let y = 0; y < mapSize; y++) {
            let direction = directions[x][y];
            switch (direction) {
                case 1: // Came from north
                    rrNorthwardsLine(x, y);
                    break;
                case 2: // Came from east
                    rrEastwardsLine(x, y);
                    break;
                case 3: // Came from north-east
                    rrNortheastwardsLine(x, y);
                    break;
                case 4: // Came from south
                    rrSouthwardsLine(x, y);
                    break;
                case 6: // Came from south-east
                    rrSoutheastwardsLine(x, y);
                    break;
                case 8: // Came from west
                    rrWestwardsLine(x, y);
                    break;
                case 9: // Came from north-west
                    rrNorthwestwardsLine(x, y);
                    break;
                case 12: // Came from south-west
                    rrSouthwestwardsLine(x, y);
                    break;
                default:
                    break;
            }
        }
    }
}

function drawMap() {
    rSetDrawColor(0, 0, 0, 255);
	for (let y = 0; y < mapSize; ++y) {	
		for (let x = 0; x < mapSize; ++x) {
			let tileFlag = getTileFlag(x, y);
            if ((tileFlag & MOVE_EAST_MASK) !== 0) {
                rrEastLine(x, y);
            }
            if ((tileFlag & MOVE_WEST_MASK) !== 0) {
                rrWestLine(x, y);
            }
            if ((tileFlag & MOVE_NORTH_MASK) !== 0) {
                rrNorthLine(x, y);
            }
            if ((tileFlag & MOVE_SOUTH_MASK) !== 0) {
                rrSouthLine(x, y);
            }
            if ((tileFlag & MOVE_NORTH_WEST_MASK) !== 0) {
                rrNWCircleSector(x, y)
            }
            if ((tileFlag & MOVE_NORTH_EAST_MASK) !== 0) {
                rrNECircleSector(x, y)
            }
            if ((tileFlag & MOVE_SOUTH_WEST_MASK) !== 0) {
                rrSWCircleSector(x, y)
            }
            if ((tileFlag & MOVE_SOUTH_EAST_MASK) !== 0) {
                rrSECircleSector(x, y)
            }
            if ((tileFlag & MOVE_FULL_MASK) !== 0) {
                rrFill(x, y)
            }
		}
	}
}

function drawGrid() {
	for (let xTile = 0; xTile < mapSize; ++xTile) {
		rSetDrawColor(0, 0, 0, 48);
		rrEastLineBig(xTile, 0, mapSize);
	}
	for (let yTile = 0; yTile < mapSize; ++yTile) {
		rSetDrawColor(0, 0, 0, 48);
		rrNorthLineBig(0, yTile, mapSize);
	}
}

//{ RsRenderer - rr
function rrInit(tileSize) {
	rrTileSize = tileSize;
}
function rrSetTileSize(size) {
	rrTileSize = size;
}
function rrSetSize(widthTiles, heightTiles) {
	rrWidthTiles = widthTiles;
	rrHeightTiles = heightTiles;
	rResizeCanvas(rrTileSize*rrWidthTiles, rrTileSize*rrHeightTiles);
}
function rrFillOpaque(x, y) {
	rSetFilledRect(x*rrTileSize, y*rrTileSize, rrTileSize, rrTileSize);
}
function rrFill(x, y) {
	rDrawFilledRect(x*rrTileSize, y*rrTileSize, rrTileSize, rrTileSize);
}
function rrFillBig(x, y, width, height) {
	rDrawFilledRect(x*rrTileSize, y*rrTileSize, width*rrTileSize, height*rrTileSize);
}
function rrOutline(x, y) {
	rDrawOutlinedRect(x*rrTileSize, y*rrTileSize, rrTileSize, rrTileSize);
}
function rrOutlineBig(x, y, width, height) {
	rDrawOutlinedRect(x*rrTileSize, y*rrTileSize, rrTileSize*width, rrTileSize*height);
}
function rrWestLine(x, y) {
	rDrawVerticalLine(x*rrTileSize, y*rrTileSize, rrTileSize);
}
function rrWestLineBig(x, y, length) {
	rDrawHorizontalLine(x*rrTileSize, y*rrTileSize, rrTileSize*length)
}
function rrEastLine(x, y) {
	rDrawVerticalLine((x + 1)*rrTileSize - 1, y*rrTileSize, rrTileSize);
}
function rrEastLineBig(x, y, length) {
	rDrawVerticalLine((x + 1)*rrTileSize - 1, y*rrTileSize, rrTileSize*length);
}
function rrSouthLine(x, y) {
	rDrawHorizontalLine(x*rrTileSize, y*rrTileSize, rrTileSize);
}
function rrNorthwardsLine(x, y) {
    rDrawVerticalLine(Math.round((x + 0.5) * rrTileSize) - 1, Math.round((y + 0.5) * rrTileSize) - 1, rrTileSize)
}
function rrEastwardsLine(x, y) {
    rDrawHorizontalLine(Math.round((x + 0.5) * rrTileSize) - 1, Math.round((y + 0.5) * rrTileSize) - 1, rrTileSize)
}
function rrNortheastwardsLine(x, y) {
    rDrawAntidiagonalLine(Math.round((x + 0.5) * rrTileSize) - 1, Math.round((y + 0.5) * rrTileSize) - 1, rrTileSize)
}
function rrSouthwardsLine(x, y) {
    rDrawVerticalLine(Math.round((x + 0.5) * rrTileSize) - 1, Math.round((y - 0.5) * rrTileSize), rrTileSize)
}
function rrSoutheastwardsLine(x, y) {
    rDrawDiagonalLine(Math.round((x + 0.5) * rrTileSize) - 1, Math.round((y + 0.5) * rrTileSize) - 1, rrTileSize)
}
function rrWestwardsLine(x, y) {
    rDrawHorizontalLine(Math.round((x - 0.5) * rrTileSize), Math.round((y + 0.5) * rrTileSize) - 1, rrTileSize)
}
function rrNorthwestwardsLine(x, y) {
    rDrawDiagonalLine(Math.round((x - 0.5) * rrTileSize), Math.round((y + 1.5) * rrTileSize) - 2, rrTileSize)
}
function rrSouthwestwardsLine(x, y) {
    rDrawAntidiagonalLine(Math.round((x - 0.5) * rrTileSize), Math.round((y - 0.5) * rrTileSize), rrTileSize)
}
function rrSWCircleSector(x, y) {
    rDrawCircleSector(x*rrTileSize, y*rrTileSize, 1, 3)
}
function rrSECircleSector(x, y) {
    rDrawCircleSector(x*rrTileSize, y*rrTileSize, 2, 3)
}
function rrNECircleSector(x, y) {
    rDrawCircleSector(x*rrTileSize, y*rrTileSize, 3, 3)
}
function rrNWCircleSector(x, y) {
    rDrawCircleSector(x*rrTileSize, y*rrTileSize, 4, 3)
}
function rrSouthLineBig(x, y, length) {
	rDrawHorizontalLine(x*rrTileSize, y*rrTileSize, rrTileSize*length);
}
function rrNorthLine(x, y) {
	rDrawHorizontalLine(x*rrTileSize, (y + 1)*rrTileSize - 1, rrTileSize);
}
function rrNorthLineBig(x, y, length) {
	rDrawHorizontalLine(x*rrTileSize, (y + 1)*rrTileSize - 1, rrTileSize*length);
}
function rrCone(x, y) {
	rDrawCone(x*rrTileSize, y*rrTileSize, rrTileSize);
}
function rrFillItem(x, y) {
	let padding = rrTileSize >>> 2;
	let size = rrTileSize - 2*padding;
	rDrawFilledRect(x*rrTileSize + padding, y*rrTileSize + padding, size, size);
}
var rrTileSize;

// Renderer - r

const rPIXEL_ALPHA = 255 << 24;
function rInit(canvas, width, height) {
	rCanvas = canvas;
	rContext = canvas.getContext("2d");
	rResizeCanvas(width, height);
	rSetDrawColor(255, 255, 255, 255);
}
function rResizeCanvas(width, height) {
	rCanvas.width = width;
	rCanvas.height = height;
	rCanvasWidth = width;
	rCanvasHeight = height;
	rCanvasYFixOffset = (rCanvasHeight - 1)*rCanvasWidth;
	rImageData = rContext.createImageData(width, height);
	rPixels = new ArrayBuffer(rImageData.data.length);
	rPixels8 = new Uint8ClampedArray(rPixels);
	rPixels32 = new Uint32Array(rPixels);
}
function rSetDrawColor(r, g, b, a) {
	rDrawColorRB = r | (b << 16);
	rDrawColorG = rPIXEL_ALPHA | (g << 8);
	rDrawColor = rDrawColorRB | rDrawColorG;
	rDrawColorA = a + 1;
}
function rClear() {
	let endI = rPixels32.length;
	for (let i = 0; i < endI; ++i) {
		rPixels32[i] = rDrawColor;
	}
}
function rPresent() {
	rImageData.data.set(rPixels8);
	rContext.putImageData(rImageData, 0, 0);
}
function rDrawPixel(i) {
	let color = rPixels32[i];
	let oldRB = color & 0xFF00FF;
	let oldAG = color & 0xFF00FF00;
	let rb = oldRB + (rDrawColorA*(rDrawColorRB - oldRB) >> 8) & 0xFF00FF;
	let g = oldAG + (rDrawColorA*(rDrawColorG - oldAG) >> 8) & 0xFF00FF00;
	rPixels32[i] = rb | g;
}
function rDrawHorizontalLine(x, y, length) {
	let i = rXYToI(x, y)
	let endI = i + length;
	for (; i < endI; ++i) {
		rDrawPixel(i);
	}
}
function rDrawVerticalLine(x, y, length) {
	let i = rXYToI(x, y);
	let endI = i - length*rCanvasWidth;
	for (; i > endI; i -= rCanvasWidth) {
		rDrawPixel(i);
	}
}
function rDrawDiagonalLine(x, y, length) {
    let i = rXYToI(x, y);
	let endI = i + length + length*rCanvasWidth;
	for (; i < endI; i += 1 + rCanvasWidth) {
		rDrawPixel(i);
	}
}
function rDrawAntidiagonalLine(x, y, length) {
    let i = rXYToI(x, y);
	let endI = i + length - length*rCanvasWidth;
	for (; i > endI; i += 1 - rCanvasWidth) {
		rDrawPixel(i);
	}
}
function rDrawCircleSector(x, y, quadrant, radius) {
    let i;
    switch (quadrant) {
        case 1:
            i = rXYToI(x, y);
            break;
        case 2:
            i = rXYToI(x + rrTileSize, y);
            break;
        case 3:
            i = rXYToI(x + rrTileSize, y + rrTileSize);
            break;
        case 4:
            i = rXYToI(x, y + rrTileSize);
            break;
    }
    for (dx = -radius; dx <= radius; dx++) {
        for (dy = -radius; dy <= radius; dy++) {
            if ((quadrant === 1 && (dx < 0 || dy < 0)) ||
                (quadrant === 2 && (dx >= 0 || dy < 0)) ||
                (quadrant === 3 && (dx >= 0 || dy >= 0)) ||
                (quadrant === 4 && (dx < 0 || dy >= 0))) {
            continue;
            }
            if ((dx + 0.5)*(dx + 0.5) + (dy + 0.5)*(dy + 0.5) < radius*radius) {
                rDrawPixel(i + dx - dy * rCanvasWidth);
            }
        }
    }
}
function rSetFilledRect(x, y, width, height) {
	let i = rXYToI(x, y);
	let rowDelta = width + rCanvasWidth;
	let endYI = i - height*rCanvasWidth;
	while (i > endYI) {
		let endXI = i + width;
		for (; i < endXI; ++i) {
			rPixels32[i] = rDrawColor;
		}
		i -= rowDelta;
	}
}
function rDrawFilledRect(x, y, width, height) {
	let i = rXYToI(x, y);
	let rowDelta = width + rCanvasWidth;
	let endYI = i - height*rCanvasWidth;
	while (i > endYI) {
		let endXI = i + width;
		for (; i < endXI; ++i) {
			rDrawPixel(i);
		}
		i -= rowDelta;
	}
}
function rDrawOutlinedRect(x, y, width, height) {
	rDrawHorizontalLine(x, y, width);
	rDrawHorizontalLine(x, y + height - 1, width);
	rDrawVerticalLine(x, y + 1, height - 2);
	rDrawVerticalLine(x + width - 1, y + 1, height - 2);
}
function rXYToI(x, y) {
	return rCanvasYFixOffset + x - y*rCanvasWidth;
}
var rCanvas;
var rCanvasWidth;
var rCanvasHeight;
var rCanvasYFixOffset;
var rContext;
var rImageData;
var rPixels;
var rPixels8;
var rPixels32;
var rDrawColor;
var rDrawColorRB;
var rDrawColorG;
var rDrawColorA;
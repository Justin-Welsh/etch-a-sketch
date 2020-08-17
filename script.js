let root = document.documentElement;
let container = document.querySelector("#container");
let button = document.getElementById("button");


// Fill the board with a grid of squares
function populateBoard(numberOfTiles) {
    let num = getComputedStyle(root).getPropertyValue('--num-boxes');
    for(let i = 0; i < num ** 2; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    }
}

// Add event listeners to each square within the board container
function squareEventListeners() {
    let squareList = document.querySelectorAll(".square");   
    squareList.forEach(square => square.addEventListener('mouseenter', function() {
        this.style.backgroundColor = "#3f3f3f";
    }));    
}

// Clear the board when you press the button
function clearBoard() {
    let squareList = document.querySelectorAll(".square");
    squareList.forEach(square => square.style.backgroundColor = "#fff");
}

// Populate the board, add the event listeners and start the sketch
populateBoard();
squareEventListeners();
button.addEventListener("click", clearBoard);
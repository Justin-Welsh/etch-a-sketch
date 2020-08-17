/*
    Board size is 512px
    Each square needs to be 32px
*/


const board = document.querySelector(".board");

function populateBoard() {
    var i = 0;
    
    
    // create 16 rows within the board div
    while(i < 16) {
        var row = document.createElement("div");
        row.setAttribute("id", "row");
        board.classList.add("row");
        board.appendChild(row);

        i++;
    }
/* 
    for(var j = 0; j < 16; j++) {
        var square = document.createElement("div");
        square.setAttribute("class", "square");
        row.classList.add("square");
        row.appendChild(square);
        } */
    

    


    const rows = document.querySelectorAll("#row");

    
    rows.forEach((row) => {
        for(var j = 0; j < 16; j++) {
            var square = document.createElement("div");
            square.setAttribute("class", "square");
            row.classList.add("square");
            row.appendChild(square);
            }
        
    });
    

    
}

populateBoard();
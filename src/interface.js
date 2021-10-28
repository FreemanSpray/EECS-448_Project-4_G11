let canvas
let context

function drawTemplate() {

    drawBoard();
    drawCards();


}

function drawBoard() {
    // draw board
    canvas = document.getElementById("board");
    ctx = canvas.getContext("2d");
    //loop for drawing grid lines
    for (var i = 0; i <= 1400; i = i + 40) {

        ctx.beginPath();
        //vertical lines
        ctx.moveTo(i, 0);
        ctx.lineTo(i, 1400);

        //horizontal lines
        ctx.moveTo(0, i);
        ctx.lineTo(1400, i);

        ctx.strokeStyle = "black";
        ctx.stroke();
    }
}

function drawCards() {
    //draw cards
    canvas = document.getElementById("cards");
    ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.lineWidth = "3";
    ctx.strokeStyle = "black";

    //loop draws card rectangles but very messily
    for (var i = 80; i <= 704; i = i + 156) {
        ctx.rect(i, 20, 100, 150);
        ctx.stroke();
    }
}


function drawVisibleUnits() {

}

function drawInvisibleUnits() {

}



function drawSelectedInfo() {

}

function highlightTiles_MoveRange() {

}

function highlightTiles_ActionRange() {

}
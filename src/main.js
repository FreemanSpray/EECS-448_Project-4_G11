document.addEventListener("DOMContentLoaded", () => {
    initialize()
});

function initialize(){
    drawTemplate()
    map = new Map()
    player1 = new Player(1)
    player2 = new Player(2)
    drawUnits()
}

//the x values in all rounding functions assume you are playing with the console open and set to the right side of the screen. On offset must be applied to all x values if you are going to play without this setting.
function canvasRounding(x, y){
    let section = 0
    if(x > 134 && x < 1535 && y > 8 && y < 608){
        section = 1
    }
    else if(x > 134 && x < 1035 && y > 626 && y < 827){
        section = 2
    }
    else if(x > 1045 && x < 1535 && y > 626 && y < 827){
        section = 3
    }
    console.log(section)
    return(section)
}

//this needs to return a tile
function tileRounding(x, y){
    roundedXCoordinate = Math.floor((x - 134)/40)
    roundedYCoordinate = Math.floor((y - 8)/40)
    console.log([roundedXCoordinate, roundedYCoordinate])
    return(map.tiles[roundedXCoordinate][roundedYCoordinate])
}

//this needs to return a card
function cardRounding(x, y){

}

//this needs to return an action
function actionRounding(x, y){

}

let canvasSection
let target

function clickProcessing(x, y){
    canvasSection = canvasRounding(x, y)        //check to see which section of the canvas the click has occurred in
    if(canvasSection == 1){
        target = tileRounding(x, y)     //check which tile was clicked
        if(actionSelected == null){       //if there is no action currently selected, select the tile and the unit on the tile
            tileSelected = target
            if(target.unit != null){                //checking if there is a unit on the tile
                unitSelected = target.unit
            }
        }
        else {
            if(action.validTarget(target)){
                executeAction(target)               //if there is an action currently selected, and if the selected tile is valid for that action, execute the action.
            }
        }
    }
    else if(canvasSection == 2){
        target = cardRounding(x, y)
    }
    else {
        target = actionRounding(x, y)
    }
    
}

document.addEventListener("click", e => {
    console.log(e)
    console.log([e.x, e.y])
    clickProcessing(e.x, e.y)
})
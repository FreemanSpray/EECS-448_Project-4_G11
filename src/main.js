document.addEventListener("DOMContentLoaded", () => {
    initialize()
});

function initialize(){
    drawTemplate()
    map = new Map()
    player1 = new Player(1)
    player2 = new Player(2)
}

function canvasRounding(xPos, yPos){
    
}

//this needs to return a tile
function tileRounding(xPos, yPos){

}

//this needs to return a card
function cardRounding(xPos, yPos){

}

//this needs to return an action
function actionRounding(xPos, yPos){

}

let canvasSection
let target

function clickProcessing(x, y){
    canvasSection = canvasRounding(x, y)        //check to see which section of the canvas the click has occurred in
    if(canvasSection == 1){
        target = tileRounding(x, y)
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
    console.log([e.x, e.y])
    clickProcessing(e.x, e.y)
})
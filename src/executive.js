function passTurn(){
    tileSelected = null
    unitSelected = null
    actionSelected = null
    cardSelected = null
    turn = (turn % 2) + 1
}

function executeTileTriggers(tile, flag){
    for(let i = 0; i < tile.triggers.length; i++){
        if(tile.triggers[i].flagID == flag){
            tile.triggers[i].function(tile)
        }
    }
}

function executeUnitTriggers(tile, flag){
    for(let i = 0; i < tile.unit.triggers.length; i++){
        if(tile.unit.triggers[i].flagID == flag){
            tile.unit.triggers[i].function(tile)
        }
    }
}

let flags = []

function executeAction(target){
    action.function(target)                     //carry out the action

    flags = action.Flags
    for(let flag = 0; flag < flags.size; flag++){        
        let flagID = flags[flag].ID                            //defining flagID to be the identifier for the flag we are currently looking at
        let relevantTiles = flags[flag].relevantTiles(target)  //defining relevantTiles to be a 2D array of boolean values that represent all relevant tiles for the flag we are currently looking at
        
        for(let x = 0; x < map.xWidth; x++){
            for(let y = 0; y < map.yHeight; y++){
                if(relevantTiles[x][y] == 1){
                   executeTileTriggers(map.tiles[x][y], flagID)         //executing tile triggers for all relevant tiles
                   if(map.tiles[x][y].unit != null){
                        executeUnitTriggers(map.tiles[x][y], flagID)    //executing unit triggers for all relevant tiles
                   }
                }
            }
        }
    }

    passTurn()
}
class Action{
    constructor(name, range, validTarget, flags, actionFunction){
        this.name = name
        this.range = range
        this.validTarget = validTarget
        this.flags = flags
        this.function = actionFunction
    }
}

class Flag{
    constructor(flagID, relevantTiles){
        this.flagID = flagID
        this.relevantTiles = relevantTiles
    }
}

function baseMove(){    //placeholder for commander movement function

}

function baseAttack(){    //placeholder for commander attack function

}

function range_radialRange(radius){       //pass in the desired radius and the range function for a radial range will be returned
    function range(source){
        const width = map.xWidth, height = map.yHeight;
        const initialVal = false;

        var arr = Array(width);
        for (var x = 0; x < width; x++) {
            arr[x] = Array(height).fill(initialVal);
        }

        const radiusFromCast = radius
        for (let x = -radiusFromCast; x < radiusFromCast; x++) {
            for (let y = -radiusFromCast; y < radiusFromCast; y++) {
                arr[source.xPos + x][source.yPos + y] = true
            }            
        }
        return arr
    }

    return range
}

function validTarget_unoccupied(){      //returns a validTarget function where the conditions are target is in range and does not contain a unit
    function validTarget(source, range, target){
        let valid = false
        let arr = range(source)

        let targetInRange = arr[target.xPos][target.yPos]
        let targetUnoccupied = false
        if (target.unit == null) {
            targetUnoccupied = true
        }

        if (targetInRange && targetUnoccupied) {
            valid = true
        }

        return valid
    }

    return validTarget
}

function validTarget_unit(){      //returns a validTarget function where the conditions are target is in range and contains a unit
    function validTarget(source, range, target){
        let valid = false
        let arr = range(source)

        let targetInRange = arr[target.xPos][target.yPos]
        let targetOccupied = false
        if (target.unit != null) {
            targetOccupied = true
        }

        if (targetInRange && targetOccupied) {
            valid = true
        }

        return valid
    }

    return validTarget
}

/*
function action_template(){
    let name = ""
    
    function range(source){     //source is the tile the card is being cast from
        const width = map.xWidth, height = map.yHeight;
        const initialVal = false;

        var arr = Array(width);
        for (var x = 0; x < width; x++) {
            arr[x] = Array(height).fill(initialVal);
        }

        return arr
    }
    function validTarget(source, range, target){        //range is the range function (above), target is the target tile

    }
    let flags = []
    let flagID1 = ""
    function relevantTiles1(target){
        const width = map.xWidth, height = map.yHeight;
        const initialVal = false;

        var arr = Array(width);
        for (var x = 0; x < width; x++) {
            arr[x] = Array(height).fill(initialVal);
        }

        return arr
    }
    flags[0] = new Flag(flagID1, relevantTiles1)
    function actionFunction(source, target){

    }

    let action = new Action(name, range, validTarget, flags, actionFunction)
    return action
}
*/

function action_summonGuardTower(){
    let name = "Summon Guard Tower"
    
    let range = range_radialRange(3)
    let validTarget = validTarget_unoccupied()

    let flags = []
    let flagID1 = "UNIT_ETB"
    function relevantTiles1(target){
        const width = map.xWidth, height = map.yHeight;
        const initialVal = false;

        var arr = Array(width);
        for (var x = 0; x < width; x++) {
            arr[x] = Array(height).fill(initialVal);
        }

        arr[target.xPos][target.yPos] = true //relevant tiles is just the target tile

        return arr
    }
    flags[0] = new Flag(flagID1, relevantTiles1)
    
    function actionFunction(source, target, playerID){
        let Guard_Tower = unit_guardTower(playerID)
        target.unit = Guard_Tower;      //sets target tile's unit to a guardTower

        let defended = trigger_defended()
        let defendedRadius = 2
        for (let x = -defendedRadius; x < defendedRadius; x++) {
            for (let y = -defendedRadius; y < defendedRadius; y++) {
                map.tiles[target.xPos + x][target.yPos + y].triggers.push(defended)     //when GT is summoned, all tiles within radius 2 gain "defended" trigger   
            }
        }

        guardTowerDestroyed = trigger_guardTowerDestroyed()
        map.tiles[target.xPos][target.yPos].triggers.push(guardTowerDestroyed)  //adds a trigger to the tile it's summoned on for when the guard tower is destroyed
    }

    let action = new Action(name, range, validTarget, flags, actionFunction)
    return action
}

function action_summonKnight(){
    let name = "Summon Knight"
    
    let range = range_radialRange(5)
    let validTarget = validTarget_unoccupied()
    
    let flags = []
    let flagID1 = "UNIT_ETB"
    function relevantTiles1(target){
        const width = map.xWidth, height = map.yHeight;
        const initialVal = false;

        var arr = Array(width);
        for (var x = 0; x < width; x++) {
            arr[x] = Array(height).fill(initialVal);
        }

        arr[target.xPos][target.yPos] = true
        
        return arr
    }
    flags[0] = new Flag(flagID1, relevantTiles1)
    function actionFunction(source, target){
        let unit = unit_knight()
        map.tiles[target.xPos][target.yPos].unit = unit
    }

    let action = new Action(name, range, validTarget, flags, actionFunction)
    return action
}

function action_knightMove(){
    let name = "Move"
    
    let range = range_radialRange(3)
    let validTarget = validTarget_unoccupied()
    let flags = []
    let flagID1 = "UNIT_MOVETOTILE"
    function relevantTiles1(target){
        const width = map.xWidth, height = map.yHeight;
        const initialVal = false;

        var arr = Array(width);
        for (var x = 0; x < width; x++) {
            arr[x] = Array(height).fill(initialVal);
        }

        arr[target.xPos][target.yPos] = true

        return arr
    }
    flags[0] = new Flag(flagID1, relevantTiles1)
    function actionFunction(source, target){
        target.unit = source.unit
        source.unit = null
    }

    let action = new Action(name, range, validTarget, flags, actionFunction)
    return action
}

function action_knightCharge(){
    let name = "Charge"
    
    function range(source){
        const width = map.xWidth, height = map.yHeight;
        const initialVal = false;

        var arr = Array(width);
        for (var x = 0; x < width; x++) {
            arr[x] = Array(height).fill(initialVal);
        }

        let chargeRange = 7
        for (let x = -chargeRange; x < chargeRange; x++) {
            arr[source.xPos + x][source.yPos] = true        //directly horizontal tiles within chargeRange are in range
        }
        for (let y = -chargeRange; y < chargeRange; y++) {
            arr[source.xPos][source.yPos + y] = true        //directly vertical tiles within chargeRange are in range
        }


        return arr
    }
    
    let validTarget = validTarget_unit()

    let flags = []
    let flagID1 = "UNIT_DESTROYED"
    function relevantTiles1(target){
        const width = map.xWidth, height = map.yHeight;
        const initialVal = false;

        var arr = Array(width);
        for (var x = 0; x < width; x++) {
            arr[x] = Array(height).fill(initialVal);
        }

        arr[target.xPos][target.yPos] = true

        return arr
    }
    flags[0] = new Flag(flagID1, relevantTiles1)
    let flagID2 = "UNIT_MOVETOTILE"
    function relevantTiles2(target){
        const width = map.xWidth, height = map.yHeight;
        const initialVal = false;

        var arr = Array(width);
        for (var x = 0; x < width; x++) {
            arr[x] = Array(height).fill(initialVal);
        }

        arr[target.xPos][target.yPos] = true

        return arr
    }
    flags[1] = new Flag(flagID2, relevantTiles2)

    function actionFunction(source, target){
        target.unit = source.unit
        source.unit = null
    }

    let action = new Action(name, range, validTarget, flags, actionFunction)
    return action
}
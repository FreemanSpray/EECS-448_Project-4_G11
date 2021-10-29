class Trigger{
    constructor(flagID, triggeredFunction){
        this.flagID = flagID
        this.function = triggeredFunction
    }
}

/*
function trigger_template(){
    let flagID = ""

    function triggeredFunction(target){

    }

    let trigger = new Trigger(flagID, triggeredFunction)
    return trigger
}
*/

function trigger_defended(){
    let flagID = "UNIT_MOVETOTILE"

    function triggeredFunction(target){
        target.unit = null
    }

    let trigger = new Trigger(flagID, triggeredFunction)
    return trigger
}

function trigger_guardTowerDestroyed(){
    let flagID = "UNIT_DESTROYED"       //when a guard tower unit is destroyed

    function triggeredFunction(target){

        let defended = trigger_defended()
        let defendedRadius = 2
        for (let x = -defendedRadius; x < defendedRadius; x++) {        //goes around to all tiles defended by the guard tower
            for (let y = -defendedRadius; y < defendedRadius; y++) {
                index = map.tiles[target.xPos + x][target.yPos + y].triggers.indexOf(defended)
                map.tiles[target.xPos + x][target.yPos + y].triggers.splice(index, 1)       //removes one instance of the "defended" trigger
            }
        }
    }

    let trigger = new Trigger(flagID, triggeredFunction)
    return trigger
}
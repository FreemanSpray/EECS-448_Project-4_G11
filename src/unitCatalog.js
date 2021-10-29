class Unit{
    constructor(symbol, description, actions, triggers){
        this.symbol = symbol
        this.description = description
        this.actions = actions
        this.triggers = triggers
    }
}

/*
function unit_template(){
    description = "Unit description goes here"

    let actions = []

    function range1(target){

    }
    function validTarget1(target){

    }
    function flags1(){

    }
    function action1(target){

    }
    actions[0] = new Action("actionName", range1, validTarget1, flags1, action1)

    function range2(target){

    }
    function validTarget2(target){

    }
    function flags2(){

    }
    function action2(target){

    }
    actions[1] = new Action("actionName", range2, validTarget2, flags2, action2)

    let triggers = []
    let flagID1 = ""
    function trigger1(target){

    }
    triggers[] = new Trigger(flagID1, trigger1)
    let flagID2 = ""
    function trigger2(target){

    }
    triggers[1] = new Trigger(flagID2, trigger2)

    unit = new Unit(symbol, description, actions, triggers)    
    return unit
}
*/

function unit_guardTower(){
    symbol = "GT"
    description = "Defends an area within 2 tiles"

    let actions = []

    let triggers = []

    unit = new Unit(symbol, description, actions, triggers)
    return unit 
}
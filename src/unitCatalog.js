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
    let symbol = ""
    let description = "Unit description goes here"

    let actions = []

    let triggers = []

    let unit = new Unit(symbol, description, actions, triggers)    
    return unit
}
*/

function unit_guardTower(){
    let symbol = "GT"
    let description = "Our enemies , though it won't do them any good"

    let actions = []

    let triggers = []

    let unit = new Unit(symbol, description, actions, triggers)
    return unit 
}

function unit_knight(){
    let symbol = "Kn"
    let description = "There is fire in his eyes, and his steed paws at the dirt readily"

    let actions = []
    actions[0] = action_knightMove()
    actions[1] = action_knightCharge()

    let triggers = []

    let unit = new Unit(symbol, description, actions, triggers)    
    return unit
}
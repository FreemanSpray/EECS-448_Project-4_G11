class Unit {
    constructor(name, owner){
        //These should be set when constructed
        this.name = name
        this.owner = owner
        this.symbol
        this.text
        this.counters = []
        this.abilities = []
        initializeUnit(this)
    }

    /*
    @pre        the unit is on the map
    @return     the tile the unit occupies
    */
    getTile(){
        for (let x = 0; x < map.xWidth; x++) {
            for (let y = 0; y < map.yHeight; y++) {
                if (map.tiles[x][y].unit == this) {
                    return map.tiles[x][y]
                }
            }
        }
    }

    /*
    @pre        the unit has been initialized
    @return     a list of the unit's activated abilities
    */
    getActivatedAbilities(){
        let activatedAbilities = [...this.abilities]

        for (let i = activatedAbilities.length-1; i >= 0; i--) {
            if (activatedAbilities[i].constructor.name == "TriggeredAbility") {
                activatedAbilities.splice(i)
            }
        }
        return activatedAbilities
    }

    /*
    @pre        the unit has been initialized
    @return     a list of the unit's triggered abilities
    */
    getTriggeredAbilities(){
        let triggeredAbilities = [...this.abilities]

        for (let i = triggeredAbilities.length-1; i >= 0; i--) {
            if (triggeredAbilities[i].constructor.name == "ActivatedAbility") {
                triggeredAbilities.splice(i)
            }
        }
        return triggeredAbilities
    }
}


/*
@pre        the unit has been constructed and has a name and owner
@post       the unit is initialized
@param      unit, the unit to initialize
*/
function initializeUnit(unit) {
    let name = unit.name

    if (name == "Template") {
        unit.symbol
        unit.text
        unit.abilities
    }
    
    else if (name == "Commander") {
        unit.symbol = "*"
        unit.text = ``
        unit.abilities = [new ActivatedAbility("Commander: Move", unit), new ActivatedAbility("Commander: Attack", unit), new TriggeredAbility("Commander: Death", unit)]
    }

    else if (name == "Knight") {
        unit.symbol = "Kn"
        unit.text = ``
        unit.abilities = [new ActivatedAbility("Knight: Move", unit), new ActivatedAbility("Knight: Charge", unit)]
    }
    
    else if (name == "Guard Tower") {
        unit.symbol = "GT"
        unit.text = ``
        unit.abilities = [new TriggeredAbility("Guard Tower: Watchful Eye", unit)]
    }

    else if (name == "Assassin") {
        unit.symbol = "As"
        unit.text = ``
        unit.abilities = [new ActivatedAbility("Assassin: Move", unit), new ActivatedAbility("Assassin: Assassinate", unit)]
    }

    else if (name == "Firebound Apprentice") {
        unit.symbol = "FA"
        unit.text = ``
        unit.abilities = [new ActivatedAbility("Firebound Apprentice: Move", unit), new ActivatedAbility("Firebound Apprentice: Explosive Entrance", unit), new ActivatedAbility("Firebound Apprentice: Firebolt", unit), new TriggeredAbility("Firebound Apprentice: Burn Bright", unit)]
    }
}
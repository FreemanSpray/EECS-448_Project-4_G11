class Unit {
    constructor(name, owner){
        //These should be set when constructed
        this.name = name
        this.owner = owner
        this.symbol
        this.text
        this.abilities = []
        initializeUnit(this)
    }

    getTile(){
        for (let x = 0; x < map.xWidth; x++) {
            for (let y = 0; y < map.yHeight; y++) {
                if (map.tiles[x][y].unit == this) {
                    return map.tiles[x][y]
                }
            }
        }
    }

    getActivatedAbilities(){
        let activatedAbilities = [...this.abilities]

        for (let i = activatedAbilities.length-1; i >= 0; i--) {
            if (activatedAbilities[i].constructor.name == "TriggeredAbility") {
                activatedAbilities.splice(i)
            }
        }
        return activatedAbilities
    }

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
        unit.abilities = [new ActivatedAbility("Commander: Move", unit), new ActivatedAbility("Commander: Attack", unit), new ActivatedAbility("Commander: Draw Card", unit), new TriggeredAbility("Commander: Death", unit)]
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
    
}
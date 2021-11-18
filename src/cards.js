class Card{
    constructor(name, owner){
        this.name = name
        this.owner = owner
        this.text
        this.ability
        initializeCard(this)
    }

    getRange(){
        return this.ability.getRange()
    }

    play(targetTile){
        if (this.ability.activate(targetTile)) {
            //remove card from hand
            //pass turn
            return true
        }
        else {
            //log that it didn't work
            return false
        }
    }

}

function initializeCard(card){
    let name = card.name

    if (name == "Template") {
        card.text = ``
        card.ability
    }

    else if (name == "Knight") {
        card.text = `Summon range: 3 tiles

        Move: Knight moves to target unoccupied tile within 3 tiles vertical or horizontal.
    
        Charge: Destroy target unit within 6 tiles vertical or horizontal of Knight. If the unit is destroyed this way, Knight moves to that tile.`
        card.ability = new ActivatedAbility("Knight: Summon", card.owner.commander)
    }
    
    else if (name == "Guard Tower") {
        card.text = `Summon range: 4 tiles

        Watchful Eye: When a unit an opponent controls moves to within 2 tiles of Guard Tower, destroy that unit.`
        card.ability = new ActivatedAbility("Guard Tower: Summon", card.owner.commander)
    }
    
    else if (name == "Fireball") {
        card.text = ``
        card.ability = new ActivatedAbility("Fireball", card.owner.commander)
    }
}
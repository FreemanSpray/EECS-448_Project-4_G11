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
            //this.owner.hand.discard(this)
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
        card.text = `Summon range: 3 tiles\n

        Move: Knight moves\n to target unoccupied\n tile within 3 tiles\n vertical or horizontal.\n
    
        Charge: Destroy target\n unit within 6 tiles\n vertical or horizontal\n of Knight. If the\n unit is destroyed this\n way, Knight moves\n to that tile.`
        card.ability = new ActivatedAbility("Knight: Summon", card.owner.commander)
    }
    
    else if (name == "Guard Tower") {
        card.text = `Summon range: 4 tiles\n
        
        Watchful Eye:\n When a unit an\n opponent controls\n moves to within 2\n tiles of Guard Tower,\n destroy that unit.`
        card.ability = new ActivatedAbility("Guard Tower: Summon", card.owner.commander)
    }
    
    else if (name == "Fireball") {
        card.text = ``
        card.ability = new ActivatedAbility("Fireball", card.owner.commander)
    }

    else if (name == "Assassin") {
        card.text = ``
        card.ability = new ActivatedAbility("Assassin: Summon", card.owner.commander)
    }

    else if (name == "Firebound Apprentice") {
        card.text = ``
        card.ability = new ActivatedAbility("Firebound Apprentice: Summon", card.owner.commander)
    }
}
class TriggeredAbility{
    constructor(name, sourceUnit){
        this.name = name
        this.sourceUnit = sourceUnit
        this.trigger
        this.resolve
        initializeTriggeredAbility(this)

        //These should be set when being put on the stack
        this.sourceTile
        this.targetTile
    }

    trigger(event){
        //Check if the event passed triggers this ability
        //Check if all conditions for ability are met
        //Determine necessary events to add to the stack and in what order
        //Construct the necessary events and add them to the stack in order
    }

    resolve(){

    }
}

function initializeTriggeredAbility(ability){
    let name = ability.name

    if (name == "Template") {
        function trigger(event){
            
        }
        ability.trigger = trigger

        function resolve(){

        }
        ability.resolve = resolve
    }


    else if (name == "Commander: Death") {
        function trigger(event){
            if (event.eventID == "destroy_unit" && event.destroyedUnit == this.sourceUnit) {
                let copy = new TriggeredAbility(this.name, this.sourceUnit)
                copy.sourceTile = this.sourceUnit.getTile()
                copy.targetTile = copy.sourceTile

                stack.pushTrigger(copy)
            }
        }
        ability.trigger = trigger

        function resolve(){
            let event

            event = new lose_game(this, this.sourceUnit)
            event.execute()
        }
        ability.resolve = resolve
    }


    else if (name == "Guard Tower: Watchful Eye") {
        function trigger(event){
            if (event.eventID == "move_unit") {
                let sourceTile = this.sourceUnit.getTile()
                let range = radialRange(sourceTile, 2)

                let unitInRange = range[event.tileTo.xPos][event.tileTo.yPos]
                let unitIsEnemy = event.movedUnit.owner != this.sourceUnit.owner

                if (unitInRange && unitIsEnemy) {
                    let copy = new TriggeredAbility(this.name, this.sourceUnit)
                    copy.sourceTile = sourceTile
                    copy.targetTile = event.tileTo

                    stack.pushTrigger(copy)
                }
            }
        }
        ability.trigger = trigger

        function resolve(){
            let event

            event = new destroy_unit(this, this.targetTile)
            event.execute()
        }
        ability.resolve = resolve
    }
    
    else if (name == "") {
        function trigger(event){

        }
        ability.trigger = trigger

        function resolve(){

        }
        ability.resolve = resolve
    }
}
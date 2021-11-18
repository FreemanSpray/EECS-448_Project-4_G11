class Stack{
    constructor(){
        this.stack = []
        this.tempStack = []
    
    }
    pushAbility(ability){
        this.stack.push(ability)
    }

    pushTrigger(triggeredAbility){
        this.tempStack.push(triggeredAbility)
    }

    resolveTop(){
        //call the resolve function of the ability on top
        let ability = this.stack.pop()
        ability.resolve()
        //if resolving triggered any abilities, they will be ordered in tempStack
        
        //after the ability has resolved and been removed from the top of the stack, push all triggered abilities to the stack
        this.tempStack.forEach(triggeredAbility => {
            this.pushAbility(triggeredAbility)
        });
        //then clear the tempstack
        this.tempStack = []
    }

    isEmpty(){
        if (this.stack.length == 0) {
            return true
        }
        else {
            return false
        }
    }

    clear(){
        this.stack = []
    }
}
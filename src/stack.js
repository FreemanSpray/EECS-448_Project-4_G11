class Stack{
    constructor(){
        this.stack = []
        this.tempStack = []
    
    }

    /*
    @post       ability is pushed to the stack
    @param      ability, a copy of an ability with all necessary information for resolution filled in
    */
    pushAbility(ability){
        this.stack.push(ability)
    }

    /*
    @post       triggered ability is pushed to the temp stack
    @param      triggeredAbility, a copy of a triggered ability with all necessary information for resolution filled in
    */
    pushTrigger(triggeredAbility){
        this.tempStack.push(triggeredAbility)
    }

    /*
    @pre        the stack is not empty
    @post       ability on top of the stack is resolved, then all abilities that were triggered are pushed
    */
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

    /*
    @return     whether or not the stack is empty
    */
    isEmpty(){
        if (this.stack.length == 0) {
            return true
        }
        else {
            return false
        }
    }

    /*
    @post       the stack is cleared
    */
    clear(){
        this.stack = []
    }
}
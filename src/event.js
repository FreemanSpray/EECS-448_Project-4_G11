function baseMove(){

}

function baseAttack(){
    
}


class Action{
    constructor(name, range, flags, behavior){
        this.name = name;
        this.range = range;
        this.flags = flags; 
        this.behavior = behavior;

    }
}

class Trigger{
    constructor(description, flag, behavior){
        this.description = description
        this.flag = flag
        this.behavior = behavior
    }
}
class Card{
    constructor(name, description, action){
     
        this.name = name;
        this.description = description;
        this.action = action;
        

    }
}

class Hand{
    constructor(){
        this.cards;
        /*
        param: x_pos, y_pos
        pre: 
        post: initializes card action 
        
        This function will initiliaze the card and the action related to it. 
        This one is specifically for guard tower. 

        */
        function function1(x_pos, y_pos)
        {
            Guard_Tower = new Unit();   
            Map.tiles[x_pos][y_pos].unit = Guard_Tower;

        }
        action1 = new Action("Summon Guard Tower", 3, null, funtion1() );
        this.cards[0] = new Card("GuardTower", "something", action1)
        
        /*
        param: x_pos, y_pos
        pre: 
        post: initializes card action 
        
        This function will initiliaze the card and the action related to it. 
        This one is specifically for Ethereal Ward. 

        */
        function function5(x_pos, y_pos)
        {
            Ethereal_Ward = new Trigger();
            Map.tiles[x_pos][y_pos].unit.triggers.push(Ethereal_Ward);
        }
        action5 = new Action("Placed Ethereal Ward", 1, null, function5() );
        this.cards[4] = new Card("Ethereal Ward", "something", action5)


        


    }
}

class Deck{
    constructor(cards){
        drawCards()
        {

        }
    }
}

class Action{
    constructor(name, range, flags, function1){
        this.name = name;
        this.range = range;
        this.flags = flags; 
        this.function1 = function1;  

        functions()
        {

        }


    }
}


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
   

        
        /*
        param: x_pos, y_pos
        pre: 
        post: initializes card action 
        
        This function will initiliaze the card and the action related to it. 
        This one is specifically for Knight.

        */
        

        
        /*
        param: x_pos, y_pos
        pre: 
        post: initializes card action 
        
        This function will initiliaze the card and the action related to it. 
        This one is specifically for Assassin. 

        */

        
        /*
        param: x_pos, y_pos
        pre: 
        post: initializes card action 
        
        This function will initiliaze the card and the action related to it. 
        This one is specifically for Wizard. 

        */




        
        /*
        param: x_pos, y_pos
        pre: 
        post: initializes card action 
        
        This function will initiliaze the card and the action related to it. 
        This one is specifically for Ethereal Ward. 

        */

        
        /*
        param: x_pos, y_pos
        pre: 
        post: initializes card action 
        
        This function will initiliaze the card and the action related to it. 
        This one is specifically for Magical Landmine. 

        */

        
        /*
        param: x_pos, y_pos
        pre: 
        post: initializes card action 
        
        This function will initiliaze the card and the action related to it. 
        This one is specifically for Now You See Me. 

        */


        


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
    constructor(name, range, validTarget, flags, Function){
        this.name = name;
        this.range = range;
        this.validTarget = validTarget;
        this.flags = flags; 
        this.function = Function;  
    }
}
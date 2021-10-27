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
        function placeGuardTower(x_pos, y_pos, player)
        {
            let Guard_Tower = new Unit("T", "Guard Tower", [], [], player);   
            map.tiles[x_pos][y_pos].unit = 1;

        }
        actionPlaceGuardTower = new Action("Summon Guard Tower", 3, null, placeGuardTower() );
        this.cards[0] = new Card("GuardTower", "something", action1);

        
        /*
        param: x_pos, y_pos
        pre: 
        post: initializes card action 
        
        This function will initiliaze the card and the action related to it. 
        This one is specifically for Knight. 

        */
        function placeKnight(x_pos, y_pos, player)
        {
            let Knight = new Unit("K", "Knight", [], [], player);
            map.tiles[x_pos][y_pos].unit = Knight;
        }
        actionPlaceKnight = new Action("Knight", 1, null, placeKnight());
        this.cards[1] = new Card("Knight", "something", action2);

        
        /*
        param: x_pos, y_pos
        pre: 
        post: initializes card action 
        
        This function will initiliaze the card and the action related to it. 
        This one is specifically for Assassin. 

        */
        function function3(x_pos, y_pos, player)
        {
            let Assassin = new Unit("A", "Assassin", [], [], player);
            map.tiles[x_pos][y_pos].unit = Assassin;
        }
        action3 = new Action("Assassin", 1, null, function3());
        this.cards[2] = new Card("Assassin", "something", action3);

        
        /*
        param: x_pos, y_pos
        pre: 
        post: initializes card action 
        
        This function will initiliaze the card and the action related to it. 
        This one is specifically for Wizard. 

        */
        function function4(x_pos, y_pos, player)
        {
            let Wizard = new Unit("T", "Wizard", [], [], player);
            map.tiles[x_pos][y_pos].unit = Wizard;
        }
        action4 = new Action("Wizard", 1, null, function4());
        this.cards[3] = new Card("Wizard", "something", action4);



        
        /*
        param: x_pos, y_pos
        pre: 
        post: initializes card action 
        
        This function will initiliaze the card and the action related to it. 
        This one is specifically for Ethereal Ward. 

        */
        function function5(x_pos, y_pos, player)
        {
            let Ethereal_Ward = new Trigger();
            map.tiles[x_pos][y_pos].unit.triggers.push(Ethereal_Ward);
        }
        action5 = new Action("Placed Ethereal Ward", 1, null, function5() );
        this.cards[4] = new Card("Ethereal Ward", "something", action5);

        
        /*
        param: x_pos, y_pos
        pre: 
        post: initializes card action 
        
        This function will initiliaze the card and the action related to it. 
        This one is specifically for Magical Landmine. 

        */
        function function6(x_pos, y_pos, player)
        {
            let Magical_Landmine = new Trigger();
            map.tiles[x_pos][y_pos].unit.triggers.push(Magical_Landmine);
        }
        action6 = new Action("Placed Magical Landmine", 1, null, function6());
        this.cards[5] = new Card("Magical Landmine", "something", action6);

        
        /*
        param: x_pos, y_pos
        pre: 
        post: initializes card action 
        
        This function will initiliaze the card and the action related to it. 
        This one is specifically for Now You See Me. 

        */
       function function7(x_pos, y_pos, player)
       {
        let Now_You_See_Me = new Trigger();
        map.tiles[x_pos][y_pos].unit.triggers.push(Now_You_See_Me);
       }
       action7 = new Action("Placed Now You See Me", 1, null, function7());
       this.cards[6] = new Card("Now You See Me", "something", action7);


        


    }
}

class Deck{
    constructor(cards){
        drawCards()
        {

        }
    }
}

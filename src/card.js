class Card{
    constructor(name, description, action){
     
        this.name = name;
        this.description = description;
        this.action = action;
        

    }
}

class Hand{
    constructor(){
        this.cards = []
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
            map.tiles[x_pos][y_pos].unit = Guard_Tower;

        }
        let actionPlaceGuardTower = new Action("Summon Guard Tower", 3, null, placeGuardTower(1, 1, 1)); //IMPORTANT: It turns out our code won't compile unless we put actual values inside here. Thoughts?
        this.cards[0] = new Card("GuardTower", "something", actionPlaceGuardTower);

        
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
        let actionPlaceKnight = new Action("Knight", 1, null, placeKnight(1, 1, 1));
        this.cards[1] = new Card("Knight", "something", actionPlaceKnight);

        
        /*
        param: x_pos, y_pos
        pre: 
        post: initializes card action 
        
        This function will initiliaze the card and the action related to it. 
        This one is specifically for Assassin. 

        */
        function placeAssassin(x_pos, y_pos, player)
        {
            let Assassin = new Unit("A", "Assassin", [], [], player);
            map.tiles[x_pos][y_pos].unit = Assassin;
        }
        let actionPlaceAssassin = new Action("Assassin", 1, null, placeAssassin(1, 1, 1));
        this.cards[2] = new Card("Assassin", "something", actionPlaceAssassin);

        
        /*
        param: x_pos, y_pos
        pre: 
        post: initializes card action 
        
        This function will initiliaze the card and the action related to it. 
        This one is specifically for Wizard. 

        */
        function placeWizard(x_pos, y_pos, player)
        {
            let Wizard = new Unit("W", "Wizard", [], [], player);
            map.tiles[x_pos][y_pos].unit = Wizard;
        }
        let actionPlaceWizard = new Action("Wizard", 1, null, placeWizard(1, 1, 1));
        this.cards[3] = new Card("Wizard", "something", actionPlaceWizard);



        
        /*
        param: x_pos, y_pos
        pre: 
        post: initializes card action 
        
        This function will initiliaze the card and the action related to it. 
        This one is specifically for Ethereal Ward. 

        */
        function placeEtherealWard(x_pos, y_pos, player)
        {
            let Ethereal_Ward = new Trigger();
            map.tiles[x_pos][y_pos].unit.triggers.push(Ethereal_Ward);
        }
        let actionPlaceEtherealWard = new Action("Placed Ethereal Ward", 1, null, placeEtherealWard(1, 1, 1) );
        this.cards[4] = new Card("Ethereal Ward", "something", actionPlaceEtherealWard);

        
        /*
        param: x_pos, y_pos
        pre: 
        post: initializes card action 
        
        This function will initiliaze the card and the action related to it. 
        This one is specifically for Magical Landmine. 

        */
        function placeMagicalLandmine(x_pos, y_pos, player)
        {
            let Magical_Landmine = new Trigger();
            map.tiles[x_pos][y_pos].unit.triggers.push(Magical_Landmine);
        }
        let actionPlaceMagicalLandmine = new Action("Placed Magical Landmine", 1, null, placeMagicalLandmine(1, 1, 1));
        this.cards[5] = new Card("Magical Landmine", "something", actionPlaceMagicalLandmine);

        
        /*
        param: x_pos, y_pos
        pre: 
        post: initializes card action 
        
        This function will initiliaze the card and the action related to it. 
        This one is specifically for Now You See Me. 

        */
       function castInvisibility(x_pos, y_pos, player)
       {
        let Now_You_See_Me = new Trigger();
        map.tiles[x_pos][y_pos].unit.triggers.push(Now_You_See_Me);
       }
       let actionCastInvisibility = new Action("Placed Now You See Me", 1, null, castInvisibility(1, 1, 1));
       this.cards[6] = new Card("Now You See Me", "something", actionCastInvisibility);


        


    }
}

class Deck{
    constructor(cards){
        drawCards()
        {

        }
    }
}

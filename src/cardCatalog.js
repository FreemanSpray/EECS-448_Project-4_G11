function range_radialRange(radius){       //pass in the desired radius and the range function for a radial range will be returned
    function range(source){
        const width = map.xWidth, height = map.yHeight;
        const initialVal = false;

        var arr = Array(width);
        for (var x = 0; x < width; x++) {
            arr[x] = Array(height).fill(initialVal);
        }

        const radiusFromCast = radius
        for (let x = -radiusFromCast; x < radiusFromCast; x++) {
            for (let y = -radiusFromCast; y < radiusFromCast; y++) {
                arr[source.xPos + x][source.yPos + y] = true
            }            
        }
        return arr
    }

    return range
}

function validTarget_unoccupied(){      //returns a validTarget function where the conditions are target is in range and does not contain a unit
    function validTarget(source, range, target){
        let valid = false
        let arr = range(source)

        let targetInRange = arr[target.xPos][target.yPos]
        let targetUnoccupied = false
        if (target.unit == null) {
            targetUnoccupied = true
        }

        if (targetInRange && targetUnoccupied) {
            valid = true
        }

        return valid
    }

    return validTarget
}

/*
function card_template(){
    let name = ""
    let description = ""

    

    let card = new Card(name, description, action)
    return card
}
*/


// DOING

function card_guardTower(){
    let name = "Guard Tower"
    let description = "Unmoving, defends a nearby area"
    let action = action_summonGuardTower()

    let card = new Card(name, description, action)
    return card
}


// DONE

// TO DO
function knightCard(){
    function function2(x_pos, y_pos)
    {
        Knight = new Unit();
        Map.tiles[x_pos][y_pos].unit = Knight;
    }
    action2 = new Action("Summon Knight", 1, null, function2());
    this.cards[1] = new Card("Knight", "something", action2);
}

function assassinCard(){
    function function3(x_pos, y_pos)
    {
        Assassin = new Unit();
        Map.tiles[x_pos][y_pos].unit = Assassin;
    }
    action3 = new Action("Assassin", 1, null, function3());
    this.cards[2] = new Card("Assassin", "something", action3);
}

function wizardCard(){
    function function4(x_pos, y_pos)
    {
        Wizard = new Unit();
        Map.tiles[x_pos][y_pos].unit = Wizard;
    }
    action4 = new Action("Wizard", 1, null, function4());
    this.cards[3] = new Card("Wizard", "something", action4);
}

function etherealWardCard(){
    function function5(x_pos, y_pos)
    {
        Ethereal_Ward = new Trigger();
        Map.tiles[x_pos][y_pos].unit.triggers.push(Ethereal_Ward);
    }
    action5 = new Action("Placed Ethereal Ward", 1, null, function5() );
    this.cards[4] = new Card("Ethereal Ward", "something", action5);

}

function magicalLandmineCard(){
    function function6(x_pos, y_pos)
    {
        Magical_Landmine = new Trigger();
        Map.tiles[x_pos][y_pos].unit.triggers.push(Magical_Landmine);
    }
    action6 = new Action("Placed Magical Landmine", 1, null, function6());
    this.cards[5] = new Card("Magical Landmine", "something", action6);

}

function nowYouSeeMeCard(){
    function function7(x_pos, y_pos)
    {
     Now_You_See_Me = new Trigger();
     Map.tiles[x_pos][y_pos].unit.triggers.push(Now_You_See_Me);
    }
    action7 = new Action("Placed Now You See Me", 1, null, function7());
    this.cards[6] = new Card("Now You See Me", "something", action7);
}
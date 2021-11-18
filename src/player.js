class Player{
    constructor(playerID){
        this.playerID = playerID
        this.commander = new Unit("Commander", this)
        map.tiles[0 + 34*(playerID - 1)][0 + 14*(playerID - 1)].unit = this.commander                        //placing commander on appropriate starting square (top left for p1, bottom right for p2)
       
        this.hand = new Hand(this)
    }
}

function findCommander() {
    for (let x = 0; x < map.xWidth; x++) {                              //loop through map x coords
        for (let y = 0; y < map.yHeight; y++) {                         //loop through map y coords
            try {                                                       //try catch for error when the tile doesn't have a unit
                let unit = map.tiles[x][y].unit
                if (unit.symbol == "*" && unit.owner.playerID == turn) {      //if the tile holds the commander who's turn it is
                    return map.tiles[x][y]                              //return that tile
                }
            } catch (error) {
            }
        }                
    }
}
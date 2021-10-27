class Map{
    constructor(){
        this.xWidth = 45
        this.yHeight = 15
        this.tiles = []

        for(let i = 0; i < this.xWidth; i++){
            this.tiles[i] = []
        }

        for (let x = 0; x < this.xWidth; x++){
            for (let y = 0; y < this.yHeight; y++) {
                this.tiles[x][y] = new Tile(x, y)
            }
        }
    }
}

class Tile{
    constructor(xPos, yPos){
        this.xPos = xPos
        this.yPos = yPos

        this.triggers = []
        this.unit = null
    }
}

class Unit{
    constructor(symbol, description, actions, triggers, player){
        this.symbol = symbol
        this.description = description
        this.actions = actions
        this.triggers = triggers
        this.player = player
    }
}
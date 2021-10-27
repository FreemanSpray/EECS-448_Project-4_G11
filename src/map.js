class Map{
    constructor(){
        this.xWidth = 45
        this.yHeight = 15

        for (let y = 0; y < yHeight; y++){
            for (let x = 0; x < xWidth; x++) {
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
    constructor(symbol, description, actions, triggers){
        this.symbol = symbol
        this.description = description
        this.actions = actions
        this.triggers = triggers
    }
}
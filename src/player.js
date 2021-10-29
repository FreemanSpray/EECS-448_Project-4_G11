class Player{
    constructor(playerID){
        this.playerID = playerID

        let commanderMove = new Action("Move Commander", 1, null, baseMove())
        let commanderAttack = new Action("Attack with Commander", 1, null, baseAttack())
        let commander = new Unit("*", "Commander", [commanderMove, commanderAttack], [], playerID) //generating commander unit
        map.tiles[0 + 34*(playerID - 1)][0 + 14*(playerID - 1)].unit = commander                        //placing commander on appropriate starting square (top left for p1, bottom right for p2)
       
        this.hand = new Hand()
    }
}
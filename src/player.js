class Player{
    constructor(playerID){
         this.playerID = playerID
         this.hand = new Hand()

         let commander = new Unit("*", "Commander", [commanderMove(), commanderAttack()], [], playerID) //generating commander unit
        map.tiles[0 + 34*(playerID - 1)][0 + 14*(playerID - 1)].unit = commander                        //placing commander on appropriate starting square (top left for p1, bottom right for p2)
    }
}
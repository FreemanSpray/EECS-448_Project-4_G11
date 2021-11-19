let numberOfTests = 13
let outcomes = []
let testDescriptions = ["* Player 1 conceding the game results in player 2 winning: ", 
    "* Player 2 taking player 1's Commander results in player 2 winning: ", 
    "* Taking a Guard Tower with a Knight results in only the Guard Tower being destroyed: ",
    "* Placing a Guard Tower near an enemy unit does not result in that unit being destroyed: ",
    "* Moving a unit from one defended tile to another results in that unit being destroyed: ",
    "* Both Commanders being destroyed by the same Fireball results in a draw: ",
    "* One Commander sacrificing itself to destroy the other results in a draw: ",
    "* A unit cannot move onto a tile occupied by another unit: ",
    "* A unit cannot be summoned onto a tile occupied by another unit: ",
    "* A unit cannot be summoned onto a tile outside of its summon range: ",
    "* Playing a card causes it to be removed from the hand: ",
    "* One player playing a card does not impact the hand of the other player: ",
    "* A unit cannot move to a tile outside of its movement range: "]

/*   
    post:   passes if player 1 conceding by having their commander attack itself results in player 2 winning the game.
*/
function test1(){
    clickProcessing(30,30) //select p1 commander
    clickProcessing(1150,730) //select attack
    clickProcessing(30,30) //target commander with its own attack
    if(gameWon == 2){
        return "PASSED"
    }
    return "FAILED"
}

/*   
    post:   passes if player 2 taking player 1's commander results in player 2 winning the game.
*/
function test2(){
    clickProcessing(30,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(70,30) //move p1 Commander to tile (1, 0)
    clickProcessing(290,700) //p2 selects Knight card
    clickProcessing(1190, 390) //place Knight at tile (29, 9)
    clickProcessing(70,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(110,30) //move p1 Commander to tile (2, 0)
    clickProcessing(1190, 390) //select p2 Knight
    clickProcessing(1150,670) //select move
    clickProcessing(1070,270) //move p2 Knight to tile (26, 6)
    clickProcessing(110,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(150,30) //move p1 Commander to tile (3, 0)
    clickProcessing(1070,270) //select p2 Knight
    clickProcessing(1150,670) //select move
    clickProcessing(950,150) //move p2 Knight to tile (23, 3)
    clickProcessing(150,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(190,30) //move p1 Commander to tile (4, 0)
    clickProcessing(950,150) //select p2 Knight
    clickProcessing(1150,670) //select move
    clickProcessing(830,30) //move p2 Knight to tile (20, 0)
    clickProcessing(190,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(230,30) //move p1 Commander to tile (5, 0)
    clickProcessing(830,30) //select p2 Knight
    clickProcessing(1150,670) //select move
    clickProcessing(710,30) //move p2 Knight to tile (17, 0)
    clickProcessing(230,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(270,30) //move p1 Commander to tile (6, 0)
    clickProcessing(710,30) //select p2 Knight
    clickProcessing(1150,670) //select move
    clickProcessing(590,30) //move p2 Knight to tile (14, 0)
    clickProcessing(270,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(310,30) //move p1 Commander to tile (7, 0)
    clickProcessing(590,30) //select p2 Knight
    clickProcessing(1150,730) //select charge
    clickProcessing(310,30) //target p1 commander with charge
    if(gameWon == 2){
        return "PASSED"
    }
    return "FAILED"
}

/*   
    post:   passes if a knight taking a guard tower does not result in the knight being destroyed
*/
function test3(){
    clickProcessing(30,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(70,30) //move p1 Commander to tile (1, 0)
    clickProcessing(290,700) //p2 selects Knight card
    clickProcessing(1190, 390) //place Knight at tile (29, 9)
    clickProcessing(70,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(110,30) //move p1 Commander to tile (2, 0)
    clickProcessing(1190, 390) //select p2 Knight
    clickProcessing(1150,670) //select move
    clickProcessing(1070,270) //move p2 Knight to tile (26, 6)
    clickProcessing(110,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(150,30) //move p1 Commander to tile (3, 0)
    clickProcessing(1070,270) //select p2 Knight
    clickProcessing(1150,670) //select move
    clickProcessing(950,150) //move p2 Knight to tile (23, 3)
    clickProcessing(150,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(190,30) //move p1 Commander to tile (4, 0)
    clickProcessing(950,150) //select p2 Knight
    clickProcessing(1150,670) //select move
    clickProcessing(830,30) //move p2 Knight to tile (20, 0)
    clickProcessing(190,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(230,30) //move p1 Commander to tile (5, 0)
    clickProcessing(830,30) //select p2 Knight
    clickProcessing(1150,670) //select move
    clickProcessing(710,30) //move p2 Knight to tile (17, 0)
    clickProcessing(230,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(270,30) //move p1 Commander to tile (6, 0)
    clickProcessing(710,30) //select p2 Knight
    clickProcessing(1150,670) //select move
    clickProcessing(590,30) //move p2 Knight to tile (14, 0)
    clickProcessing(130,700) //p1 selects Guard Tower card
    clickProcessing(390,30) //place Guard Tower at tile (9, 0)
    clickProcessing(590,30) //select p2 Knight
    clickProcessing(1150,730) //select charge
    clickProcessing(390,30) //target p1 Guard Tower with charge
    if(map.tiles[9][0].unit.symbol == "Kn"){
        return "PASSED"
    }
    return "FAILED"
}

/*   
    post:   passes if placing a guard tower near an enemy unit does not destroy that unit.
*/
function test4(){
    clickProcessing(30,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(70,30) //move p1 Commander to tile (1, 0)
    clickProcessing(290,700) //p2 selects Knight card
    clickProcessing(1190, 390) //place Knight at tile (29, 9)
    clickProcessing(70,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(110,30) //move p1 Commander to tile (2, 0)
    clickProcessing(1190, 390) //select p2 Knight
    clickProcessing(1150,670) //select move
    clickProcessing(1070,270) //move p2 Knight to tile (26, 6)
    clickProcessing(110,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(150,30) //move p1 Commander to tile (3, 0)
    clickProcessing(1070,270) //select p2 Knight
    clickProcessing(1150,670) //select move
    clickProcessing(950,150) //move p2 Knight to tile (23, 3)
    clickProcessing(150,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(190,30) //move p1 Commander to tile (4, 0)
    clickProcessing(950,150) //select p2 Knight
    clickProcessing(1150,670) //select move
    clickProcessing(830,30) //move p2 Knight to tile (20, 0)
    clickProcessing(190,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(230,30) //move p1 Commander to tile (5, 0)
    clickProcessing(830,30) //select p2 Knight
    clickProcessing(1150,670) //select move
    clickProcessing(710,30) //move p2 Knight to tile (17, 0)
    clickProcessing(230,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(270,30) //move p1 Commander to tile (6, 0)
    clickProcessing(710,30) //select p2 Knight
    clickProcessing(1150,670) //select move
    clickProcessing(590,30) //move p2 Knight to tile (14, 0)
    clickProcessing(270,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(310,30) //move p1 Commander to tile (7, 0)
    clickProcessing(590,30) //select p2 Knight
    clickProcessing(1150,670) //select move
    clickProcessing(470,30) //move p2 Knight to tile (11, 0)
    clickProcessing(130,700) //p1 selects Guard Tower card
    clickProcessing(390,30) //place Guard Tower at tile (9, 0)
    if(map.tiles[11][0].unit.symbol == "Kn"){
        return "PASSED"
    }
    return "FAILED"
}


/*   
    post:   passes if a knight moving from the position test 4 ends in to another tile guarded by the guard tower results in the knight being destroyed.
*/
function test5(){
    clickProcessing(30,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(70,30) //move p1 Commander to tile (1, 0)
    clickProcessing(290,700) //p2 selects Knight card
    clickProcessing(1190, 390) //place Knight at tile (29, 9)
    clickProcessing(70,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(110,30) //move p1 Commander to tile (2, 0)
    clickProcessing(1190, 390) //select p2 Knight
    clickProcessing(1150,670) //select move
    clickProcessing(1070,270) //move p2 Knight to tile (26, 6)
    clickProcessing(110,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(150,30) //move p1 Commander to tile (3, 0)
    clickProcessing(1070,270) //select p2 Knight
    clickProcessing(1150,670) //select move
    clickProcessing(950,150) //move p2 Knight to tile (23, 3)
    clickProcessing(150,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(190,30) //move p1 Commander to tile (4, 0)
    clickProcessing(950,150) //select p2 Knight
    clickProcessing(1150,670) //select move
    clickProcessing(830,30) //move p2 Knight to tile (20, 0)
    clickProcessing(190,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(230,30) //move p1 Commander to tile (5, 0)
    clickProcessing(830,30) //select p2 Knight
    clickProcessing(1150,670) //select move
    clickProcessing(710,30) //move p2 Knight to tile (17, 0)
    clickProcessing(230,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(270,30) //move p1 Commander to tile (6, 0)
    clickProcessing(710,30) //select p2 Knight
    clickProcessing(1150,670) //select move
    clickProcessing(590,30) //move p2 Knight to tile (14, 0)
    clickProcessing(270,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(310,30) //move p1 Commander to tile (7, 0)
    clickProcessing(590,30) //select p2 Knight
    clickProcessing(1150,670) //select move
    clickProcessing(470,30) //move p2 Knight to tile (11, 0)
    clickProcessing(130,700) //p1 selects Guard Tower card
    clickProcessing(390,30) //place Guard Tower at tile (9, 0)
    clickProcessing(470,30) //select p2 Knight
    clickProcessing(1150,670) //select move
    clickProcessing(430,30) //move p2 Knight to tile (11, 0)
    if(map.tiles[10][0].unit == null){
        return "PASSED"
    }
    return "FAILED"
}

/*   
    post:   passes if both commanders being destroyed by a fireball results in a draw.
*/
function test6(){
    clickProcessing(30,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(70,30) //move p1 Commander to tile (1, 0)
    clickProcessing(1390,590) //select p2 Commander 
    clickProcessing(1150,670) //select move
    clickProcessing(1350,550) //move p2 Commander to tile (33, 13)
    clickProcessing(70,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(110,30) //move p1 Commander to tile (2, 0)
    clickProcessing(1350,550) //select p2 Commander 
    clickProcessing(1150,670) //select move
    clickProcessing(1310,510) //move p2 Commander to tile (32, 12)
    clickProcessing(110,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(150,30) //move p1 Commander to tile (3, 0)
    clickProcessing(1310,510) //select p2 Commander 
    clickProcessing(1150,670) //select move
    clickProcessing(1270,470) //move p2 Commander to tile (31, 11)
    clickProcessing(150,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(190,30) //move p1 Commander to tile (4, 0)
    clickProcessing(1270,470) //select p2 Commander 
    clickProcessing(1150,670) //select move
    clickProcessing(1230,430) //move p2 Commander to tile (30, 10)
    clickProcessing(190,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(230,30) //move p1 Commander to tile (5, 0)
    clickProcessing(1230,430) //select p2 Commander 
    clickProcessing(1150,670) //select move
    clickProcessing(1190,390) //move p2 Commander to tile (29, 9)
    clickProcessing(230,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(270,30) //move p1 Commander to tile (6, 0)
    clickProcessing(1190,390) //select p2 Commander 
    clickProcessing(1150,670) //select move
    clickProcessing(1150,350) //move p2 Commander to tile (28, 8)
    clickProcessing(270,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(310,30) //move p1 Commander to tile (7, 0)
    clickProcessing(1150,350) //select p2 Commander 
    clickProcessing(1150,670) //select move
    clickProcessing(1110,310) //move p2 Commander to tile (27, 7)
    clickProcessing(310,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(350,30) //move p1 Commander to tile (8, 0)
    clickProcessing(1110,310) //select p2 Commander 
    clickProcessing(1150,670) //select move
    clickProcessing(1070,270) //move p2 Commander to tile (26, 6)
    clickProcessing(350,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(390,30) //move p1 Commander to tile (9, 0)
    clickProcessing(1070,270) //select p2 Commander 
    clickProcessing(1150,670) //select move
    clickProcessing(1030,230) //move p2 Commander to tile (25, 5)
    clickProcessing(390,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(430,30) //move p1 Commander to tile (10, 0)
    clickProcessing(1030,230) //select p2 Commander 
    clickProcessing(1150,670) //select move
    clickProcessing(990,190) //move p2 Commander to tile (24, 4)
    clickProcessing(430,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(470,30) //move p1 Commander to tile (11, 0)
    clickProcessing(990,190) //select p2 Commander 
    clickProcessing(1150,670) //select move
    clickProcessing(950,150) //move p2 Commander to tile (23, 3)
    clickProcessing(470,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(510,30) //move p1 Commander to tile (12, 0)
    clickProcessing(950,150) //select p2 Commander 
    clickProcessing(1150,670) //select move
    clickProcessing(910,110) //move p2 Commander to tile (22, 2)
    clickProcessing(510,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(550,30) //move p1 Commander to tile (13, 0)
    clickProcessing(910,110) //select p2 Commander 
    clickProcessing(1150,670) //select move
    clickProcessing(870,70) //move p2 Commander to tile (21, 1)
    clickProcessing(550,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(590,30) //move p1 Commander to tile (14, 0)
    clickProcessing(870,70) //select p2 Commander 
    clickProcessing(1150,670) //select move
    clickProcessing(830,30) //move p2 Commander to tile (20, 0)
    clickProcessing(450,700) //select Fireball card
    clickProcessing(710,30) //select tile (17, 0) for Fireball target
    if(gameWon == 0){
        return "PASSED"
    }
    return "FAILED"
}

/*   
    post:   passes if a commander taking the other commander then being destroyed by a guard tower results in a draw.
*/
function test7(){
    clickProcessing(30,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(70,30) //move p1 Commander to tile (1, 0)
    clickProcessing(1390,590) //select p2 Commander 
    clickProcessing(1150,670) //select move
    clickProcessing(1350,550) //move p2 Commander to tile (33, 13)
    clickProcessing(70,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(110,30) //move p1 Commander to tile (2, 0)
    clickProcessing(1350,550) //select p2 Commander 
    clickProcessing(1150,670) //select move
    clickProcessing(1310,510) //move p2 Commander to tile (32, 12)
    clickProcessing(110,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(150,30) //move p1 Commander to tile (3, 0)
    clickProcessing(1310,510) //select p2 Commander 
    clickProcessing(1150,670) //select move
    clickProcessing(1270,470) //move p2 Commander to tile (31, 11)
    clickProcessing(150,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(190,30) //move p1 Commander to tile (4, 0)
    clickProcessing(1270,470) //select p2 Commander 
    clickProcessing(1150,670) //select move
    clickProcessing(1230,430) //move p2 Commander to tile (30, 10)
    clickProcessing(190,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(230,30) //move p1 Commander to tile (5, 0)
    clickProcessing(1230,430) //select p2 Commander 
    clickProcessing(1150,670) //select move
    clickProcessing(1190,390) //move p2 Commander to tile (29, 9)
    clickProcessing(230,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(270,30) //move p1 Commander to tile (6, 0)
    clickProcessing(1190,390) //select p2 Commander 
    clickProcessing(1150,670) //select move
    clickProcessing(1150,350) //move p2 Commander to tile (28, 8)
    clickProcessing(270,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(310,30) //move p1 Commander to tile (7, 0)
    clickProcessing(1150,350) //select p2 Commander 
    clickProcessing(1150,670) //select move
    clickProcessing(1110,310) //move p2 Commander to tile (27, 7)
    clickProcessing(310,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(350,30) //move p1 Commander to tile (8, 0)
    clickProcessing(1110,310) //select p2 Commander 
    clickProcessing(1150,670) //select move
    clickProcessing(1070,270) //move p2 Commander to tile (26, 6)
    clickProcessing(350,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(390,30) //move p1 Commander to tile (9, 0)
    clickProcessing(1070,270) //select p2 Commander 
    clickProcessing(1150,670) //select move
    clickProcessing(1030,230) //move p2 Commander to tile (25, 5)
    clickProcessing(390,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(430,30) //move p1 Commander to tile (10, 0)
    clickProcessing(1030,230) //select p2 Commander 
    clickProcessing(1150,670) //select move
    clickProcessing(990,190) //move p2 Commander to tile (24, 4)
    clickProcessing(430,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(470,30) //move p1 Commander to tile (11, 0)
    clickProcessing(990,190) //select p2 Commander 
    clickProcessing(1150,670) //select move
    clickProcessing(950,150) //move p2 Commander to tile (23, 3)
    clickProcessing(470,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(510,30) //move p1 Commander to tile (12, 0)
    clickProcessing(950,150) //select p2 Commander 
    clickProcessing(1150,670) //select move
    clickProcessing(910,110) //move p2 Commander to tile (22, 2)
    clickProcessing(510,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(550,30) //move p1 Commander to tile (13, 0)
    clickProcessing(910,110) //select p2 Commander 
    clickProcessing(1150,670) //select move
    clickProcessing(870,70) //move p2 Commander to tile (21, 1)
    clickProcessing(550,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(590,30) //move p1 Commander to tile (14, 0)
    clickProcessing(870,70) //select p2 Commander 
    clickProcessing(1150,670) //select move
    clickProcessing(830,30) //move p2 Commander to tile (20, 0)
    clickProcessing(590,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(630,30) //move p1 Commander to tile (15, 0)
    clickProcessing(830,30) //select p2 Commander 
    clickProcessing(1150,670) //select move
    clickProcessing(790,30) //move p2 Commander to tile (19, 0)
    clickProcessing(630,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(670,30) //move p1 Commander to tile (16, 0)
    clickProcessing(790,30) //select p2 Commander 
    clickProcessing(1150,670) //select move
    clickProcessing(750,30) //move p2 Commander to tile (18, 0)
    clickProcessing(670,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(710,30) //move p1 Commander to tile (17, 0)
    clickProcessing(130,700) //select Guard Tower card
    clickProcessing(750,70) //place Guard Tower at tile (18, 1)
    //clickProcessing(710,30) //select p1 Commander
    //clickProcessing(1150,670) //select move
    //clickProcessing(710,70) //move p2 commander to tile (17, 1)
    clickProcessing(710,30) //select p1 Commander
    clickProcessing(1150,730) //select attack
    clickProcessing(750,30) //p1 Commander targets p2 Commander for attack at tile (18, 0)
    if(gameWon == 0){
        return "PASSED"
    }
    return "FAILED"
}

/*   
    post:   passes if attempting to move a unit onto an occupied tile does not change the unit on either the target tile or the source tile
*/
function test8(){
    clickProcessing(130,700) //select Guard Tower
    clickProcessing(70,30) //place Guard Tower at tile (1,0)
    clickProcessing(1390,590) //select p2 Commander 
    clickProcessing(1150,670) //select move
    clickProcessing(1350,550) //move p2 Commander to tile (33, 13)
    clickProcessing(30,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(70,30) //attempt to move p1 Commander to tile (1, 0)
    if(map.tiles[0][0].unit.symbol == "*" && map.tiles[1][0].unit.symbol == "GT"){
        return "PASSED"
    }
    return "FAILED"
}

/*   
    post: passes if placing a unit on an occupied tile does not change the unit on the tile.
*/
function test9(){ //Playing a unit causes it to be removed from 
    clickProcessing(130,700) //select Guard Tower
    clickProcessing(70,30) //place Guard Tower at tile (1,0)
    clickProcessing(1390,590) //select p2 Commander 
    clickProcessing(1150,670) //select move
    clickProcessing(1350,550) //move p2 Commander to tile (33, 13)
    clickProcessing(130,700) //select Knight
    clickProcessing(70,30) //place Knight at tile (1,0)
    if(map.tiles[1][0].unit.symbol == "GT"){
        return "PASSED"
    }
    return "FAILED"
}

/*   
    post: passes if placing a unit outside of its summon range does not result in a unit being placed.
*/
function test10(){ //Playing a unit causes it to be removed from 
    clickProcessing(130,700) //select Guard Tower
    clickProcessing(1350,550) //place Guard Tower at tile (33, 13)
    if(map.tiles[33][13].unit == null){
        return "PASSED"
    }
    return "FAILED"
}

/*   
    post: passes if a player playing the Summon Guard Tower card causes that card to be removed from that player's hand, moving the Summon Knight card to be the first card on the left.
*/
function test11(){ //Playing a unit causes it to be removed from 
    clickProcessing(130,700) //select Guard Tower
    clickProcessing(70,30) //place Guard Tower at tile (1,0)
    clickProcessing(1390,590) //select p2 Commander 
    clickProcessing(1150,670) //select move
    clickProcessing(1350,550) //move p2 Commander to tile (33, 13)
    clickProcessing(130,700) //select Knight
    clickProcessing(110,30) //place Knight at tile (2,0)
    if(map.tiles[1][0].unit.symbol == "GT" && map.tiles[2][0].unit.symbol == "Kn"){
        return "PASSED"
    }
    return "FAILED"
}

/*   
    post: passes if a player playing a card does not impact the cards in the other player's hand.
*/
function test12(){ //Playing a unit causes it to be removed from 
    clickProcessing(130,700) //select Guard Tower
    clickProcessing(70,30) //place Guard Tower at tile (1,0)
    clickProcessing(130,700) //select Guard Tower
    clickProcessing(1350,550) //place Guard Tower at tile (33, 13)
    if(map.tiles[33][13].unit.symbol == "GT"){
        return "PASSED"
    }
    return "FAILED"
}

/*   
    post: passes if attempting to move a unit outside of its movement range results in the unit remaining where it is and not being moved to the new tile.
*/
function test13(){ //Playing a unit causes it to be removed from 
    clickProcessing(30,30) //select p1 Commander
    clickProcessing(1150,670) //select move
    clickProcessing(110,30) //move p1 Commander to tile (2, 0)
    if(map.tiles[0][0].unit.symbol == "*" && map.tiles[2][0].unit == null){
        return "PASSED"
    }
    return "FAILED"
}


/*   
    post:   runs test suite.
*/
function runTests(){
    outcomes.push(test1())
    resetGame()
    outcomes.push(test2())
    resetGame()
    outcomes.push(test3())
    resetGame()
    outcomes.push(test4())
    resetGame()
    outcomes.push(test5())
    resetGame()
    outcomes.push(test6())
    resetGame()
    outcomes.push(test7())
    resetGame()
    outcomes.push(test8())
    resetGame()
    outcomes.push(test9())
    resetGame()
    outcomes.push(test10())
    resetGame()
    outcomes.push(test11())
    resetGame()
    outcomes.push(test12())
    resetGame()
    outcomes.push(test13())
    resetGame()
    drawTestResults()
}














//***location database***

//clickProcessing(1150,670) //-- action 1
//clickProcessing(1150,730) //-- action 2
//clickProcessing(1150,790) //-- action 3
//clickProcessing(130,700) //-- card 1
//clickProcessing(290,700) //-- card 2
//clickProcessing(450,700) //-- card 3
//clickProcessing(610,700) //-- card 4
//clickProcessing(770,700) //-- card 5
//clickProcessing(30,30) //-- tile (0,0)
//clickProcessing(70,30) //-- tile (1,0)
//clickProcessing(110,30) //-- tile (2,0)
//clickProcessing(150,30) //-- tile (3,0)
//clickProcessing(190,30) //-- tile (4,0)
//clickProcessing(230,30) //-- tile (5,0)
//clickProcessing(270,30) //-- tile (6,0)
//clickProcessing(310,30) //-- tile (7,0)
//clickProcessing(350,30) //-- tile (8,0)
//clickProcessing(390,30) //-- tile (9,0)
//clickProcessing(430,30) //-- tile (10,0)
//clickProcessing(470,30) //-- tile (11,0)
//clickProcessing(510,30) //-- tile (12,0)
//clickProcessing(550,30) //-- tile (13,0)
//clickProcessing(590,30) //-- tile (14,0)
//clickProcessing(630,30) //-- tile (15,0)
//clickProcessing(670,30) //-- tile (16,0)
//clickProcessing(710,30) //-- tile (17,0)
//clickProcessing(750,30) //-- tile (18,0)
//clickProcessing(790,30) //-- tile (19,0)
//clickProcessing(830,30) //-- tile (20,0)
//clickProcessing(870,30) //-- tile (21,0)
//clickProcessing(910,30) //-- tile (22,0)
//clickProcessing(950,30) //-- tile (23,0)
//clickProcessing(990,30) //-- tile (24,0)
//clickProcessing(1030,30) //-- tile (25,0)
//clickProcessing(1070,30) //-- tile (26,0)
//clickProcessing(1110,30) //-- tile (27,0)
//clickProcessing(1150,30) //-- tile (28,0)
//clickProcessing(1190,30) //-- tile (29,0)
//clickProcessing(1230,30) //-- tile (30,0)
//clickProcessing(1270,30) //-- tile (31,0)
//clickProcessing(1310,30) //-- tile (32,0)
//clickProcessing(1350,30) //-- tile (33,0)
//clickProcessing(1390,30) //-- tile (34,0)
//clickProcessing(1390,70) //-- tile (34,1)
//clickProcessing(1390,110) //-- tile (34,2)
//clickProcessing(1390,150) //-- tile (34,3)
//clickProcessing(1390,190) //-- tile (34,4)
//clickProcessing(1390,230) //-- tile (34,5)
//clickProcessing(1390,270) //-- tile (34,6)
//clickProcessing(1390,310) //-- tile (34,7)
//clickProcessing(1390,350) //-- tile (34,8)
//clickProcessing(1390,390) //-- tile (34,9)
//clickProcessing(1390,430) //-- tile (34,10)
//clickProcessing(1390,470) //-- tile (34,11)
//clickProcessing(1390,510) //-- tile (34,12)
//clickProcessing(1390,550) //-- tile (34,13)
//clickProcessing(1390,590) //-- tile (34,14)
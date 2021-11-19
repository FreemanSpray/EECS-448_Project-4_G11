/*
@pre        map has been constructed
@param      sourceTile, the tile in the center of the range
@param      range, the characteristic number of the range
@return     an array representing map tiles that are in range
*/
function radialRange(sourceTile, range){
    const width = map.xWidth, height = map.yHeight;
    const initialVal = false;

    var arr = Array(width);
    for (var x = 0; x < width; x++) {
        arr[x] = Array(height).fill(initialVal);
    }

    const source = sourceTile
    const radiusFromCast = range
    for (let x = -radiusFromCast; x <= radiusFromCast; x++) {
        for (let y = -radiusFromCast; y <= radiusFromCast; y++) {
            try{
                arr[source.xPos + x][source.yPos + y] = true
            }
            catch(error){
            }
        }            
    }
    return arr
}

/*
@pre        map has been constructed
@param      sourceTile, the tile in the center of the range
@param      range, the characteristic number of the range
@return     an array representing map tiles that are in range
*/
function straightRange(source, range){
    const width = map.xWidth, height = map.yHeight;
    const initialVal = false;

    var arr = Array(width);
    for (var x = 0; x < width; x++) {
        arr[x] = Array(height).fill(initialVal);
    }

    for (let x = -range; x <= range; x++) {
        try {
            arr[source.xPos + x][source.yPos] = true
        } catch (error) {
        }
    }
    for (let y = -range; y <= range; y++) {
        try {
            arr[source.xPos][source.yPos + y] = true
        } catch (error) {
        }
    }

    return arr
}

/*
@pre        map has been constructed
@param      sourceTile, the tile in the center of the range
@param      range, the characteristic number of the range
@return     an array representing map tiles that are in range
*/
function diagonalRange(sourceTile, range){
    const width = map.xWidth, height = map.yHeight;
    const initialVal = false;

    var arr = Array(width);
    for (var x = 0; x < width; x++) {
        arr[x] = Array(height).fill(initialVal);
    }

    for (let x = 0; x < map.xWidth; x++) {
        for (let y = 0; y < map.yHeight; y++) {
            let deltaX = Math.abs(sourceTile.xPos - x)
            let deltaY = Math.abs(sourceTile.yPos - y)
            if (deltaX == deltaY && deltaX <= range) {
                arr[x][y] = true
            }
        }
    }

    return arr
}
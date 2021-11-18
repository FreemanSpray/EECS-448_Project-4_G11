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

function diagonalRange(sourceTile, range){

}
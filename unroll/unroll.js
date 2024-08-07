function unroll(squareArray) {
    const result=[];
    while (squareArray.length){
        //top row
        result.push(...squareArray.shift());
        //right column
        for (let i = 0; i < squareArray.length; i++) {
            result.push(squareArray[i].pop());
        }
        //bottom row
        if(squareArray.length){
            result.push(...squareArray.pop().reverse());
        }
        //left column
        for (let i = squareArray.length - 1; i >= 0; i--) {
            if(squareArray[i].length)
                result.push(squareArray[i].shift());
        }
    }
    return result;
}

module.exports = unroll;

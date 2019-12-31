function generateNum(digits) {
    if ( digits === 1) {
        return Math.floor(Math.random()*10);
    } else if (digits === 2) {
        return 10 * Math.floor(Math.random()*10);
    } else {
        return 25 * (Math.floor(Math.random()*4) + 1);
    }
}

function generateRandomResult(){
    return Math.floor(Math.random()*1000);
}

function generateAllNums() {
    var arr = [];
    for(let i = 0; i < 10; i++) {
        if(i<4) {
            arr.push(generateNum(1))
        } else if (i == 4) {
            arr.push(generateNum(2))
        }  else if ( i === 5) {
            arr.push(generateNum(3))
        }
    }
    return arr;
}

console.log(generateRandomResult());


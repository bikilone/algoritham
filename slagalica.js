function generateNum(digits) {
    if ( digits === 1) {
        return Math.floor(Math.random()*10);
    } else if (digits === 2) {
        return 5 * (Math.floor(Math.random()*4) + 1);
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


function diffNumberCombinations(arr) {
    const allNumberCombinations = [];
    for(let a = 0; a < arr.length; a++) {
        let bArr = [...arr];
        bArr.splice(a,1);
        for(let b = 0; b < bArr.length; b++ ) {
            let cArr = [...bArr];
            cArr.splice(b,1);
            for(let c =0; c < cArr.length; c++ ) {
                // console.log(arr, bArr, cArr)
                let combination = [arr[a]];
                combination.push(bArr[b]);
                combination.push(cArr[c]);
                allNumberCombinations.push(combination);
            }
        }
    }
    return allNumberCombinations
}

console.log(diffNumberCombinations([1,2,3]))


const res = generateRandomResult();
// console.log(arr, res)
// const nums = document.getElementsByClassName("num");
// nums.forEach((num, i) => num.innerText = arr[i])





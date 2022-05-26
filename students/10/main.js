//
// File: main.js
// Date: 5/24/2022
// 

const ex1 = () => {
    const array = [1, '2', 3, 'test', 1.2];
    console.log(countNumbers(array));
}

//
// ex1
//
const countNumbers = (array) => {
    let retval = 0;
    for (let y of array){
        if (typeof(y)  === "number") {
            retval += 1;
        }
    }
    return retval;
}

const ex2 = () => {
    const array = [12, 55, 2, 22, 11];
console.log(minNumber(array));
}

//
// ex2
//
const minNumber = (array) => {
    let minNumber = array[0]
    for (let y of array) {
        if (y < minNumber) {
            minNumber = y
        }
    }
    return minNumber
}

const ex3 = () => {
const array1 = [1, 2, 3, 4, 5];
const array2 = ['a', 'b', 'c', 'd', 'e'];
console.log(interleave(array1, array2));
}

//
// ex3
//
const interleave = (array1, array2) => {
    let retval = ""
    if (array1.length === array2.length) {
        for (let i = 0; i < array2.length; i++){
            retval += array1[i] + array2[i]
        }
    }
    else{
    retval = "Error: Array length mismatch"
    }
    return retval
}


const main = async () => {
    // ex1();
    // ex2();
    ex3();
}

main();

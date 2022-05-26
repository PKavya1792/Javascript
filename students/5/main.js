//
// File: main.js
// Date: 5/24/2022
// 

//ex 1
const ex1 = () => {
    const array = [1, '2', 3, 'test', 1.2];
    console.log(countNumbers(array));
}
//func 1
const countNumbers = (array) => {
    let retval = 0;
    const COMPARISON_NUMBER = 1;
    for (let x of array) {
        if (typeof(x) === typeof(COMPARISON_NUMBER)) {
            retval++;
        }
    } return retval;
}

//ex 2
const ex2 = () => {
    const array = [12, 55, 2, 22, 11];
    console.log(minNumber(array));
}
//func 2
const minNumber = array => {
    let retval = array[0];
    for (let x of array) {
        if (x < retval) {
            retval = x;
        }
    } return retval;
}

//ex 3
const ex3 = () => {
    const array1 = [1, 2, 3, 4, 5];
    const array2 = ['a', 'b', 'c', 'd', 'e'];
    // const array1 = [1, 2];
    // const array2 = ['a', 'b', 'c', 'd', 'e'];
    console.log(interleave(array1, array2));
}
//func 3
const interleave = (array1, array2) => {
    let result = "";
    if (array1.length == array2.length) {
        for (let i = 0; i < array2.length; i++) {
            result += array1[i] + array2[i];
        }
    } else if (array1.length != array2.length) {
        result = "ERROR: Array length mismatch";
    } return result;
}

const main = async () => {
    //ex1();
    //ex2();
    ex3();
}

main();
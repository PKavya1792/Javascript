//
// File: main.js
// Date: 5/24/2022
// 

const ex1 = () => {
    const array1 = [1, '2', 3, 'test', 1.2];
    console.log(countNumbers(array1));
}

const ex2 = () => {
    const array2 = [12, 55, 2, 22, 11];
    console.log(minNumber(array2));
}

const ex3 = () => {
    const array3 = [1, 2, 3, 4, 5];
    const array4 = ['a','b','c','d','e'];
    console.log(interleave(array3, array4));   
}

const ex4 = () => {
    console.log(palindrome('radar'));
    console.log(palindrome('month'));
}

//
// Your functions here...
//

const countNumbers = (array1) => {
    let retval = 0;
    for (let i = 0; i < array1.length; i++) {
        if (typeof(array1[i]) === 'number') {
            retval += 1
        }
    }
    return retval
}

const minNumber = (array2) => {
    array2.sort(function(a, b){return a - b});
    return array2[0]
}

const interleave = (array3, array4) => {
    let newArray = [];
    for (let i = 0; i < array4.length; i++) {
        newArray.push(array3[i], array4[i])
    }

    if (newArray.includes(undefined)) {
        return "ERROR: Array length mismatch"
    } else {
        return newArray.toString()
    }
}

const palindrome = (str) => {
    let normalArray = str.split("")
    let reversedArray = str.split("").reverse()
    let normal = normalArray.join("")
    let reversed = reversedArray.join("")
    if (normal == reversed) {
        return true
    } else {
        return false
    }
}

const main = async () => {
    ex4()
}

main();

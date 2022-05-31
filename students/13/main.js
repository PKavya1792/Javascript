//
// File: main.js
// Date: 5/24/2022
// 

const ex1 = () => {
    const array = [1, '2', 3, 'test', 1.2];
    console.log(countNumbers(array));
}

const ex2 = () => {
    const array = [12, 55, 2, 22, 11];
    console.log(minNumber(array));
}

const ex3 = () => {
    const array1 = [1, 2, 3, 4, 5];
    const array2 = ['a', 'b', 'c', 'd', 'e'];
    console.log(interleave(array1, array2));
}

const ex4 = () => {
    console.log(palidrome('radar'));
    console.log(palidrome('month'));
}

const ex5 = () => {
    let count = 0;
    let str = "today this is a this is a this is a test.";
    const myArray = str.split(" ");
    for (let i of myArray) {
        if (i === 'this') {
            count++;
        }
    }
    console.log('this appears: ' + count + ' times');
}

const ex6 = () => {
    const array = ['this', 'is', 'a', 'test', 'happy'];
    console.log(longestString(array));
}

const ex7 = () => {
    let n = [1, 3, 6, 3, 6, 10];
    console.log(sort(n));
}

const ex8 = () => {
    let words = "Count the words in this string";
    console.log(countWords(words));
}

const ex9 = () => {
    var a = "this counts the number of words that end in s";
    console.log(countS(a));
}

const ex10 = () => {
    var array = ["this", "is", "a", "test"];
    console.log(countLetters(array));
}

const ex11 = () => {
    let arr = ['dog', 3, 7, 'cat', 13, 'car'];
    console.log(numbersOnly(arr));
}


//
// Your functions here...
//

const countNumbers = (array) => {
    let retval = 0;

    for (let i = 0; i < array.length; i++) {
        if (typeof(array[i]) === 'number') {
            retval++;
        }
    }
    return retval;
}

const minNumber = (array) => {
    let retVal = array[0];

    for (let i of array) {
       if (i < retVal) {
            retVal = i;
        }
    }
    return retVal;
}

const interleave = (array1, array2) => {
    let retVal = array2;
    for (let i = 0; i < array1.length; i++) {
            retVal = array2.splice(i, 0, array1[i])
    }
    return retVal;
}

const palidrome = (stringCheck) => {
    let retVal = Boolean;
    if (typeof(stringCheck) === 'string') {
        let splitString = stringCheck.split("");
        let reverseArray = splitString.reverse();
        let joinArray = reverseArray.join("");
    }

    if (joinArray == stringCheck) {
        return retVal;
    } else {
        return retVal;
    }

}

const longestString = (array) => {
    let retVal = array[0];
    for (let i of array) {
        if (i.length > retVal.length) {
            retVal = i;
        }
    }
    return retVal;
}

const sort = (n) => {
    let retVal = false;
    for (let i of n) {
        if (n[i - 1] > n[i]) {
            retVal = false;
            let temp = n[i - 1];
            n[i - 1] = n[i];
            n[i] = temp;
        }
    }
    return n;
}

const countWords = (words) => {
    let retVal = 0;
    const myArray = words.split(" ");

    for (let i of myArray) {
        retVal++;
    }
    return retVal;
}

const countS = (a) => {
    let retVal = 0;
    const myArray = a.split(" ");

    for (let i of myArray) {
        if (i.slice(-1) == 's') {
            retVal++;
        }
    }
    return retVal;
}

const countLetters = (array) => {
    let retVal = 0;
    
    for (let i of array) {
        retVal += i.length;
    }
    return retVal;
}

const numbersOnly = (arr) => {
    let retVal = arr;

    for (let i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) === 'string') {
            retVal = arr.splice(i, 1);
        }
    }
    return arr;
}

const main = async () => {
    // ex1();
    // ex2();
    // ex3();
    ex4();
    // ex5();
    // ex6();
    // ex7();
    // ex8();
    // ex9();
    // ex10();
    // ex11();
}

main();

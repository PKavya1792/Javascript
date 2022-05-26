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

//ex 4
const ex4 = () => {
    console.log(palindrome('radar'));
    console.log(palindrome('month'));
}
//func 4
const palindrome = string => {
    let result = '';
    if (string == string.split('').reverse().join('')) {
        result = 'true';
    } else if (string != string.split('').reverse().join('')) {
        result = 'false';
    } return result;
}

//ex 5
const ex5 = () => {
    let str = "today this is a this is a this is a test.";
    console.log(`this appears: ${thisCounter(str)} times.`);
}
//func 5
const thisCounter = string => {
    let result = 0;
    const value = "this";
    const splitString = string.split(" ");
    result = splitString.filter(i => i === value).length;
    return result;
}

//ex 6
const ex6 = () => {
    const array = ['this', 'is', 'a', 'test', 'happy'];
    console.log(longestString(array));
}
//func 6
const longestString = array => {
    let result = "";
    for (let i = 0; i < array.length; i++) {
        result = array.reduce(
        function (a, b) {
            return a.length > b.length ? a : b;
        });
    } return result;
}

//ex 7
const ex7 = () => {
    const n = [1, 3, 6, 3, 6, 10];
    console.log(sort(n));
}
//func 7
const sort = n => {
    return n.sort((a, b) => a - b);
}

//ex 8
const ex8 = () => {
    const words = "Count the words in this string";
    console.log(countWords(words));
}
//func 8
const countWords = words => {
    return words.split(" ").length;
}

//ex 9
const ex9 = () => {
    const a = "this counts the number of words that end in s";
    console.log(countS(a));
}
//func 9
const countS = a => {
    let result = 0;
    const char = "s";
    const aSplit = a.split(" ");
    for (let x of aSplit) {
        if (x.charAt(x.length-1) == char) {
            result++;
        }
    } return result;
}

//ex 10
const ex10 = () => {
    const array = ["this", "is", "a", "test"];
    console.log(countLetters(array));
}
//func 10
const countLetters = array => {
    return array.join("").length;
}

//ex 11
const ex11 = () => {
    const arr = ['dog', 3, 7, 'cat', 13, 'car'];
    console.log(numbersOnly(arr));
}
//func 11
const numbersOnly = array => {
    return array.filter(i => typeof i === 'number');
}

const main = async () => {
    //ex1();
    //ex2();
    //ex3();
    //ex4();
    //ex5();
    //ex6();
    //ex7();
    //ex8();
    //ex9();
    //ex10();
    ex11();
}

main();
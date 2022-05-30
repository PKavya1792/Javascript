//
// File: main.js
// Date: 5/24/2022
// 

const ex1 = () => {
    const array = [1, '2', 3, 'test', 1.2];
    console.log(countNumbers(array));
}

const countNumbers = (array) => {
}

const ex2 = () => {
    const array = [12, 55, 2, 22, 11];
    console.log(minNumber(array));
}
const minNumber = (array) => {
    let retval = array[0];
    for(let i of array) {
        if (i < retval) {
            retval = i
        }
    }
    return retval
}

const ex3 = () => {
    const array1 = [1, 2, 3, 4, 5];
    const array2 = ['a', 'b', 'c', 'd', 'e'];
    console.log(interleave(array1, array2));
}

const interleave = (array1, array2) => {
    var word = ' ';
    for(let i = 0; i < array1.length; i++) {
        word += array1[i] + array2[i]
    }
    return word;
}

const ex4 = () => {
    console.log(palidrome('radar'));
    console.log(palidrome('month')); 
}

const ex5 = () => {
    let str = "today this is a this is a this is a test.";
    let thisWord = 'this';
    console.log(countOccurnece(str, thisWord));
}

const countOccurnece = (str, thisWord) => {
    let count = 0;
    let answer = '';
    const wordArray = str.split(' ');
    for(let word of wordArray ) {
        if (thisWord == word ){
            count++
        }
    }
    answer = 'this appears: ' + count + ' times'
    return answer;
}
const main = async () => {
    ex5();
}

main();

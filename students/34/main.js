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

const ex6 = () => {
    const array = ['this', 'is', 'a', 'test', 'happy'];
    console.log(longestString(array));
}

const longestString = (array) => {
    var max = 0;
    let longest;
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > max) {
            var max = array [i].length;
            longest = array[i];
        }
    } return longest;
}

const ex7 = () => {
    let n = [1, 3, 6, 3, 6, 10];
    console.log(sort(n));
}

const sort = (n) => {
    const sorted = n.sort((a,b) => (a-b))
    return sorted;
}

const ex8 = () => {
    let words = "Count the words in this string";
    console.log(countWords(words));
}

const countWords = (words) => {
    let answer = 0;
    const array = words.split(' ');
    for(let i of array) {
        if (typeof(i) == 'string'){
            answer++;
        }
    } return answer;
}
const ex9 = () => {
    var a = "this counts the number of words that end in s";
    console.log(countS(a));  
}

const countS = (a) => {
    let count = 0;
    const array = a.split(' ');
    let letter = 's'
    for(let i = 0; i < array.length; i++) {
        if (letter == (array[i])){
            count++;
        }
    } return count;
}
const ex10 = () => {
    
}

const ex11 = () => {
    
}

const ex12 = () => {
    
}


const ex13 = () => {
    
}

const ex14 = () => {
    
}

const main = async () => {
    ex9();
}

main();

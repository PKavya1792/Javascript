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
const ex4 =() => {
    console.log(palindrome('radar'));
    console.log(palindrome('month'));
}

const ex5 = () => {
    const text = "today this is a this is a this is a test.";
    console.log(countOccurences(text,"this"));
}

const ex6 = () => {
    const array = ['this', 'is', 'a', 'test', 'happy'];
    console.log(longestString(array));
}

const ex7 = () => {
    const arrayOfNumbers = [1, 3, 6, 3, 6, 10];
    console.log(sort(arrayOfNumbers));
}

const ex8 = () => {
    const words = "Count the words in this string";
    console.log(countWords(words));
}

const ex9 = () => {
    const a = "this counts the number of words that end in s";
    console.log(countS(a));
}
//
// Your functions here...
//

//Ex 9

const countS = (a) => {

}
//Ex 8
const countWords = (words) => {
    let retval = 0;
    const array = words.split(" ");
    for (let i of array) {
      if (typeof(i) =='string') {
        retval++;
      }
    } 
    return retval;
}


//Ex 7
const sort = (arrayOfNumbers) => {
    const sortedArrayOfNumbers = arrayOfNumbers.sort((a,b) => (a-b))
    return sortedArrayOfNumbers
}


//Ex 6
const longestString = (array) => {
    let lgth = 0;
    let longest;    
    for (let i = 0; i < array.length; i++) {
      if (array[i].length > lgth) {
        let lgth = array[i].length;
        longest = array[i];
      }
    }
    return longest;
}


//Ex 5
const countOccurences = (text, searchWord) => {
    let retval = ""
    let wordCounter = 0;
    const wordArray = text.split(" ");
    for (let word of wordArray) {
        if (searchWord == word) {
           wordCounter++
        }
    }
    retval = "This appears: " + wordCounter + " times"
    return retval;
}

//Ex 4
const palindrome = (word) => {
    let retval=true;
    const input = word.split("");
    const reverseArray = input.reverse("");
    const reversedWord= reverseArray.join("");
        if (reversedWord !== word) {
           retval = false;
        }
    return retval;
}

//Ex 3
const interleave = (array1, array2) => {
    if (array1.length != array2.length){
        return 'ERROR: Array length mismatch'
    }
    else {
        let text="";
        for(let i = 0; i < array1.length; i++) {
            text += array1[i] + array2[i]
        }
        return text
    }
}
 
//Ex 2
const minNumber = (array) => {
    let retval = array[0]
    for (let i of array) {
        if (i < retval){
            retval = i
        }
    }
      return retval;
}

//Ex 1
const countNumbers = (array) => {
    let retval = 0;
    for (let i of array) {
      if (typeof(i) =='number') {
        retval++;
      }
    } 
    return retval;
}

const main = async () => {
    ex8();
}

main();

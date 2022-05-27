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
    const array1 = [1, 2, 3, 4, 5, 6];
    const array2 = ['a', 'b', 'c', 'd', 'e'];
    console.log(interleave(array1, array2));
}
const ex4 = () => {
    console.log(palidrome('radar'));
    console.log(palidrome('month'));
}
const ex5 = () => {
    const text = "today this is a this is a this is a test.";
    console.log(countOccurences(text, 'this'))
}
const ex6 = () => {
    const array = ['this', 'is', 'a', 'test', 'happy']
    console.log(longestString(array))
}
const ex7 = () => {
    let n = [1, 3, 6, 3, 6, 10];
    console.log(sort(n));
}
const ex8 = () => {
    let words = "Count the words in this string";
    console.log(countWords(words));
}
//
// Your functions here...
//
const countWords = (words) => {
   let retval = 0
   const array = words.split(" ")
   for (let i of array) {
       if (typeof(i) =='string')
       retval++
   }
   return retval
}


const sort = (arrayOfNumbers) => {
    const sortedArray = arrayOfNumbers.sort((a,b)=>a-b)
    return sortedArray
}
const longestString = (array) => {
    let longest = array[0]
    for(let i = 0; i < array.length; i++){
        if(array[i].length > longest.length){
            longest = array[i]
        }
    }
    return longest
}
const countOccurences = (text, searchWord) => {
    let retval = ''
    let wordCounter = 0
    const wordArray = text.split(" ")
        for (let word of wordArray) {
            if (searchWord == word) {
            wordCounter ++    
        }        
    }
    retval = "this appears: " + wordCounter + " times"
    return retval
}
const palidrome = (word) => {
    let retval = true

    const input = word.split("")
    const reverseArray = input.reverse("")
    const reversedWord = reverseArray.join("")

    if(reversedWord !== word)  {
    retval = false
}

    return retval
}
const interleave = (array1, array2) => {
    
    if(array1.length != array2.length) {
        return 'ERROR: Array length mismatch'
    }
}
const minNumber = (array) => {
    let retval = array[0];
    for (let i of array){
        if(i < retval){
            retval = i
        }
    }
    return retval 
} 
const countNumbers = (array) => {
    let retval = 0;
    for (let i of array){
        if(typeof(i)=='number'){
            retval++
        }
    }
    return retval;
}

const main = async () => {
    ex8();
}

main();

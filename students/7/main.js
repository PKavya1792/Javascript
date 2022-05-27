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

    // const array1 = [1, 2];
    // const array2 = ['a', 'b', 'c', 'd', 'e'];
    // console.log(interleave(array1, array2));
}
const ex4 = () => {
    console.log(palindrome('radar'));
    console.log(palindrome('month'));
}
const ex5 = () => {
    let str = "today this is a this is a this is a test.";
    console.log(wordRepeater(str))

}

const ex6 = () =>{
    const array = ['this', 'is', 'a', 'test', 'happy'];
    console.log(longestString(array));
}
const ex7 = () =>{
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

//
// Your functions here...
//

const countNumbers = (array) => {
    let retval = 0;
    for (const element of array) {
        if(typeof(element) == 'number'){
            retval += 1
        }
    }
    return retval;
}
const minNumber = (array) => {
    let retval = 0;
    for (const element of array) {
        if(element < retval){
            retval = element;
        } 
        else if(retval == 0)
        retval = element
    }
    return retval;
}
const interleave = (array1, array2) => {
    let length = 0;
    let retval = ""
    if(array1.length != array2.length){
        return "Error: Array length mismatch"
    }
    else{
        length = array1.length;
    }
    for(let i = 0; i < length; i++){
        retval += array1[i]
        retval += array2[i] 
    }
    return retval
} 

const palindrome = ( word) => {
    let re = /[\W_]/g
    let lowerWord = word.toLowerCase().replace(re, '')
    let reverword = lowerWord.split('').reverse().join('')
    return lowerWord == reverword
}
const wordRepeater = (word) =>{
    let retval = 0;
    const wordArray = word.split(' ')
    for (const element of wordArray) {
        if(element == 'this'){
            retval++
        }  
    }
    return retval
}
const longestString = (array) =>{
    let temp = ""
    for(const word of array){
        if(word.length > temp.length)
        temp = word
    }
    return temp
}
const sort = (n) =>{
    for (let i = 0; i < n.length; i++) { 
        for(let j = i + 1; j < n.length; j++){
            if(n[j] < n[i]){
                let temp = n[i]
                n[i] = n[j]
                n[j] = temp
            }
        }
    }
    return n;
}
const countWords = (words) =>{
    let retval = 0;
    const wordsSplit = words.split(' ')
    for (const word of wordsSplit) {
        retval += 1
    }
    return retval
}

const countS = (a) =>{
    let retval = 0
    const words = a.split(' ')
    for (const word of words) {
        const letters = word.split('')
        if (letters[word.length-1] == 's'){
            retval += 1
        }
    }
    return retval
}

const main = async () => {
    ex1();
    ex2();
    ex3();
    ex4();
    ex5();
    ex6();
    ex7();
    ex8();
    ex9();
}

main();

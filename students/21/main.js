//
// File: main.js
// Date: 5/25/2022
// 

const ex1 = () => {
    const array = [1, '2', 3, 'test', 1.2];
    console.log(countNumbers(array));
}

const ex2 = () => {
    // TODO...
    const array = [12, 55, 2, 22, 11];
    console.log(minNumber(array));
}

const ex3 = () => {
    // TODO...
    const array1 = [1, 2, 3, 4, 5];
const array2 = ['a', 'b', 'c', 'd', 'e'];
console.log(interleave(array1, array2));

const array3 = [1, 2];
const array4 = ['a', 'b', 'c', 'd', 'e'];
console.log(interleave(array3, array4));
}

const ex4 = () => {
    console.log(palidrome('radar'));
    console.log(palidrome('month'));
}

const ex5 = () => {
    let str = "today this is a this is a this is a test.";
    console.log(thisCounter(str))
}

const ex6 = () => {
    let array = ['this', 'is', 'a', 'test', 'happy'];
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
    var array = ["this", "is", "a", "test"];
    console.log(countLetters(array));
}

const ex10 = () => {

}

const ex11 = () => {

}

//
// Your functions here...
//

const countNumbers = (array) => {
    let retval = 0;
    // TODO...
    for(let i = 0; i<array.length; i++){
        if(typeof(array[i]) === 'number'){
            retval++
        }
    }
    return retval;
}

const minNumber = (array) => {
   let minNumber = array[0]
    for(let i = 0; i<array.length; i++){
        if(array[i]<minNumber){
            minNumber=array[i]
        }
    }
    return minNumber
}

const interleave = (array,array2) => { 
let retval = new Array
let i = 0
        if(array.length !== array2.length){
            throw new Error('Arrays are not equal in length')
        }
        else{
            while(i<array.length){
                let a = array[i]
                let b = array2[i]
                let c = a+b
                retval += c
                i++
            }
        }
        return retval
    }
    
const palidrome = (string) => {
    
    let array = Array.from(string)
    let reversed = array.reverse()
    let revString = reversed.toString()
    let revString2 =revString.replaceAll(',','')
    let isPalindrome = true
    if(revString2!==string){
        isPalindrome=false
    }
    return isPalindrome
}

const thisCounter = (string) => {
    let array = string.split(' ')
    let thisCount = 0;
    for(let i = 0; i<array.length; i++){
        if(array[i]=='this'){
            thisCount++
        }
    }
    return 'The word \"this\" occurs: ' +thisCount +' times.'
}

const longestString = (array) => {
    let longest = array[0]
    for(let i = 0; i<array.length; i++){
        if (array[i].length>longest.length){
            longest = array[i]
        }
    }
    return longest
}

const sort = (array) => {
    array.sort(function(a,b){return a-b})
    return array
}

const countWords = (string) => {
    let array = string.split(" ")
    let wordCount = array.length
    return wordCount
}

const countLetters = (array) => {
    let letterCount = 0
    for (const i of array) {
        letterCount += i.length
    }
    return letterCount
}

const main = async () => {
    ex9();
}

main();

//
// File: main.js
// Date: 5/24/2022
// 

//const ex1 = () => {

//  const array = [1, '2', 3, 'test', 1.2];

//console.log(countNumbers(array));
//}

//const ex2 = () => {
//const array = [12, 55, 2, 22, 11];

//console.log(minNumber(array));
//}

//const ex3 =() => {
// const array1 = [1, 2, 3, 4, 5];
// const array2 = ['a', 'b', 'c', 'd', 'e'];
// console.log(interleave(array1, array2));
//}
//ex4 starts here
//const ex4 = () => {
 //   console.log(palindrome('radar'));
  //  console.log(palindrome('month'));
//}
//const ex5 = () =>{
   // let text = "today this is a this is a this is a test.";
   // const result = countOccurences(text, "this")
   // console.log(result)
//}
const ex6 = () =>{
    const array = ['this', 'is', 'a', 'test', 'happy'];
    console.log(longestString(array));
}
const ex7 = () =>{
    let n = [1, 3, 6, 3, 6, 10];
console.log(sort(n));
}


//
// Your functions here...
//



//
//
//remember to use for of when dealing with arrays
//
const countNumbers = (array) => {
    let retval = 0;
    for (const i of array) {
        if (typeof (i) == 'number') {
            retval += 1;
        }
    }
    return retval;
}
//Ex 2 starts here
//const array = [12, 55, 2, 22, 11];
//console.log(minNumber(array));
const minNumber = (array) => {
    //use the first number then will loop
    //all of them and pick the lowest
    //arrays always needs to be checked against
    //something that is why [0]
    let retval = array[0]
    for (const i of array) {
        if ((i) < retval) {
            retval = i
        }
    }
    return retval

}
//EX 3 begins here
//const array1 = [1, 2, 3, 4, 5];
//const array2 = ['a', 'b', 'c', 'd', 'e'];
//console.log(interleave(array1, array2))
//ERROR: Array length mismatch

const interleave = (array1, array2) => {
    let retval = 'ERROR: Array length mismatch';
    if (array1.length == array2.length) {
        retval = '';
        for (let i = 0; i < array1.length; i++) {
            retval += array1[i] + array2[i];
        }
    }
    return retval;
}
//ex 4 starts here
const palindrome = (word) => {
    let retval = true
    const input = word.split("")
    const reverseArray = input.reverse("")
    const reverseWord = reverseArray.join("")

    if (reverseWord !== word) {
        retval = false
    }
    return retval
}
// ex5
const countOccurences = (text, searchWord) =>{
    let retval = ""
    let wordCounter = 0
    const wordArray = text.split(" ")
    for(let word of wordArray){
        if(searchWord == word ){
            wordCounter++
        }
    }
    retval = "this appears" + wordCounter +"timees"
    return retval
}
//ex6
const longestString = (myArray) =>{
    const longestString = myArray[0].length
    let retval =myArray.sort((a, b) => (a.length-b.length))
    return retval = myArray[myArray.length -1]
}
//ex7
    const sort = (arrayOfNumbers) => {
       const sortedArrayOfNumbers= arrayOfNumbers.sort((a,b) => (a-b))
       return sortedArrayOfNumbers
    }
const main = async () => {
    ex7();
}


main();
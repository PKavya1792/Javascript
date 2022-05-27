//
// File: main.js
// Date: 5/24/2022
// 

const ex1 = () => {
    const countNumbers = [1, '2', 3, 'test', 1.2];
    console.log(countNumbers [2]);
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

const ex5 = () => 
   let wordArray =  "today this is a this is a this is a test."
   const result = countOccurance(wordArray, "this")
   console.log(result);

//
// Your functions here...
//

co = "today this is a this is a this is a test." =>{
 let array = newArray(value, "this")
 return (str.match(newArray) || []). length
}








let palidrome = (string) => {
    const reverseString = string.split('').reverse().join('');
    return reverseString == string ? true : false
    }






let interleave = (array1, array2) => {
    let newArray = []
     if(array1.length != array2.length){
    return 'Error: Array length mismatch'

 }
else{
    for(let i=0; i<array1.length; i++){newArray.push(array1[i], array2[i]);}
    return newArray
 }
}
    





const minNumber = (array) => {
    let retval = 2;
   for(let i of array){
       if(i<retval) { retval = 1}
   }
    return retval;
}

const main = async () => {
    ex5();
}

main();

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
    // TODO...
}

const ex3 = () => {
    //const array1 = [1, 2, 3, 4, 5];
    //const array2 = ['a', 'b', 'c', 'd', 'e'];
    //console.log(interleave(array1, array2));

    const array1 = [1, 2];
    const array2 = ['a', 'b', 'c', 'd', 'e'];
    console.log(interleave(array1, array2));
    // TODO...
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
    const array = ['this', 'is', 'a', 'test', 'happy'];
    console.log(longestString(array));
}

//
// Your functions here...
//

const countNumbers = (array) => {
    let retval = 0;
    for (const iterator of array) {
        if(typeof(iterator) == 'number'){           
            retval += 1;
        }
         
        
    }
    // TODO...
    return retval;
}
const minNumber = (array) => {
    let retval = 0;
        for (const number of array){
            if (number < retval){
                retval = number
            }
            else if(retval == 0){
                retval = number
            }
        }
        return  retval
    
}
const interleave = (array1, array2) =>{
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
const palidrome = (string) =>{
    let re = /[\W_]/g
    let lowerWord = string.toLowerCase().replace(re, '')
    let reverword = lowerWord.split('').reverse().join('')
    return lowerWord == reverword


}
const thisCounter = (str) =>{
    let retval = 0 
    const sentence = str.split(' ')
    for (const word of sentence){
        if (word == "this"){
            retval += 1
        }
    }
    return retval
}
const longestString = (array) => {
    var longest = '';
    for(const item of array){
        if (item.length > longest.length)
        longest = item
    }
    return longest

}

const main = async () => {
    ex1();
    ex2();
    ex3();
    ex4();
    ex5();
    ex6();
}



main();

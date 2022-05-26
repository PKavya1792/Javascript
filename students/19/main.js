//
// File: main.js
// Date: 5/24/2022
// 

const ex1 = () => {
    const array = [1, '2', 3,'test', 1.2];
    console.log(countNumbers(array));
}

const ex2 = () => {
    const array = [12, 55, 2, 22, 11];
    console.log(minNumber(array));
    
}

const ex3 = () => {
    //usage1
    //const array1 = [1, 2, 3, 4, 5];
    //const array2 = ['a', 'b', 'c', 'd', 'e'];
   // console.log(interleave(array1, array2));
    //usage2
    const array1 = [1, 2];
    const array2 = ['a', 'b', 'c', 'd', 'e'];
    console.log(interleave(array1, array2));
}
const ex4 = () => {
    console.log(palindrome('radar'));
    console.log(palindrome('month'));
}

const ex5 = () => {
    let str = "today this is a this is a this is a test.";
    console.log(numberOfWord(str,'this')); 
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
//
// Your functions here...
//

const countNumbers = (array) => {
   let retval = 0;
    for(let i = 0; i < array.length; i++){
        if(typeof(array[i]) == 'number' )
        retval++;
        }
   return retval;
}

const minNumber = (array) => {
    array.sort(function(a, b) {return a-b});
     return array[0];
 }
 const interleave = (array1,array2)=> {
    let array = []; 
    if(array1.length == array2.length){
    for (let i=0; i<array1.length; i++){
         array.push(array1[i], array2[i]);
        }   
        return array;
 }
    else return "ERROR: Array length mismatch";
}

const palindrome = (string) => {
    let retval = "false";
    const str = string.split("").reverse().join("");
    if(string == str)  retval= "true";
    return retval;
    }

    const numberOfWord = (string,word) => {
        let retval = 0;
        let stringArray = string.split(" ");
        for(let i = 0; i < stringArray.length; i++){
            if(stringArray[i] == word) retval++
        }
        return retval;
        }

    const longestString = (array) => {
        let longestWord = ' ';
        let count = 0;
        let strSplit = array.toString().split(',')

        for(let i = 0; i < strSplit.length; i++) {
            if(strSplit[i].length > count){
                count = strSplit[i].length;
                longestWord = strSplit[i];
            }
        }
        return longestWord;
    }

    const sort = (array) => {
        array.sort(function(a, b){return a - b}); 
         return array;
     }

    const countWords = (string) => {
        let retval = 0;
        let strSplit = string.split(" ");
        for(let i = 0; i < strSplit.length; i++){
            retval++;
       }
        return retval;
        
    }

const main = async () => {
    //ex1();
    //ex2();
    //ex3();
    //ex4();
    // ex5();
    //ex6();
    //ex7();
    ex8();
}

main();

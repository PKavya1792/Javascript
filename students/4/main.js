//
// File: main.js
// Date: 5/27/2022
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



//
// Your functions here...
//
//ex 1
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
//ex2
const minNumber = (array) => {
   let minNumber = array[0]
    for(let i = 0; i<array.length; i++){
        if(array[i]<minNumber){
            minNumber=array[i]
        }
    }
    return minNumber
}

   //ex4 
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
  //ex5
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


const main = async () => {
    ex1();
    ex2();
    ex4();
    ex5();
    

   
    
}
main ()

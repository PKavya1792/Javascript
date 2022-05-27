//
// File: main.js
// Date: 5/24/2022
// Wendy's Branch

// Ex 1
const ex1 = () => {
  const array = [1, "2", 3, "test", 1.2];
  console.log(countNumbers(array));
};
// Ex 1 Function
const countNumbers = (array) => {
    let retval = 0; 
    for (let i = 0; i < array.length; i++) { 
      if (typeof array[i] === "number") {  
        retval++;
      }
    }
    return retval;
};


// Ex 2
const ex2 = () => {
  const array = [12, 55, 2, 22, 11];
  console.log(minNumber(array));
};

// Ex 2 Function
const minNumber = (array) => {
    let retval = array[0]  //initializing retval as the first element
    for (let i = 1; i < array.length; i++) { // Going through each element of the array and compare it
      if (array[i] < retval) {  //  If it’s smaller then stored one then replace it.
        retval = array[i];
      }
    }
    return retval;
};


// Ex 3
const ex3 = () => {
  const array1 = [1, 2, 3, 4, 5];
  const array2 = ["a", "b", "c", "d", "e"];
  console.log(interleave(array1, array2));
};
// Ex 3 Function
const interleave = (array1, array2) => {
    let retval = 0;
    if (array1.length == array2.length) { // if the length of both arrays is the same, retval will become an empty array
      retval = [];
      for (let i = 0; i < array2.length; i++) {   // for all the indexes in the array, the empty array of retval will push inside array1 and array2
        retval.push(array1[i], array2[i]);
      }
      return retval;
    } else {
      array1.length != array2.length;     // if the length of both arrays is not the same then return retval
      retval = "ERROR: Array length mismatch";
      return retval;
    }
};


//Ex 4
const ex4 = () => {
  console.log(palindrome("radar"));
  console.log(palindrome("month"));
};
//Ex 4 Function
const palindrome = (String) => {
    let leng = String.length; // find the lengh of the string
    for (let i = 0; i < leng / 2; i++) { // loop through half of the string
      if (String[i] !== String[leng - 1 - i]) { // check if first and last string are same
        return "false";
      }
    }
    return true;
};


//Ex 5
const ex5 = () => {
  let str = "today this is a this is a this is a test.";
  console.log(`this appears: ${countOccurences(str, "this")} times.`);
};
//Ex 5 Function
const countOccurences = (String,word) => {
    return String.split(word).length -1  //splits the string and puts those substrings into an array,
}                                     // then, it determines the count by using the length of the resulting array.


//Ex 6
const ex6 = () => {
  const array = ["this", "is", "a", "test", "happy"];
  console.log(longestString(array));
};
// Ex 6 Function
const longestString = (array) => {
    let longest = 0;
    let lgth = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i].length > lgth) { //if the length of the index of the array is greater than lgth
        longest = array[i];         // then longest will become said index of that array
      }
    }
    return longest;
};


//Ex 7
const ex7 = () => {
  let n = [1, 3, 6, 3, 6, 10];
  console.log(sort(n));
};
//Ex 7 Function
const sort = (array) => {
    let retval = 0;
    for (let i = 0; i < array.length; i++) {
      retval = array.sort((a, b) => {
        if (a > b) return retval + 1; //If compare(a,b) is less than zero, the sort() method sorts a to a lower index than b. In other words, a will come first.
        if (a < b) return retval - 1; // If compare(a,b) is greater than zero, the sort() method sort b to a lower index than a, i.e., b will come first.
      });
    }
    return retval; // If compare(a,b) returns zero, the sort() method considers a equals b and leaves their positions unchanged.
};


//Ex 8
const ex8 = () =>{
    let words = "Count the words in this string";
    console.log(countWords(words));
}
//Ex 8 Function
const countWords = (String) =>{
    let count = String.length
     count = String.split(' ').length // spliting the substrings (words) by spaces 
     return count
}


// Ex 9
const ex9 = () =>{
    var a = "this counts the number of words that end in s";
    console.log(countS(a));
}
// Ex 9 Function
const countS = (String) =>{
    let count = 0
     let strng = String.split(' ') // spliting the substrings (words) by spaces 
     for (let i = 0; i < strng.length; i++) { // going through all the characters in the words.
         if (strng[i].endsWith('s')) {
             count++
         }
     }
     return count
}


//Ex 10
const ex10 = () =>{
    var array = ["this", "is", "a", "test"];
    console.log(countLetters(array));
}
// Ex 10 Function
 const countLetters = (array) => {
    /* let count = 0;
    count = array.map(entry => 
        Array.from(entry).reduce((counter, notCh) =>         WORK IN PROGRESS
        notCh === ',' ? counter : counter + 1 , 0
    ));
    return count*/
    return array.join("").length;
 }


 // Ex 11
 const ex11 = () => {
    let arr = ['dog', 3, 7, 'cat', 13, 'car'];
    console.log(numbersOnly(arr));
 }
 //Ex 11 Function
 const numbersOnly = (array) => {
    let retval = []
    for (let i = 0; i < array.length; i++) { 
        if (typeof array[i] === "number") {  
        retval.push(array[i])
      }
    }
    return retval;
 } 
 


const main = async () => {
 // ex1();
 // ex2();
 // ex3();
 // ex4();
 // ex5();
 // ex6();
 // ex7();
 // ex8();
 // ex9();
 // ex10();
 ex11();
};

main();

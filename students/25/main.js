//
// File: main.js
// Date: 5/24/2022
// Wendy's Branch

const ex1 = () => {
  const array = [1, "2", 3, "test", 1.2];
  console.log(countNumbers(array));
};

const ex2 = () => {
  const array = [12, 55, 2, 22, 11];
  console.log(minNumber(array));
};

const ex3 = () => {
  const array1 = [1, 2, 3, 4, 5];
  const array2 = ["a", "b", "c", "d", "e"];
  console.log(interleave(array1, array2));
};

const ex4 = () => {
  console.log(palindrome("radar"));
  console.log(palindrome("month"));
};

const ex5 = () => {
    let str = "today this is a this is a this is a test.";
    console.log( `this appears: ${(countOccurences(str, "this"))} times.`)
}
//
// Your functions here...
//

const countNumbers = (array) => {
  let retval = 0; 
  for (let i = 0; i < array.length; i++) { 
    if (typeof array[i] === "number") {  
      retval++;
    }
  }
  return retval;
};

const minNumber = (array) => {
  let retval = array[0];  //initializing retval as the first element
  for (let i = 1; i < array.length; i++) { // Going through each element of the array and compare it
    if (array[i] < retval) {  //  If it’s smaller then stored one then replace it.
      retval = array[i];
    }
  }
  return retval;
};

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

const palindrome = (String) => {
  let leng = String.length; // find the lengh of the string
  for (let i = 0; i < leng / 2; i++) { // loop through half of the string
    if (String[i] !== String[leng - 1 - i]) { // check if first and last string are same
      return "false";
    }
  }
  return true;
};

const countOccurences = (String,word) => {
 return String.split(word).length -1  //splits the string and puts those substrings into an array,
}                                     // then, it determines the count by using the length of the resulting array.

const main = async () => {
  ex5();
};

main();

//
// File: main.js
// Date: 5/24/2022
//

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

const ex3b = () => {
  const array1 = [1, 2];
  const array2 = ["a", "b", "c", "d", "e"];
  console.log(interleave(array1, array2));
};

const ex4 = () => {
  console.log(palidrome("radar"));
  console.log(palidrome("month"));
};

const ex5 = () => {
  let str = "today this is a this is a this is a test.";

  console.log(countString(str));
};

const ex6 = () => {
  const array = ["this", "is", "a", "test", "happy"];
  console.log(longestString(array));
};

const ex7 = () => {
  let n = [1, 3, 6, 3, 6, 10];
  console.log(sort(n));
};

const ex8 = () => {
  let words = "Count the words in this string";
  console.log(countWords(words));
};

const ex9 = () => {
  var a = "this counts the number of words that end in s";
  console.log(countS(a));
};

const ex10 = () => {
  var array = ["this", "is", "a", "test"];
  console.log(countLetters(array));
};

const ex11 = () => {
  let arr = ["dog", 3, 7, "cat", 13, "car"];
  console.log(numberOnly(arr));
};

//
// Your functions here...
//

//1
const countNumbers = (array) => {
  let retval = 0;
  for (let num of array) {
    if (typeof num === "number") {
      retval += 1;
    }
  }

  return retval;
};
//2
const minNumber = (array) => {
  let retval = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < retval) {
      retval = array[i];
    }
  }
  return retval;
};

//3
const interleave = (array1, array2) => {
  if (array1.length === array2.length) {
    let retval = [];
    for (let i = 0; i < array2.length; i++) {
      retval.push(array1[i]);
      retval.push(array2[i]);
    }
    return retval.join("");
  } else {
    let retval = "ERROR: ARRAY length mismatch";
    return retval;
  }
};

//4
const palidrome = (phrase) => {
  let reverse = phrase.split("").reverse().join("");

  if (phrase === reverse) {
    return true;
  } else {
    return false;
  }
};

//5

const countString = (str) => {
  let retval = 0;
  let arr = str.split(" ");

  for (let word of arr) {
    if (word === "this") {
      retval++;
    }
  }
  return retval;
};

//6
const longestString = (array) => {
  let retval = "";

  for (let word of array) {
    if (word.length > retval.length) {
      retval = word;
    }
  }

  return retval;
};

//7

const sort = (n) => {
  let retval = n.sort(function (a, b) {
    return a - b;
  });
  return retval;
};

//8

const countWords = (words) => {
  let arr = words.split(" ");

  return arr.length;
};

//9

const countS = (a) => {
  let retval = 0;

  let arr = a.split(" ");
  for (let i of arr) {
    if (i.endsWith("s")) {
      retval++;
    }
  }
  return retval;
};

//10
const countLetters = (array) => {
  let retval = array.join("");
  return retval.length;
};

//11
const numberOnly = (arr) => {
  let retval = [];

  for (let num of arr) {
    if (typeof num === "number") {
      retval.push(num);
    }
  }

  return retval;
};

const main = async () => {
  ex11();
};

main();

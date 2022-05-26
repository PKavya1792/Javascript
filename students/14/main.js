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

const ex31 = () => {
  const array1 = [1, 2];
  const array2 = ["a", "b", "c", "d", "e"];
  console.log(interleave(array1, array2));
};

const ex4 = () => {
  console.log(palindrome("radar"));
  console.log(palindrome("month"));
};

const ex5 = () =>{
  let str = "today this is a this is a this is a test.";
  console.log("this appears: "+(numWords(str, "this" ))+ " times.");
}

const ex6 = () =>{
  array = ['this', 'is', 'a', 'test', 'happy'];
  console.log(longestString(array));
}
//
// Your functions here...
//

const countNumbers = (array) => {
  let retval = 0;
  for (const i of array) {
    if (typeof i == "number") {
      retval++;
    }
  }
  return retval;
};

const minNumber = (array) => {
  let retval = 0;
  retval = Math.min.apply(null, array);
  return retval;
};

const interleave = (array1, array2) => {
  if (array1.length == array2.length) {
    let retval = [];
    for (let i = 0; i < array2.length; i++) {
      retval.push(array1[i]);
      retval.push(array2[i]);
    }
    return retval;
  } else {
    array1.length != array2.length;
    let retval = "Error: Array length mismatch";
    return retval;
  }
};

const palindrome = (str) => {
  // let splitString = str.split(" ");
  // let reverseArray = splitString.reverse();
  // let joinArray = reverseArray.join(" ");
  let pal = str.split("").reverse().join("");
  if (pal == str) {
    let retval = true;
    return retval;
  } else {
    let retval = false;
    return retval;
  }
};

const numWords = (str, word) => {
  return str.split(word).length-1; 
}

const main = async () => {
  ex1();
  ex2();
  ex3();
  ex31();
  ex4();
  ex5();
  ex6();
};

main();

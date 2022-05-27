//
// File: main.js
// Date: 5/24/2022
//
const main = async () => {
 // ex1();
 // ex2();
 // ex3();
 // ex31();
 // ex4();
 // ex5();
 // ex6();
 // ex7();
 // ex8();
 // ex9();
 // ex10();
 // ex11();
 ex12();
};

//
//Exercises
//

const ex1 = () => {
  const array = [1, "2", 3, "test", 1.2];
  console.log(countNumbers(array));
};

const countNumbers = (array) => {
  let retval = 0;
  for (const i of array) {
    if (typeof i == "number") {
      retval++;
    }
  }
  return retval;
};

const ex2 = () => {
  const array = [12, 55, 2, 22, 11];
  console.log(minNumber(array));
};

const minNumber = (array) => {
  let retval = 0;
  retval = Math.min.apply(null, array);
  return retval;
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

const ex4 = () => {
  console.log(palindrome("radar"));
  console.log(palindrome("month"));
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

const ex5 = () => {
  let str = "today this is a this is a this is a test.";
  console.log("this appears: " + numWords(str, "this") + " times.");
};

const numWords = (str, word) => {
  return str.split(word).length - 1;
};

const ex6 = () => {
  let array = ["this", "is", "a", "test", "happy"];
  console.log(longestString(array));
};

const longestString = (array) =>{
let retval =0;
for(let i=0; i<array.length; i++){
  if(array[i].length>0){
    retval = array[i];
  }
} return retval;
}

const ex7 = () => {
  let n = [1, 3, 6, 3, 6, 10];
  console.log(sort(n));
}

const sort = (n) => {
  let retval=0;
  for (let i=0; i<n.length; i++){
    retval= n.sort(function(a,b){return a-b;});
  }return retval;
}

const ex8 = () => {
  let words = "Count the words in this string";
   console.log(countWords(words));
}

const countWords = (words) =>{
  let retval=0;
  let split=0;
  for (let i =0; i< words.length; i++){
    split= words.split(" ");
    retval=split.length;
  }return retval;
}

const ex9 = () =>{
  var a = "this counts the number of words that end in s";
  console.log(countS(a));
}

const countS = (a) => {
  var retval= a.split("s").length-1;
  return retval;
}

const ex10 = () =>{
  var array = ["this", "is", "a", "test"];
  console.log(countLetters(array));
}

const countLetters = (array) =>{
let string = array.join("");
let retval =0;
  for (let i =0; i< string.length; i++){
  retval++;
}return retval;
}

const ex11 = () => {
  let arr = ['dog', 3, 7, 'cat', 13, 'car'];
  console.log(numbersOnly(arr));
}

const numbersOnly = (arr) => {
  return arr.filter(Number);
}

const ex12 = () => {
  const c = new Calculator();
  c.add(1,2);
  c.sub(4,1);
  c.div(10,2);
  c.mul(2,2)
  console.log(c.getHistory())
}

class Calculator {
  constructor() {this.history = [];}
   add = (num1, num2) => {
    let retval = num1 + num2;
    this.history.push(retval);
    return ("Add: ${num1} + ${num2} = ${retval}");
  }
   sub = (num1, num2) => {
    let retval = num1 - num2;
    this.history.push(retval);
    return ("Sub: ${num1} - ${num2} = ${retval}");
  } 
   div = (num1, num2) => {
    let retval = num1 / num2;
    this.history.push(retval);
    return ("Div: ${num1} / ${num2} = ${retval}");
  }
   mul = (num1, num2) => {
    let retval = num1 * num2;
    this.history.push(retval);
    return ("Mul: ${num1} * ${num2} = ${retval}");
  }
   getHistory = () => {
    return this.history.join();
  }
}



//
//main
//
main();


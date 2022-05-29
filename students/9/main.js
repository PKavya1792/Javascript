// Date: 5/24/2022
//

const ex1 = () => {
  // Usage
  const array = [1, "2", 3, "test", 1.2];
  console.log(countNumbers(array));
// Output: 3
}; 

const ex2 = () => {
  // Usage
  const array = [12, 55, 2, 22, 11];
  console.log(minNumber(array));
  // Output: 2
};

const ex3 = () => {
    // Usage 1
  const array1 = [1, 2, 3, 4, 5];
  const array2 = ['a', 'b', 'c', 'd', 'e'];
  console.log(interleave(array1, array2));
  // Output: 1a2b3c4d5e
};
  // Usage 2
 /* const array1 = [1, 2];
  const array2 = ["a", "b", "c", "d", "e"];
  console.log(interleave(array1, array2));
  // Output: ERROR: Array length mismatch
};*/

const ex4 = () => {
  console.log(palidrome("radar"));
  console.log(palidrome("month"));
  // Output: true false
};

const ex5 = () => {
  let str = "today this is a this is a this is a test.";
  let newStr = str.split("this").length - 1;
  console.log("'this' appears: " + newStr + " times");
};

const ex6 = () => {
  let array = ["this", "is", "a", "test", "happy"];
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
  console.log(numbersOnly(arr));
};

const ex12 = () => {
  const c = new Calculator();
  c.add(1, 2);
  c.sub(4, 1);
  c.div(10, 2);
  c.mul(2, 2);
  console.log(c.getHistory());
};

const ex13 = () => {
  let dict = [
    { firstName: "joe", lastName: "smith", age: 10 },
    { firstName: "paul", lastName: "simmon", age: 20 },
    { firstName: "fred", lastName: "jones", age: 30 },
  ];
  let result = dict.map((a) => a.age);
  let sum = 0;
  for (let i = 0; i < result.length; i++) {
    sum += result[i];
  }
  console.log(sum);
};

const ex14 = () => {
  let customers = [
    {
      name: "ABC Inc",
      credit: 100,
    },
    {
      name: "ACME Corp",
      credit: 200,
    },
    {
      name: "IoT AG",
      credit: 300,
    },
  ];
  console.log(customers.find((c) => c.credit === 200));
};

/* Ex.1 function:

const countNumbers = (array) => {

let retval = 0;
for (let i of array) {
if (typeof(i) == "number") {
 retval++;
 }
}
return retval;
}*/

/* Ex.2 function:

const countNumbers = (array) => {

let retval = 0;
for (let i of array) {
if (typeof(i) == "number") {
 retval++;
 }
}
return retval;
}

const main = async () => {
    ex2();
};

main();*/

//Ex. 3 function:

/*const interleave = (array1, array2) => {
    let retval = 0;
    if (array1.length != array2.length) {
        console.log('ERROR: Array length mismatch')
} 
else {
    for (let i = 0; i < array1.length; i++) {
        retval += array1[i] + array2[i];
    }
}
    return retval;
}*/


// Ex. 4 function:

const minNumber = (array) => {
}

const countNumbers = (array) => {
}

const interleave = (array1, array2) => {
}

const palidrome = (word) => {
    let retval = true;

const input = word.split("");
const reverseArray = input.reverse("");
const reversedWord = reverseArray.join("");

if (reversedWord != word) {
    retval = false;
}
return retval;
}

const main = async () => {
  // ex1();
  // ex2();
  // ex3();
  ex4();
  // ex5();
  // ex6();
  // ex7();
  // ex8();
  // ex9();
  // ex10();
  // ex11();
  // ex12();
  //ex13();
  // ex14();
};
main();

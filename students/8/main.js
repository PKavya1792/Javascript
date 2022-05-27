//
// File: main.js
// Date: 5/24/2022
// 
import { Calculator } from "./Calculator.js";

const ex1 = () => {
    const array1 = [1, '2', 3, 'test', 1.2];
    console.log(countNumbers(array1));
}

const ex2 = () => {
    const array2 = [12, 55, 2, 22, 11];
    console.log(minNumber(array2));
}

const ex3 = () => {
    const array3 = [1, 2, 3, 4, 5];
    const array4 = ['a','b','c','d','e'];
    console.log(interleave(array3, array4));   
}

const ex4 = () => {
    console.log(palindrome('radar'));
    console.log(palindrome('month'));
}

const ex5 = () => {
    let str = "today this is a this is a this is a test.";
    console.log(countRepeatWords(str))
}

const ex6 = () => {
    const array = ['this', 'is', 'a', 'test', 'happy'];
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
    var a = "this counts the number of words that end in s";
    console.log(countS(a));
}

const ex10 = () => {
    var array = ["this", "is", "a", "test"];
    console.log(countLetters(array));
}

const ex11 = () => {
    let arr = ['dog', 3, 7, 'cat', 13, 'car'];
    console.log(numbersOnly(arr));
}

const ex12 = () => {
    const c = new Calculator();
    c.add(1,2);
    c.sub(4,1);
    c.div(10,2);
    c.mul(2,2)
    console.log(c.getHistory())
}

const ex13 = () => {
    let dict = [
        { "firstName": "joe", 
          "lastName": "smith", 
          age: 10 },

        { "firstName": "paul", 
          "lastName": "simmon", 
          age: 20 },

        { "firstName": "fred", 
          "lastName": "jones", 
          age: 30 },
    ]
    console.log(getTotalAge(dict))
}

const ex14 = () => {
    let customers = [{
        name: 'ABC Inc',
        credit: 100
    }, {
        name: 'ACME Corp',
        credit: 200
    }, {
        name: 'IoT AG',
        credit: 300
    }];
    console.log(creditFinder(customers))
}

//
// Your functions here...
//

const countNumbers = (array1) => {
    let retval = 0;
    for (let i = 0; i < array1.length; i++) {
        if (typeof(array1[i]) === 'number') {
            retval += 1
        }
    }
    return retval
}

const minNumber = (array2) => {
    array2.sort(function(a, b){return a - b});
    return array2[0]
}

const interleave = (array3, array4) => {
    let newArray = [];
    for (let i = 0; i < array4.length; i++) {
        newArray.push(array3[i], array4[i])
    }

    if (newArray.includes(undefined)) {
        return "ERROR: Array length mismatch"
    } else {
        return newArray.toString()
    }
}

const palindrome = (str) => {
    let normalArray = str.split("")
    let reversedArray = str.split("").reverse()
    let normal = normalArray.join("")
    let reversed = reversedArray.join("")
    if (normal == reversed) {
        return true
    } else {
        return false
    }
}

const countRepeatWords = (str) => {
    let retval = 0;
    const strArray = str.split(" ")
    for (let i = 0; i < strArray.length; i++) {
        if (strArray[i] == 'this') {
            retval += 1
        }
    }
    return "'This' appears " + retval + " times."
}

const longestString = (array) => {
    const sorted = array.sort((a, b) => b.length - a.length)
    return array[0].toString()
}

const sort = (n) => {
    const arr = n.sort((function(a, b){return a - b}))
    return arr
}

const countWords = (words) => {
    const wordsArr = words.split(" ")
    return wordsArr.length
}

const countS = (a) => {
    let retval = 0;
    const aArr = a.split(" ")
    for (let i = 0; i < aArr.length; i++) {
        if (aArr[i].includes("s")) {
            retval += 1
        }
    }
    return retval
}

const countLetters = (array) => {
    let retval = 0;
    for (let i = 0; i < array.length; i++) {
        retval += array[i].length
    }
    return retval
}

const numbersOnly = (arr) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'number') [
            newArr.push(arr[i])
        ]
    }
    return newArr
}

const getTotalAge = (dict) => {
    let totalAge = 0;
    for (let i = 0; i < dict.length; i++) {
        totalAge += dict[i].age
    }
    return "The total age is: " + totalAge
}

const creditFinder = (customers) => {
    let i = 0
    while (i < customers.length) {
        i++
        if (customers[i].credit == 200) {
            return customers[i]
        }
    }
}

const main = async () => {
    ex14()
}

main();

//
// File: main.js
// Date: 5/24/2022
// 

const main = async () =>{
    // ex1();
    // ex2();
    // ex3();
    // ex4();
    // ex5();
     ex6();
    // ex7();
    // ex8();
    // ex9();
    // ex10();
    // ex11();
    // ex12();
     ex13();
    // ex14();
}

let ex1 = () => {
    const array = [1, '2', 3, 'test', 1.2];
    console.log(countNumbers(array));
}

const countNumbers = (array) => {
    let arr = array.filter(el => typeof el === 'number');
    return arr.length;
 }

let ex2 = () => {
    const array = [12, 55, 2, 22, 11];
    console.log(minNumber(array));
}

const minNumber = (array) => {
    // return Math.min.apply( Math, array)
    for(let i of array) {
        array.sort(function(a, b){return a - b});
    }
    return array[0]
}

let ex3 = () => {
    //usage 1
    const array1 = [1, 2, 3, 4, 5];
    const array2 = ['a', 'b', 'c', 'd', 'e'];
    console.log(interleave(array1, array2));
    //usage 2
    // const array1 = [1, 2];
    // const array2 = ['a', 'b', 'c', 'd', 'e'];
    // console.log(interleave(array1, array2));
}

const interleave = (array1, array2) => {
    let arr = [];
    let i = 0;
    if(array1.length === array2.length){
        for(let i = 0; i < array1.length; i++){
            arr.push(array1[i], array2[i])
        }
        return arr.join();
    }
    else {
        return "ERROR: Array length mismatch"
    }
}

let ex4 = () => {
    console.log(palidrome('radar'));
    console.log(palidrome('month'));
}

const palidrome = (word) => {
    let result = word.split("").reverse().join("");
    if(word === result){
        return true;
    }
    else {
        return false;
    }
}

let ex5 = () => {
    let str = "today this is a this is a this is a test.";
    let newStr = str.split("this").length -1;
    console.log("'this' appears: " + newStr + " times")
}

let ex6 = () => {
    let array = ['this', 'is', 'a','happy', 'test' ];
    console.log(longestString(array));
}

const longestString = (array) => {
    return array.sort(function (a, b) {
        return a.length - b.length;
    })[array.length -1]
}

let ex7 = () => {
    let n = [1, 3, 6, 3, 6, 10];
    console.log(sort(n));
}

const sort = (array) => {
    return array.sort(function(a, b){return a - b})
}

let ex8 = () => {
    let words = "Count the words in this string";
    console.log(countWords(words));
}

const countWords = (word) => {
    return word.split(" ").length
}

let ex9 = () => {
    let a = "this counts the number of words that end in s";
    console.log(countS(a));
}

const countS = (word) => {
    let newStr = word.split("s").length -1
    return newStr
}

let ex10 = () => {
    let array = ["this", "is", "a", "test"];
    console.log(countLetters(array));
}

const countLetters = (array) => {
    let arr = array.join("")
    return arr.length
}

let ex11 = () => {
    let arr = ['dog', 3, 7, 'cat', 13, 'car'];
    console.log(numbersOnly(arr));
}

const numbersOnly = (array) => {
    return array.filter(el => typeof el === 'number');
}

let ex12 = () => {
    const c = new Calculator();
    c.add(1,2);
    c.sub(4,1);
    c.div(10,2);
    c.mul(2,2)
    console.log(c.getHistory())
}

class Calculator{
    constructor(){
       this.history = []
    }
    add(num1, num2){
        const sum = num1 + num2;
        this.history.push(`Add: ${num1} + ${num2} = ${sum}`);
        return sum;
    }
    sub(num1, num2){
        const sum = num1 - num2;
        this.history.push(`Sub: ${num1} - ${num2} = ${sum}`);
        return sum;
    }
    div(num1, num2){
        const sum = num1 / num2;
        this.history.push(`Div: ${num1} / ${num2} = ${sum}`);
        return sum;
    }
    mul(num1, num2){
        const sum = num1 * num2;
        this.history.push(`Mul: ${num1} * ${num2} = ${sum}`);
        return sum;
    }
    getHistory(){
        return this.history.join('\r\n');
    }
}

let ex13 = () => {
    let dict = [
        { "firstName": "joe", "lastName": "smith", age: 10 },
        { "firstName": "paul", "lastName": "simmon", age: 20 },
        { "firstName": "fred", "lastName": "jones", age: 30 },
    ]
    let result = dict.map(a => a.age);
    let sum = 0;
    for (let i = 0; i < result.length; i++) {
        sum += result[i];
    }
    console.log(sum)
}

let ex14 = () => {
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
    console.log(customers.find(c => c.credit === 200))
}
//
//Main
//
main() 

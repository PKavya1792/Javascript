//
// File: main.js
// Date: 5/24/2022
// 

const ex1 = () => {
    const array = [1, '2', 3, 'test', 1.2];
    console.log(countNumbers(array));
}

const ex2 = () => {
    const array = [12, 55, 2, 22, 11];
    console.log(minNumber(array));
}

const ex3 = () => {
    const array1 = [1, 2, 3, 4, 5];
    const array2 = ['a', 'b', 'c', 'd', 'e'];
    console.log(interleave(array1, array2));
}

const ex4 = () => {
    console.log(palidrome('radar'));
    console.log(palidrome('month'));
}

const ex5 = () =>{
    let str = "today this is a this is a this is a test.";
    const string = 'this';
    const words = str.split(" ");
    let stringCount = 0;
    for(let i = 0; i < words.length; i++){
        if(words[i] === string){
            stringCount++;
        }
    }
    console.log("this appears: " + stringCount +" times.");
}
const ex6 = () => {
    let array = ['this', 'is', 'a', 'test', 'happy'];
    console.log(longestString(array));
}

const ex7 = () => {
    let n = [1, -3, 6, 3, 6, 10];
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

const ex10 = () =>{
    var array = ["this", "is", "a", "test"];
    console.log(countLetters(array));
}

const ex11 = () =>{
    let array = ['dog', 3, 7, 'cat', 13, 1.2];
    console.log(countIt(array, "numbers"));

    // let array = ['dog', 3, 7, 'cat', 13, 1.2];
    console.log(countIt(array, "strings"));

    // let array = ['dog', 3, 7, 'cat', 13, 1.2];
    console.log(countIt(array, "decimals"));
   
}

const ex12 = () =>{
    const c = new Calculator();
    c.add(1,2);
    c.sub(4,1);
    c.div(10,2);
    c.mul(2,2)
    console.log(c.getHistory())
}

const ex13 = () =>{
    let dict = [
        { "firstName": "joe", "lastName": "smith", age: 10 },
        { "firstName": "paul", "lastName": "simmon", age: 20 },
        { "firstName": "fred", "lastName": "jones", age: 30 },
    ]
    let totalAge = 0;
    for(let i of dict){
        totalAge += i.age;
    }
    
    console.log('The total age is: ' + totalAge);
}

const ex14 = () =>{
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

    const cust = customers.map(myfunction)
    for(let i of cust){
        if ( i != undefined){
            console.log(i)
        }
    }
    
    function myfunction(item){
        if(item.credit == 200){
            return item;
        }
    }
}

//
// Your functions here...
//

const countNumbers = (array) => {
    let retval = 0;
    for(let i=0; i<array.length;i++){
        if(typeof(array[i])=="number"){
            if(array[i] % 1 === 0){
                retval++;
            }
        }
        
    }
    return retval;
}

const minNumber = (array) =>{
    const retval = Math.min(...array);
    return retval;
}

const interleave = (array1, array2) =>{
    let retval = '';
    if(array1.length === array2.length || array1.length > array2.length){
        for(let i = 0; i< array1.length; i++){
            retval+=array1[i]+array2[i];
        }
    }
    else if(array1.length < array2.length){
        for(let i = 0; i< array2.length; i++){
            retval+=array1[i]+array2[i];
        }
    }
    return retval;
}
const palidrome = (string) => {
    let retval = true;
    for(let i = 0; i <= string.length/2; i++){
        if(string[i]==string[string.length - i - 1]){
            retval = true;
        }
        else{
            retval = false;
            break;
        }
    }
    return retval;
}

const longestString = (array) =>{
    let lengthofWords= [];
    let index = 0;
    for(let i of array){
        lengthofWords.push(i.length);
    }
    while(array[index].length!=Math.max(...lengthofWords)){
        index++;
    }
    return array[index];
}
const sort = (array) =>{
    return array.sort(function(a, b){return a - b});
}

const countWords = (string) =>{
    let stringArray = string.split(" ");
    return stringArray.length;
}

const countS = (string) => {
    let stringArray = string.split(" ");
    let wordCount = 0;
    for(let i = 0; i < stringArray.length; i++){
        if(stringArray[i][stringArray[i].length - 1] == 's'){
            wordCount++;
        }
    }
    return wordCount;
}

const countLetters = (array) =>{
    let letterCount = 0;
    for(let i = 0; i < array.length; i++){
        letterCount += array[i].length;
    }
    return letterCount;
}

const countIt = (array, string) =>{
    let num = 0;
    if(string === 'numbers'){
        num = countNumbers(array);
    }
    else if(string === 'strings'){
        num = countStrings(array);
    }
    else if(string === 'decimals'){
        num = countDecimals(array);
    }
    return num;
}

const countStrings = (array) =>{
    let retval = 0;
    for(let i=0; i<array.length;i++){
        if(typeof(array[i])=="string")
        retval++;
    }
    return retval;
}

const countDecimals = (array) =>{
    let retval = 0;
    for(let i=0; i<array.length;i++){
        if(typeof(array[i])=="number"){
            if(array[i] % 1 != 0){
                retval++;
            }
        }
        
    }
    return retval;
}

class Calculator{
    
    constructor(a,b){
        this.a = a;
        this.b = b;
        this.string = '';
    }
    add = (a,b) =>{
        this.getHistory(`Add: ${a} + ${b} = ${a+b} \n`);
    }
    sub = (a,b) =>{
        this.getHistory(`Sub: ${a} - ${b} = ${a-b} \n`);
    }
    div = (a,b) =>{
        this.getHistory(`Div: ${a} / ${b} = ${a/b} \n`);
    }
    mul = (a,b) =>{
        this.getHistory(`Mul: ${a} * ${b} = ${a*b} \n`);
    }
    getHistory(history){
        if(history!=undefined){
            this.string += history;
        }
        else{
            return this.string;
        }
    }

}

const main = async () => {
   // ex1();
    //ex2();
    // ex3();
    // ex4();
    // ex5();
    // ex6();
    // ex7();
    // ex8();
    // ex9();
    // ex10();
     ex11();
    // ex12();
    // ex13();
    // ex14();
}

main();

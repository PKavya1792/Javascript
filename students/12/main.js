//
// File: main.js
// Date: 5/24/2022
// 

const ex1 = () => {
    const array = [1, '2', 3, 'test', 1.2];
    console.log(countNumbers(array));
}

//
// Your functions here...
//

// const countNumbers = (array) => {
//     let retval = 0;
//     for(let i = 0; i < array.length; i++){
//         if (typeof(array[i]) === 'number'){
//             retval++;
//         }
//     }
//     return retval;
// }


//
//ex2
//

const ex2 = () => {
    const array = [12, 55, 2, 22, 11];
    console.log(minNumber(array));
}

//
// Your functions here...
//

const minNumber = (array) => {
    let retval = array[0];
    for(let i of array){
        if(i < retval){
            retval = i;
        }
    }
    return retval;
}


//
//ex3
//
const ex3 = () => {
    const array1 = [1, 2, 3, 4, 5];
    const array2 = ['a', 'b', 'c', 'd', 'e'];
    console.log(interleave(array1, array2));

    const array3 = [1, 2];
    const array4 = ['a', 'b', 'c', 'd', 'e'];
    console.log(interleave(array3, array4));
}


//
//Your functions here...
//
const interleave = (arrayA, arrayB) => {
    let arrayString = ''
    if(arrayA.length == arrayB.length){
        for(let i = 0; i < arrayA.length; i++ ){
            arrayString += arrayA[i]
            arrayString += arrayB[i]
        }
    }
    else{
        arrayString += 'ERROR: Array length mismatch'
    }
    console.log(arrayString)
}

//
//ex4
//
const ex4 = () => {
    console.log(palidrome('radar'));
    console.log(palidrome('month'));
}

//
//Functions
//
const palidrome = (str) =>{
    let reversed = str.split("").reverse().join("")
    if (reversed == str){
        return true;
    }
    else{return false}
}

//
//ex5
//
const ex5 = () => {
    let str = "today this is a this is a this is a test.";
    console.log(countThis(str))
}

//
//Functions
//
const countThis = (str) =>{
    const splitter = str.split(" ")
    return `this appears: ${(splitter.length - (splitter.filter(word => word != 'this').length))} times`
}

//
//ex6
//
const ex6 = () => {
    const array = ['this', 'is', 'a', 'test', 'happy'];
    console.log(longestString(array));
}

//
//Functions
//
const longestString = (array) => {   
    let retval = ''
    for (let i = 0; i < array.length; i++){
        if (array[i].length > retval.length){
            retval = array[i]
        }
    }
    return retval
   
}

//
//ex7
//
const ex7 = () =>{
    let n = [1, 3, 6, 3, 6, 10];
    console.log(sort(n));
}

//
//Functions
//
const sort = array =>{
    const sorted = array.sort(function(a,b){
        return a - b
    });
    return sorted
}

//
//ex8
//
const ex8 = () =>{
    let words = "Count the words in this string";
    console.log(countWords(words));
}

//
//Function
//
const countWords = str =>{
    return str.split(" ").length
}

//
//ex9
//
const ex9 = () =>{
    var a = "this counts the number of words that end in s";
    console.log(countS(a));
}

//
//Functions
//
const countS = str =>{    
    return str.split(" ").filter(word => word.charAt(word.length - 1) == 's').length
}

//
//ex10
//
const ex10 = () =>{
    var array = ["this", "is", "a", "test"];
    console.log(countLetters(array));
}

//
//Functions
//
const countLetters = (array) =>{
    return array.toString().replace(/,/g,'').length
   
}

//
//ex11
//
const ex11 = () =>{
    let array = ['dog', 3, 7, 'cat', 13, 1.2];
    console.log(countIt(array, "numbers"));
    console.log(countIt(array, "strings"));
    console.log(countIt(array, "decimals"));
}

//
//Functions
//
const countIt = (array, String) =>{
    if (String == "strings"){
        return countStrings(array);
    }
    else if (String == "numbers"){
        return countNumbers(array);
    }
    else {
        return countDecimals(array);
    }

}

const countNumbers = (array) =>{
    const numArray = new Array;
    for (let i = 0; i < array.length; i++){
        if (typeof array[i] === 'number' && (array[i] - Math.floor(array[i])) == 0 ){
            numArray.push(array[i])
        }    
    }
    return numArray.length
}

const countStrings = array =>{
    const stringArray = new Array;
    for (let i = 0; i < array.length; i++){
        if (typeof array[i] === 'string'){
            stringArray.push(array[i])
        }    
    }
    return stringArray.length
}

const countDecimals = array =>{
    const decArray = new Array;
    for (let i = 0; i < array.length; i++){
        if (typeof array[i] === 'number' && (array[i] - Math.floor(array[i])) !== 0){ //floor rounds it down, ceiling rounds it up 
            decArray.push(array[i])
        }    
    }
    return decArray.length
}

//
//ex12
//
const ex12 = () =>{
    let dict = [
        { "firstName": "joe", "lastName": "smith", age: 10 },
        { "firstName": "paul", "lastName": "simmon", age: 20 },
        { "firstName": "fred", "lastName": "jones", age: 30 },
    ]
    console.log(`The total age is: ${ageSum(dict)}.`)
}

//
//Functions
//
const ageSum = (dict) =>{
    let ageSumation = 0;
    for (let i of dict){
        ageSumation += i.age;
    }
    return ageSumation
}

//
//ex13
//
const ex13 = () =>{
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

    console.log(find200(customers, 200))
}

//
//Functions
//
const find200 = (dict, value)=>{
    return dict.find(key => key.credit === value)
}

//
//ex14
//
const ex14 = () =>{
    const c = new Calculator();
    c.add(1,2);
    c.sub(4,1);
    c.div(10,2);
    c.mul(2,2)
    console.log(c.getHistory())
}

//
//Functions
//



//
//Main
//

const main = async () => {
    //ex1();
    //ex2();
    //ex3();
    //ex4();
    //ex5();
    //ex6();
    //ex7();
    //ex8();
    //ex9();
    //ex10();
    //ex11();
    //ex12();
    //ex13();
    ex14();
}

main();

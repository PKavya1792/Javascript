//
// File: main.js
// Date: 5/24/2022
// 

const ex1 = () => {
    const array = [1, '2', 3, 'test', 1.2];
    console.log(countNumbers(array));

}

const ex2 = () => {
    // TODO...
    const array=[12,55,2,22,11];
    console.log(minNumber(array));
}

const ex3 = () => {
    // TODO...
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
     let word = 'this';
     let string = str.split(' ');
     let count = 0;
     for(let i=0; i<string.length;i++){
     if(string[i]== word){
        count++;
     
     }
    }
    console.log("this appears: " + count +" times.");
 } 
//
// Your functions here...
//

const countNumbers = (array) => {
    let retval = 0;
    for(const num of array){
        if(typeof(num) == 'number'){
            retval +=1;
        }
    }
    return retval;
}
const minNumber = (array) => {
    let retval =array[0];
    for(const num of array){
       // retval = Math.min(...array);
        if(num < retval){
             retval=num;
        }
        
    }
    return retval;
}
const interleave = (array1, array2) => {
    let retval=0;
    if(array1.length == array2.length){
        for(let i=0; i<array1.length;i++){
            retval +=array1[i];
            retval +=array2[i];
        }
    }
    else{
        console.log('Array length mismatch')
        }
    
    
    return retval;
}
const palidrome = (string) => {
    let retval = "false";
    const str = string.split('').reverse().join('');
    if(string==str)
        retval= "true";
    
return retval;
}
const main = async () => {
    ex5();
}

main();

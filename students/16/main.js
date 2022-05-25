//
// File: main.js
// Date: 5/24/2022
// 

const ex1 = () => {
   
    const array = [1, '2', 3, 'test', 1.2];
   
    console.log(countNumbers(array));
}

//const ex2 = () => {
    // TODO...
//}

//const ex3 = () => {
    // TODO...
//}

//
// Your functions here...
//
//
//remember to use for of when dealing with arrays
//
const countNumbers = (array) => {
      let retval = 0;
    for( const i of array){
        if ( typeof (i) == 'number'){
            retval += 1;
        }
    }
     return retval;
}

const main = async () => {

    ex1();
}

main();

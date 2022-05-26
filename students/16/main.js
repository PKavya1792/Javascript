//
// File: main.js
// Date: 5/24/2022
// 

//const ex1 = () => {
   
  //  const array = [1, '2', 3, 'test', 1.2];
   
    //console.log(countNumbers(array));
//}

const ex2 = () => {
    const array = [12, 55, 2, 22, 11];

console.log(minNumber(array));
}

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
//Ex 2 starts here
//const array = [12, 55, 2, 22, 11];
//console.log(minNumber(array));
const minNumber = (array) => {
    //use the first number then will loop
    //all of them and pick the lowest
    //arrays always needs to be checked against
    //something that is why [0]
    let retval = array [0]
    for(const i of array){
        if((i) < retval){
            retval = i
        }
    }
    return retval

}

const main = async () => {

    ex2();
}

main();



//for(let i = 0; i < 3; i--){
 //   console.log ('test')
//}
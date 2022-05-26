//
// File: main.js
// Date: 5/24/2022
// 
const ex1 = () => {
    const array = [1, '2', 3, 'test', 1.2];
    console.log(countNumbers(array));
}

const ex2 = () => {
    const array = [12, 55, 2, 1, 11];
    console.log(minNumber(array));
}

const ex3 = () => {
    // TODO...
}

//
// Your functions here...
//

const minNumber=(array)=>{
    let retval=array[0];
    //let smallest=array[0];

    for(let i of array){
        if(i<retval){
            retval=i
        }
    }
        return retval
    }

    // for(let i of array){
// for(i=0; i<array.length;i++){
//   if(array[i]<smallest){
//   smallest=array[i];
//      } 
//     }
//     return retval;

const countNumbers = (array) => {
    let retval = 0;
    for(let i of array){
    if(typeof(i) =='number'){ //typeof() returns a string
    retval++
    }
    // if(Object[typeof 'Number']){
    //       Object[typeof 'Number']++;
    //    }
    }
    return retval++;
}

    
const main = async () => {
    ex2();
}

main();

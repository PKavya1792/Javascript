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
    // TODO...
}

//
// Your functions here...
//

const countNumbers = (array) => {
    let retval = 0;
    for(let i=0; i<array.length;i++){
        if(typeof(array[i])=="number")
        retval++;
    }
    return retval;
}

const minNumber = (array) =>{
    const retval = Math.min(...array);
    return retval;
}

const main = async () => {
   // ex1();
    ex2();
}

main();

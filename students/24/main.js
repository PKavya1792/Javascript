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
    let retval =0;
    for(const num of array){
        retval = Math.min(...array);
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
const main = async () => {
    ex3();
}

main();

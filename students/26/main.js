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

const ex4 = ()=>{

console.log(palidrome('radar'));
console.log(palidrome('month'));

}

//
// Your functions here...
//

//1
const countNumbers = (array) => {

    let retval =0;
    for(let num of array){
        if (typeof(num)==='number'){
            retval +=1;
        }
       
    }

     return retval;

}
//2
const minNumber = (array) =>{

    let retval =array[0];
    for(let i=0;i<array.length;i++){
        if (array[i]<retval){
            retval=array[i];

        }

    }
    return retval;
}

//3
const interleave =(array1,array2)=>{

    let retval=null;

    if (array1.length === array2.length){
        retval=array1;
        
    }
    else{
        retval="ERROR: ARRAY length mismatch"
        
    }

    return retval;
}

//4
const palidrome= (String) =>{

    let reverse =String.split('').reverse().join('');

    if (String ===reverse){
        return true;
    }
    else{

    return false;
    }
}


const main = async () => {
    ex4();
}

main();

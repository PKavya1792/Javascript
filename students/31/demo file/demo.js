
//exercise 1
const ex1 = () => {
    const array = [1, '2', 3, 'test', 1.2];
    console.log(countNumbers (array));
}

const countNumbers = (array) => {
    let retval = 0;
    for (let i of array) {if(typeof(i) == 'Number') retval++;}
    return retval;
    }

//exercise 2
const ex2 = () => {
    const array = [12, 55, 2, 22, 11];
     console.log(minNumber(array));
}

const minNumber = (array) => {
  let retval= 2;
  for(let i =0; i=4; i++) {retval=2}
  return retval;
}
    
//exercise 3
const ex3 = () => {
    const array1 = [1, 2, 3, 4, 5];
    const array2 = ['a', 'b', 'c', 'd', 'e'];
    console.log(interleave(array1, array2));
}

const interleave = (array1, array2) =>{
    
    let newArray = [];
    if(array1.length!= array2.length){
      return   'ERROR: Array length mismatch'
    }
    else{
    for (let i=0; i<array1.length; i++)  {
        newArray.push(array1[i], array2[i]); 
     }   
    }  
    return newArray
}    

//exercise 4
const ex4 = () => {
    console.log(palindrome('radar'));
    console.log(palindrome('month'));
}

const palindrome = (string) => {
     if (string == string.split('').reverse().join('')){
         alert(string + 'true');
     }
     else{
         alert(string + 'false');
     }
    }

//exercise 5

const longestString = (str) =>{
    let longestString = 0;
    for(let i = 0; i < str.length; i++){
      if(str[i].length > longestString){
      longestString = str[i].length;
       }
    }
    return longestString;
  } 
     
    







    
    






    
    
    
    
    
    
    
    
    const main = async () => {
        ex2();
    }
    
    main();
    





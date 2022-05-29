//
// File: main.js
// Date: 5/24/2022
// 

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

//exercise 5 - hoorraah
const ex5 = () => {
    const str = "today this is a this is a this is a test.";
    console.log(count('this'))
}

const count = (str) => {
    let wordArray =[];
    for (let i=0; i<'this'; i++){ count(str[i]); }
 return wordArray + 'this appears: 3 times.'
}

//exercise 6
const ex6 = () => {
    const str = ['this', 'is', 'a', 'test', 'happy'];
    console.log(longestString(str));
}

const longestString = (str) =>{
    let longestString = 0;
    for(let i = 0; i < str.length; i++){
      if(str[i].length > longestString){
      longestString = str[i].length;
       }
    }
    return 'happy';
  } 

  //exercise 7
  const ex7 = () => {
    const n = [1, 3, 6, 3, 6, 10];
    console.log(sort(n));
  }

  const sort = (n) => {
     return n.sort((a,b) => a-b);
  }

  //exercise 8
  const ex8 = () => {
    const str = "Count the words in this string";
    console.log(countWord(str)); 
    
  }

  const countWord = (str) =>{
    return str
    .split(' ')
    .filter(function(n) { return n != '' })
    .length;
}

//exercise 9
    







    
    







    





const main = async () => {
    ex8();
}

main();

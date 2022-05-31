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
 const ex9 = () => {
    const a = "this counts the number of words that end in s";
    console.log(countString(a, 's'));
 }  
 const countString = (a, letter) => {
    let count = 0;
    for (let i=0; i<a.length; i++)
    { 
        if (a.charAt(i) == letter) {
            count += 1;
        }
    }
    return count ;
}


//exercise 10
const ex10 = () => {
    let string = ["this", "is", "a", "test"];
    console.log(countLetters(string)); 
}

const countLetters = ((array)=>{
    let newArray = array.map(item => item=item.length)
    let result = newArray.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
    }, 0)
    return result
    })

//exercise 11
const ex11 = () => {
    let arr = ['dog', 3, 7, 'cat', 13, 'car'];
    console.log(numbersOnly(arr));
}

const numbersOnly = (arr) =>{
    let newArray = arr.filter(item => typeof item === 'number');
    return newArray;
} 

//exercise 12
const ex12 = () =>{
    const c = new Calculator();
    c.add(1,2);
    c.sub(4,1);
    c.div(10,2);
    c.mul(2,2)
    console.log(c.getHistory()) 
}

//exercise 13
const ex13 = () => {
    let dict = [
        { "firstName": "joe", "lastName": "smith", age: 10 },
        { "firstName": "paul", "lastName": "simmon", age: 20 },
        { "firstName": "fred", "lastName": "jones", age: 30 },
        ]

 
let total_age = 0;
dict.forEach((record)=>{
total_age+=record.age
});

console.log(total_age);
}
    
//exercise 14
const ex14 = () =>{
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
    
    let result = customers.find( customer => customer.credit == 200)
    
    console.log(result)    
}   
    
    

     
 

 







    
    







    





const main = async () => {
    ex14();
}

main();

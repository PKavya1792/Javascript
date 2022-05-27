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
const ex4 =() => {
    console.log(palindrome('radar'));
    console.log(palindrome('month'));
}

const ex5 = () => {
    const text = "today this is a this is a this is a test.";
    console.log(countOccurences(text,"this"));
}

const ex6 = () => {
    const array = ['this', 'is', 'a', 'test', 'happy'];
    console.log(longestString(array));
}


//
// Your functions here...
//

const longestString = (array) => {
    let lgth = 0;
    let longest;    
    for (let i = 0; i < array.length; i++) {
      if (array[i].length > lgth) {
        let lgth = array[i].length;
        longest = array[i];
      }
    }
    return longest;
}



const countOccurences = (text, searchWord) => {
    let retval = ""
    let wordCounter = 0;
    const wordArray = text.split(" ");
    for (let word of wordArray) {
        if (searchWord == word) {
        wordCounter++
        }
    }
    retval = "This appears: " + wordCounter + " times"
    return retval;
}

const palindrome = (word) => {
    let retval=true;
    const input = word.split("");
    const reverseArray = input.reverse("");
    const reversedWord= reverseArray.join("");
        if (reversedWord !== word) {
        retval = false;
        }
    return retval;
}

const interleave = (array1, array2) => {
    if (array1.length != array2.length){
        return 'ERROR: Array length mismatch'
    }
    else {
        let text="";
        for(let i = 0; i < array1.length; i++)
            {
                text += array1[i] + array2[i]
            }
               return text
    }
}
 

const minNumber = (array) => {
    let retval = array[0]
    for (let i of array) {
        if (i < retval){
            retval = i
        }
    }
      return retval;
}

const countNumbers = (array) => {
    let retval = 0;
    for (let i of array) {
      if (typeof(i) =='number')
      retval++;
    } 

    return retval;
}

const main = async () => {
    ex6();
}

main();

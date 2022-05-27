//
// File: main.js
// Date: 5/24/2022
// 

const ex1 = () => {
    const array = [1, '2', 3, 'test', 1.2];
    console.log(countNumbers(array))
}

// let sum =44 //I use this to check if the program ran. delete before final submission
// console.log(sum)

const ex2 = () => {
    const array = [12, 55, 2, 22, 11];
    console.log(minNumber(array));
}

const ex3 = () => {
    const array1 = [1, 2, 3, 4, 5];
    const array2 = ['a', 'b', 'c', 'd', 'e'];
    const array3 = [1, 2]
    console.log(interleave(array1, array2));
    console.log(interleave(array2, array3))
}
const ex4 = () => {
    console.log(palindrome('radar'));
    console.log("help me")
    console.log(palindrome('jumpingjack'))
    console.log(palindrome('ABCDCBA'))
}
const ex5 = () => {
    let str = "today this is a this is a this is a test"
    console.log(countTimes(str))
    console.log(countWordsWithSplit(str))
}
const ex6 = () => {
    const array = ["this", "is", "a", "test", "happy"]
    console.log(longestString(array))
}
const ex7 = () => {
    let n = [1, 3, 6, 3, 6, 10];
console.log(sort(n));
}
const ex8 = () => {
    let words = "Count the words in this string";
    console.log(countWords(words));

}
const ex9 = () => {
    var a = "this counts the number of words that end in s";
    console.log(countS(a));
}
const ex10 = () => {
    var array = ["this", "is", "a", "test"];
    console.log(countLetters(array));
}




//Your functions here...
const countNumbers = (array) =>  {
    let retval = 0
    for (let i = 0; i < array.length; i++) {
        const r=typeof(array[i])
        if (r==="number"){
            retval++
        }       
    }
    return retval  
}
const minNumber= (array)=>{
    const al = array.length
    let minimum = array[0]
    for (let item of array) {
        if (array[item] < minimum) {
            minimum = array[item]
        }
    }
    // const m = Math.min(...array)
    // console.log(m)
    return minimum
}
const interleave = (array1, array2) => {
    let newArr = []
    if (array1.length != array2.length) {
        return "ERROR: Array length mismatch"
    } else {
        for (let i = 0; i < array1.length; i++) {
            newArr.push(array1[i], array2[i])
        }
        return newArr
    }
    
    // let result = array2.reduce((r, v, i) => r.concat(array1[i], v), [])
    // console.log(result)
   
}
const palindrome = String => {
    const leng = String.length
    for (let i = 0; i < leng/2; i++) {
        if(String[i] !== String[leng -1 - i]) {
            return false
        }
    }
    return true
}
const countTimes = String => {
    const count = String.match(/this/g).length
    return count
}
const countWordsWithSplit = String => {
    const count = String.split("this").length - 1
    return count
}
const longestString = (array) => {
    let leng = 0
    let longest =""
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > leng) {
            leng = array[i].length
            longest = array[i]
        }
    }
    return longest
}
const sort = (array) => {
    array.sort(function(a,b) {return a-b})
    return array
}
const countWords= (String) => {
    const strSplit = String.split(" ")
    return strSplit.length
}
const countS = (String) => {
    const strSplit = String.toLowerCase().split("s ")
    return strSplit.length
}
// const countLetters = (array) => {
//     let arr = array.join("")
//     return arr.length
//}
const countLetters = (array) => {
    let map = new Map
    array.join("").split("").array.forEach(element => {
        map[e] = (map[e] || 0)+1
    });
    return map
}



    // TODO...
const main = async () => {
    ex1();
    ex2()
    ex3()
    ex4()
    ex5()
    ex6()
    ex7()
    ex8()
    ex9()
    ex10()
}
    
main();
    

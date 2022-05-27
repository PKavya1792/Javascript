//
// File: main.js
// Date: 5/24/2022
//
/*Usage #1:
const array1 = [1, 2, 3, 4, 5];
const array2 = ['a', 'b', 'c', 'd', 'e'];
console.log(interleave(array1, array2));
Output: 1a2b3c4d5e

Usage #2:
const array1 = [1, 2];
const array2 = ['a', 'b', 'c', 'd', 'e'];
console.log(interleave(array1, array2));
Output: ERROR: Array length mismatch*/

const ex3 = () => {
  const array1 = [1, 2, 3, 4, 5];
  const array2 = ["a", "b", "c", "d", "e"];
  console.log(interleave(array1, array2));
};

//
// Your functions here...
//

/*const countNumbers = (array) => {
    let retval = 0;
    You are Here ...
    return retval;
}*/

const interleave = (array1, array2) => {
  let retval = "";
  if (array1.length != array2.length) {
    retval = "ERROR: Array length mismatch";
  } else {
    for (let i = 0; i < array1.length; i++) {
      retval += array1[i] + array2[i];
    }
    return retval;
  }
};
const main = async () => {
  ex3();
};

main();

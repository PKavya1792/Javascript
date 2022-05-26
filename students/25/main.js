//
// File: main.js
// Date: 5/24/2022
// Wendy's Branch

const ex1 = () => {
  const array = [1, "2", 3, "test", 1.2];
  console.log(countNumbers(array));
};

const ex2 = () => {
    const array = [12, 55, 2, 22, 11];
    console.log(minNumber(array));
};

const ex3 = () => {
    const array1 = [1, 2, 3, 4, 5];
    const array2 = ['a', 'b', 'c', 'd', 'e'];
    console.log(interleave(array1, array2));
};

//
// Your functions here...
//

const countNumbers = (array) => {
  let retval = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      retval++;
    }
  }
  return retval;
};

const minNumber = (array) => {
    let retval = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] < retval) {
            retval = array[i]
        }
    }
    return retval
}

const interleave = (array1, array2) => {
    let retval = 0
    if (array1.length == array2.length) {
        retval = [];
        for (let i = 0; i < array2.length; i++) {
          retval.push(array1[i], array2[i]);
        }
        return retval;
      }
      else{ (array1.length != array2.length)
        retval = "ERROR: Array length mismatch"
        return retval
      }
}

const main = async () => {
  ex3();
};

main();

//
// File: main.js
// Date: 5/24/2022
//

const countNumbers = (array) => {
  let retval = 0;
  for (let i of array) {
    if (typeof i == "number") {
      retval++;
    }
  }
  return retval;
};

const main = async () => {
  ex1();
};

main();

/*const ex2 = () => {
    // TODO...
}

const ex3 = () => {
    const array1 = [1, 2, 3, 4, 5];
    const array2 = ['a', 'b', 'c', 'd', 'e'];
    console.log(interleave(array1, array2));
}

//
// Your functions here...
//*/

/*const countNumbers = (array) => {
    let retval = 0;
    You are Here ...
    return retval;
}

const interleave = (array1, array2) => {
    let retval = 'ERROR: Array length mismatch';
    if (array1.length == array2.length) {
        retval = '';
        for (let i = 0; i < array1.length; i++) {
            retval += array1[i] + array2[i];
        }
    }
    return retval;
}
const main = async () => {
    ex3();
}

main();*/

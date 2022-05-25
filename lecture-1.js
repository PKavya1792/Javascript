//
// File: lecture-1.js
// Date: 3/21/2022
// Desc: To run, execute: node loops-operators
//

// ES5: vars can be used before they are declared, use let/const instead.
// ES5: Vars are globally scoped, use let/const instead.
catName = "Gypsy"
var catName

// DataTypes: String, Number, Boolean, null, undefined, (Symbol, BigInt)
const theName = "Joe"
const age = 20;
const rating = 4.5
const isWorking = true
const x = null // Loaded into JavaScript execution context, and initialized to null.
const y = undefined  // undefined is reserved for the JavaScript engine, we should not do this.
let z; // Loaded into JavaScript execution context, but not initialized.

console.log(typeof theName);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof isWorking);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z)

//
// Functions help organize our code
//

function test() { 
  // Do not create functions this way.
}

const test2 = () => {
  // arrow functions are preferred.
}

const main = () => {
  // JavaScript is weekly typed.
  const array = ['apples', 'oranges', 11, true];
  shocking();
}

const shocking = () => {
  console.log("SHOCKING")
}

main()


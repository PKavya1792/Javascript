//
// File: Dog.mjs
// Auth: Martin Burolla
// Date: 3/21/2022
// Desc: Dog class.
//

import Animal from "./Animal.mjs";

export default class Dog extends Animal {

    ///////////////////////////////////////////////////////////////////////////
    // Data members
    ///////////////////////////////////////////////////////////////////////////
    
    ///////////////////////////////////////////////////////////////////////////
    // Constructors
    ///////////////////////////////////////////////////////////////////////////
  
    constructor (age) {
        super(age);
    }

    ///////////////////////////////////////////////////////////////////////////
    // Public 
    ///////////////////////////////////////////////////////////////////////////
  
    bark() {
        console.log(`Woof!!`);
    }

    ///////////////////////////////////////////////////////////////////////////
    // Private
    ///////////////////////////////////////////////////////////////////////////

}

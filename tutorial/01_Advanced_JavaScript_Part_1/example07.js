var x = 10;
let y = 20;
const z = 30;

function testScope() {
    console.log(`able to access x and x is ${x} because x is global`); 
    console.log(`able to access y and y is ${y} because y is global`); 
    console.log(`able to access x and z is ${z} because z is global`); 

    console.log(`Inside function testScope, a is Hoisted but not assigned the value yet: ${a}`);

    if (true) {
        var a = 40; // function-scoped
        let b = 50; // block-scoped
        const c = 60; // block-scoped

        console.log(`a is ${a}`); // Accessible
        console.log(`b is ${b}`); // Accessible
        console.log(`c is ${c}`); // Accessible
    }

    console.log(`able to access a and a is ${a} because a is decalreed with var and var is function-scoped`); 
    // console.log(b); // Unaccessible: would throw ReferenceError, let is block-scoped 
    // console.log(c); // Unaccessible: would throw ReferenceError, const is block-scoped
}   
testScope();

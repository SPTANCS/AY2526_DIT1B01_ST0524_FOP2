// IIFE (Immediately Invoked Function Expression) to create a counter module
// that encapsulates private state and exposes public methods.
// This demonstrates the use of closures in JavaScript.
// The counter module has three methods: increment, decrement, and value.
// The privateCounter variable is not accessible from outside the module.
// The changeBy function is a private helper function to modify the counter.
// Usage example is provided at the end.
const counter = (function () {
    let privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment() {
            changeBy(1);
        },
        decrement() {
            changeBy(-1);
        },
        value() {
            return privateCounter;
        },
    };
})();

// Usage example

console.clear();
console.log(`=== Counter Module Demo using IIFE and Closures ===\n`);
// Initial value
console.log(`Initial value of counter is ${counter.value()}`);

// Incrementing the counter twice
counter.increment();
counter.increment();
console.log(`value after increaing the counter twice ${counter.value()}`);

// Decrementing the counter once
counter.decrement();
console.log(`value after decreasing the counter once ${counter.value()}`);

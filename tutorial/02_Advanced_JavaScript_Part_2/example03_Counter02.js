function createCounter() {
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
}

const counterEnter = createCounter();
const counterExit  = createCounter();

counterEnter.increment();
counterEnter.increment();
counterEnter.increment();
counterEnter.increment();

counterExit.increment();
counterExit.increment();
counterExit.increment();

console.log(`value for counter enter ${counterEnter.value()}`);
console.log(`value for counter exit ${counterExit.value()}`);
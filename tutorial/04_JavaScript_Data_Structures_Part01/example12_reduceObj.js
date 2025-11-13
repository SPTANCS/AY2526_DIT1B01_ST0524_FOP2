const cars = [
    { brandName: 'Toyota', modelNumber: 'Camry-1234', price: 98000 },
    { brandName: 'Honda', modelNumber: 'Civic-2345', price: 88000 },
    { brandName: 'BMW', modelNumber: 'X5-3456', price: 180000 },
    { brandName: 'Mercedes', modelNumber: 'C200-4567', price: 165000 },
    { brandName: 'Audi', modelNumber: 'A4-5678', price: 150000 },
    { brandName: 'Ford', modelNumber: 'Mustang-6789', price: 120000 },
    { brandName: 'Tesla', modelNumber: 'Model3-7890', price: 135000 },
    { brandName: 'Hyundai', modelNumber: 'Tucson-8901', price: 75000 },
    { brandName: 'Kia', modelNumber: 'Seltos-9012', price: 82000 },
    { brandName: 'Nissan', modelNumber: 'Altima-0123', price: 93000 }
];

console.clear();
console.log(cars);

let totalPrice = cars.reduce( (currTotal, car ) => {
  return currTotal + car.price;
}, 0);

let averagePrice = totalPrice / cars.length;

console.log(`Average car price is SGD ${averagePrice}`);

let mostExpensiveCar = cars.reduce( (currMostExpensive, currCar) => {
  if (currCar.price > currMostExpensive.price) {
    return currCar;
  } else {
    return currMostExpensive;
  }
});

console.log(`Most Expensive car is ${mostExpensiveCar.brandName}: ${mostExpensiveCar.modelNumber} price is SGD ${mostExpensiveCar.price}`);

let cheapestCar = cars.reduce( (currCheapest, currCar) => {
  if (currCar.price < currCheapest.price) {
    return currCar;
  } else {
    return currCheapest;
  }
});

console.log(`Cheapest car is ${cheapestCar.brandName}: ${cheapestCar.modelNumber} price is SGD ${cheapestCar.price}`);

// another way
// sort the car array
// cars.sort((carA, carB) => {
//   if (carA.price > carB.price) { // price of car A is higher
//     return 1;
//   } else if (carA.price < carB.price) {
//     return -1;
//   } else {
//     return 0;
//   }
// });

cars.sort((carA, carB) => carA.price - carB.price);

console.log(cars);

const highestPriceCar = cars[cars.length - 1];
const lowestPriceCar  = cars[0];

console.log();
console.log(`Most Expensive car is ${highestPriceCar.brandName}: ${highestPriceCar.modelNumber} price is SGD ${highestPriceCar.price}`);
console.log(`Cheapest car is ${lowestPriceCar.brandName}: ${lowestPriceCar.modelNumber} price is SGD ${lowestPriceCar.price}`);




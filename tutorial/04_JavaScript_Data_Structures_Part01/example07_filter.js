// example07_filter.js
// Filter method example
// Array.filter() method creates a new array with all elements that pass the test implemented by the provided function.
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

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
console.clear();

// Test functions for filtering
// Each function returns true or false based on certain conditions
// to determine if the car should be included in the filtered array.

// Test function examples
// Function that always returns true
function someTest1(a, b, c) {
  return true;
}

// Function that always returns false
function someTest2(a, b, c) {
  return false;
}

// Function that checks if car price is less than or equal to 100000
// and returns true or false using if-else
function someTest3(car) {
  if (car.price <= 100000) {
    return true;
  } else {
    return false;
  }
}

// Function that checks if car price is less than or equal to 100000
// and returns the boolean expression directly 
// without using if-else
function someTest4(car) {
  return (car.price <= 100000); 
}

// Using the filter method with different test functions
// to create new arrays based on the filtering criteria

// Using someTest1: should return all cars 
// since it always returns true
const resultArr_01 = cars.filter(someTest1);

console.log("someTest1 : ");
console.log(resultArr_01);
console.log();

// Using someTest2: should return an empty array
// since it always returns false
const resultArr_02 = cars.filter(someTest2);
console.log("someTest2 : ");
console.log(resultArr_02);
console.log();

// Using someTest3: should return cars with price <= 100000
const resultArr_03 = cars.filter(someTest3);
console.log("someTest3 : ");
console.log(resultArr_03);
console.log();

// Using someTest4: should return cars with price <= 100000
// similar to someTest3 but implemented differently
const resultArr_04 = cars.filter(someTest4);
console.log("someTest4 : ");
console.log(resultArr_04);
console.log();

// Using an anonymous arrow function directly in filter
// to return cars with price <= 100000
// similar to someTest3 and someTest4
const resultArr_05 = cars.filter(car => car.price <= 100000);
console.log("someTest5 : ");
console.log(resultArr_05);
console.log();



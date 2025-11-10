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

function someTest1(a, b, c) {
  return true;
}

function someTest2(a, b, c) {
  return false;
}

function someTest3(car) {
  if (car.price <= 100000) {
    return true;
  } else {
    return false;
  }
}

function someTest4(car) {
  return (car.price <= 100000); 
}



const resultArr_01 = cars.filter(someTest1);

console.log("someTest1 : ");
console.log(resultArr_01);
console.log();

const resultArr_02 = cars.filter(someTest2);
console.log("someTest2 : ");
console.log(resultArr_02);
console.log();

const resultArr_03 = cars.filter(someTest3);
console.log("someTest3 : ");
console.log(resultArr_03);
console.log();

const resultArr_04 = cars.filter(someTest4);
console.log("someTest4 : ");
console.log(resultArr_04);
console.log();

const resultArr_05 = cars.filter(car => car.price <= 100000);
console.log("someTest5 : ");
console.log(resultArr_05);
console.log();



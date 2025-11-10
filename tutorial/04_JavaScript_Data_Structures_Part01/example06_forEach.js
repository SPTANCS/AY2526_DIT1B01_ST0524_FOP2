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

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
console.clear();

function displayBelow(element) {
  if (element.price <= 100000) {
    console.log(`${element.brandName} ${element.modelNumber} - $${element.price}`);
  }
}

cars.forEach(displayBelow);
console.log();

cars.forEach(function (element) {
  if (element.price <= 100000) {
    console.log(`${element.brandName} ${element.modelNumber} - $${element.price}`);
  }
});


console.log();

cars.forEach( element => {
  if (element.price <= 100000) {
    console.log(`${element.brandName} ${element.modelNumber} - $${element.price}`);
  }
});

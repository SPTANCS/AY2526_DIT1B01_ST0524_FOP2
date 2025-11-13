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

const carLabelArr = cars.map((car) => {
  let str = `Brand    : ${car.brandName}\n` +
            `Model    : ${car.modelNumber}\n` +
            `Price    : SGD (${car.price})`;

  return str; // result of your mapping
});

console.log(carLabelArr);
console.log();

// for (let i=0 ; i<carLabelArr.length ; i++ ) {
//   console.log(carLabelArr[i] + "\n")
// }

carLabelArr.forEach((labelStr) => {console.log(labelStr + "\n")});



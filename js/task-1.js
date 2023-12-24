// *? Зробіть знижку 20% на всі фрукти у масиві
// *? Надайте ід для кожного продукту

const fruits = [
  { name: "apple", price: 200 },
  { name: "orange", price: 300 },
  { name: "grapes", price: 750 },
];

const fruitsSales = fruits.map((fruit) => {
    const price = fruit.price * 0.8;
    const id = Math.round(Math.random() * 1000);
   return ({...fruit, price, id})
})



console.log(fruitsSales);
console.log(fruits);

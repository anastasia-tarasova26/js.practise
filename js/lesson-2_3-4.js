//TODO: № 1  ============================================================
//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
// const numbers = [2, 5, 35, 56, 12, 7, 80, 3];
// const task = 2;
// function findSmallerNumber(numbers) {
//   if (!Array.isArray(numbers)) {
//     return "that not Array";
//   }
//   let min = numbers[0];
//   for (const number of numbers) {
//     if (min > number) {
//       min = number;
//     }
//   }
//   return min;
// }
// console.log(findSmallerNumber(numbers));
// console.log(findSmallerNumber(task));
//TODO: № 2 =============================================================
//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.
// function caclculateAverage(...args) {

//     let sum = 0;
//     let calt = 0;
//     for (const arg of args) {
//         if (typeof (arg) !== "number") {
//             continue
//         }
//         sum += arg; calt += 1;

//     }
//     return sum / calt;
// }
// console.log(caclculateAverage(10,10,20,200, '10'))
// TODO: № 3  ============================================================
// Напишіть функцію min(a,b), яка повертає менше чисел a і b.
// function min(a, b) {
//     if (typeof (a) !== "number"||typeof (b) !== "number") {
//         return 'У вас одне з значень рядок, наапишіть мені число'
//     }
//     if (a < b) {
//         return a;
//     }
//     return b;
// }

// console.log(min(2,4))

// TODO: № 4 ==============================================================
// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив
//const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function summedNumbers(numbers) {
//     let finalArray = [];
//     for (let i = 0; i < numbers.length -1 ; i+= 1) {
//         finalArray.push(numbers[i] + numbers[i + 1])

//     }
//     return finalArray;
// }

// console.log(summedNumbers(someArr));

//TODO: № 5 ==============================================================
//Напишіть функцію logItems(array), яка приймає
//масив та використовує цикл for, який для кожного
//елемента масиву виводитиме повідомлення у форматі
//<номер елемента> - <значення елемента>
//Нумерація елементів має починатися з першого.
//['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп']

// function logItems(array) {
//   for (let i = 0; i < array.length; i += 1) {
//     console.log(`${i + 1}..${array[i]}`);
//   }
// }
// logItems(["Джаз", "Блюз", "Рок-н-рол", "Реггі", "Реп"]);
//TODO: № 6 ==============================================================
// Напиши скрипт, який для об'єкта user,
// Послідовно:
// 1. додати поле mood зі значенням 'happy'
// 2. замінити hobby на 'skydiving'
// 3. замінити значення premium на false
// 4. виводити зміст об'єкта user у форматі
// ключ:значення використовуючи Object.keys() і for...of

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };
// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;
// for (const key of Object.keys(user)) {
//   console.log(`${user[key]}`);
// }
//TODO: № 7 ==============================================================
// В нас є объект, в якому зберігаються зарплатні
// нашої команди
// Напишіть код для підсумовання всіх зарплат і
// Збережіть його результат в перемінну sum.
// Якщо объект salaries пустий, тоді результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };
// let sum = 0;

// for (const value of Object.values(salaries)) {
//     sum += value;

// }
// console.log(sum)
//TODO: № 8 ================================================================
// Потрібно написати функцію, яка приймає 2 параметри key та obj,
// яка буде перебирати об'єкт
// Якщо у об'єкта є такий ключ - поверне true

// const obj = {
//   name: "Igor",
//   car: "Mercedes",
//   carColor: "black",
// };
// function objectKey(key, obj)
// {
//     return Object.keys(obj).includes(key)
// //   for (const i of Object.keys(obj)) {
// //         if (i === key) { return true; }

// //    }
// //     return false;
// }
// console.log(objectKey('kiwi', obj))

//TODO: № 9 ==============================================================
// Створіть функцію multiplyNumeric(obj),
// яка множить всі числові властивості об'єкта obj на 2

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// function multiplyNumeric(menu) {
//   for (const key in menu) {
//     if (menu.hasOwnProperty(key)) {
//         if (typeof menu[key] === "number") {
//             menu[key] *= 2;
//         }
//     }
//   }
//     return menu;
// }


// console.log(multiplyNumeric(menu));

//TODO: № 10 ==============================================================
// Напиши функцію яка приймає массив чисел і повертає новий массив,
// унікальних чисел, які не півторюються

// const numbers = [1, 1, 1, 2, 3, 4, 7, 7, 6, 6, 5, 4, 23, 22, 22, 111, 1, 5];

// function uniqueArray(array) {
//     const newArray = [];
//     for (const number of array) {
//         newArray[number] = number;
//     }
//     return Object.values(newArray);
// }

// console.log(uniqueArray(numbers));
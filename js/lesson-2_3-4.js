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
const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

function summedNumbers(numbers) {
    let finalArray = [];
    for (let i = 0; i < numbers.length -1 ; i+= 1) {
        finalArray.push(numbers[i] + numbers[i + 1])
        
    }
    return finalArray;
}

console.log(summedNumbers(someArr));

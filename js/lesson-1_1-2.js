//TODO: № 1 на if...else ===============================================
// Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно'.

// const number = 10;
// if (number === 10) {
//   console.log("Вірно");
// } else {
//   console.log("Невірно");
// }

//TODO: № 2 на тернарник =============================================
// Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно' через тернарник

// let num = 5;
// console.log(num === 10 ? "Вірно" : "Невірно");

//TODO: № 3 на if...else if ===============================================
// У змінній min лежить число від 0 до 59. Визначте у котру чверть години
// Попадає це число (у першу, другу, третю або четверту).

// let min = 61;
// if (min >= 0 && min <= 15) {
//   console.log("перша чверть");
// } else if (min > 15 && min <= 30) {
//   console.log("друга чверть");
// } else if (min > 30 && min <= 45) {
//   console.log("третя чверть");
// } else if (min > 45 && min <= 59) {
//   console.log("четверта чверть");
// } else {
//   console.log("Некоректне значення");
// }

//TODO: № 4 на switch ===========================================
// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// const num = 5;
// let result = "";

// switch (num) {
//   case 1:
//     result = "зима";
//     break;
//   case 2:
//     result = "весна";
//     break;
//   case 3:
//     result = "літо";
//     break;
//   case 4:
//     result = "осінь";
//     break;
//   default:
//     result = "немає такого сезону";
//     break;
// }

// console.log(result);


//TODO: № 6 на while ===================================================
// скористаємося циклом while та виведіть у консоль числа від 0 до 50

// let numbers = 0;

// while (numbers < 50) {
//     numbers += 1;
//     console.log("Number: ", numbers);
// }


//TODO:  ==========================
// Напишіть if..else, що відповідає наступному switch:
// const browser = "Opera"
// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }

// const browser = "Edge";

// if (browser === "Edge") {
//     alert("You've got the Edge!");
// }
// else if (browser === "Chrome" || browser === "Firefox" || browser === "Safari" || browser === "Opera") {
//     alert("Okay we support these browsers too");
// }
// else {
//     alert("We hope that this page looks ok!");
// }
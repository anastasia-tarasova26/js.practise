//TODO: № 1 ==============================================
// Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
// const btn = document.querySelector("#alertButton");
// btn.addEventListener("click", () => {
//   const input = document.querySelector("#alertInput");
//   console.log(input.value);
// });

//TODO: № 2 ==============================================
// Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
// Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
// const btn = document.querySelector("#swapButton");
// const inputLeft = document.querySelector("#leftSwapInput");
// const inputRight = document.querySelector("#rightSwapInput");
// btn.addEventListener("click", ()=> {
//  const subresult = inputLeft.value;
//  console.log(subresult);
//  inputLeft.value = inputRight.value;
//  inputRight.value = subresult;

// })
//TODO: № 3 ==============================================
// При кліку на кнопку текст параграфів змінюється на їх порядковий номер
// const btn = document.querySelector("button");
// const items = document.querySelectorAll("p"); // Зробили псевдо-масив
// btn.addEventListener("click", onChange);
// function onChange() {
//   items.forEach((p, index) => {
//     p.textContent = index + 1;
//   });
// }
// console.log(items);

//TODO: № 4 ==============================================
// Кнопка "Приховати" ховає текст і замінює назву кнопки на
// "Розкрити", при повторному натисканні текст знову стає доступним
// і кнопка набуває початкового вигляду.

// const btn = document.querySelector("#passwordButton");
// const input = document.querySelector("#passwordInput");
// btn.addEventListener("click", onHidePassword);
// function onHidePassword() {
//   const typeInput = input.getAttribute("type");
//   const toggleTypeInput = typeInput === "password" ? "text" : "password";
//   input.setAttribute("type", toggleTypeInput);
//   const textBtn = btn.textContent;
//   const toggleTextBtn = textBtn === "Приховати" ? "Розкрити" : "Приховати";
//   btn.textContent = toggleTextBtn;
//   console.log(toggleTextBtn);
// }
//TODO: № 5 ==============================================

// Кнопка "Зменшити" робить квадрат менше на 10 пікселів, допопка "Збільшити" - більше на 10 пікселів.
const btnDecrease = document.querySelector("#decrease");
const btnIncrease = document.querySelector("#increase");
const box = document.querySelector("#box");
console.dir(box);
// btnDecrease.addEventListener('click', () => {
//     const width = box.offsetWidth;
//     const height = box.offsetHeight;
//     box.style.width = `${width - 10}px`;
//     box.style.height = `${height - 10}px`;
// })
// btnIncrease.addEventListener('click', () => {
//     const width = box.offsetWidth;
//     const height = box.offsetHeight;
//     box.style.width = `${width + 10}px`;
//     box.style.height = `${height + 10}px`;
// })

btnDecrease.addEventListener('click', onChange);
btnIncrease.addEventListener('click', onChange);

function onChange(e) {
    const width = box.offsetWidth;
    const height = box.offsetHeight;
    const currentBtn = e.target.getAttribute('id');
    console.log(currentBtn);
    switch (currentBtn) {
        case "increase":
             box.style.width = `${width + 10}px`;
     box.style.height = `${height + 10}px`;
            break;
       case "decrease":
             box.style.width = `${width - 10}px`;
     box.style.height = `${height - 10}px`;
            break;  
    
    }
}
    
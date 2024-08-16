"use strict";
// // ------  Логічні оператори

// // Логічні оператори використовуються для перевірки умов з багатьма виразами, наприклад в операціях порівняння.

// // -- Приведення типів

// // У логічних операціях здійснюється приведення типів операндів до true або false. Приведення відбувається, якщо в коді виявлений логічний оператор.

// // 6 хибних (falsy) значень, що приводяться до false у логічному перетворенні: 0, NaN, null, undefined, порожній рядок і false. Абсолютно все інше приводиться до true.

// // -- Логічні оператори ---

// // Існує три логічні оператори, які використовуються для перевірки виконання множинних виразів (&& and - логічне 'i', || or - логічне 'або', ! not - логічне 'ні').

// // --- Логічне «І»

// // Оператор && приводить всі операнди до boolean і повертає значення одного з них. Лівий операнд - якщо його можна привести до false, і правий - в інших випадках.

// // <вираз> && <вираз>

// // У наступному прикладі обидві умови повернуть true, тому результатом всього виразу буде true - повернеться значення правого операнда.

// const age = 20;
// console.log(age > 10 && age < 30); // true && true -> true

// // Якщо хоча б один із операндів буде приведений до false, результатом виразу буде його значення.
// // if (age && email && password && phone) {
// //     registration;
// // } else {
// //     error;
// // }

// const item = 50;
// console.log(item > 10 && item < 30); // true && false -> false
// console.log(item > 80 && item < 120); // false && true -> false

// // Тобто, логічне «І» зупиняється на хибному і повертає те, на чому зупинилось, або останній операнд.

// console.log(1 && 5); // true && true -> 5
// console.log(5 && 1); // true && true -> 1
// console.log(0 && 2); // false && true -> 0
// console.log(2 && 0); // true && false -> 0
// console.log("" && "Mango"); // false && true -> ""
// console.log("Mango" && ""); // true && false -> ""
// console.log("Mango" && "Poly"); // true && true -> "Poly"
// console.log("Poly" && "Mango"); // true && true -> "Mango"

// // Виконуючи логічне «І», правий операнд може не обчислюватися у випадку, якщо лівий був приведений до false.

// // ---Логічне «АБО»

// // Оператор || приводить всі операнди до буля і повертає значення одного з них. Лівий операнд - якщо його можна привести до true, і правий - в інших випадках.

// // <вираз> || <вираз>

// // У наступному прикладі умова зліва поверне true, тому результатом всього виразу буде true - повернеться значення першого операнда, яке було приведене до true.

// const apple = 5;
// console.log(apple < 10 || apple > 30); // true || false -> true

// // В цьому випадку результатом теж буде true, оскільки хоча б один із операндів, в цьому випадку правий, був приведений до true.

// const orange = 40;
// console.log(orange < 10 || orange > 30); // false || true -> true

// // А тут жодна з умов не виконується, тому отримуємо false - значення останнього операнда.

// const mango = 20;
// console.log(mango < 10 || mango > 30); // false || false -> false

// // Тобто, логічне «АБО» зупиняється на правді і повертає те, на чому зупинилося або останній операнд.

// console.log(true || false); // true
// console.log(false || true); // true
// console.log(true || true); // true

// console.log(3 || false); // 3
// console.log(false || 3); // 3
// console.log(3 || true); // 3
// console.log(true || 3); // true

// const logEmail = { email: "user@email", password: "123456" };
// const logPhone = { phone: "380974562321", password: "123456" };

// function login(data) {
//   if (data.email || data.phone) {
//     return console.log(data.email, data.phone);
//   } else {
//     return console.error("Please login with email");
//   }
// }

// login(logPhone);

// Виконуючи логічне «АБО», правий операнд може не обчислюватися у випадку, якщо лівий був приведений до true.

// ---- Логічне «НЕ»​

// Всі оператори, які ми розглядали до цього, були бінарними - містять два операнди: лівий і правий.
// Логічне «НЕ» - це унарний оператор, який виконує операцію над одним операндом з правої сторони.

console.log(!true); // false
console.log(!false); // true
console.log(!3); // !3 -> !true -> false
console.log(!"Mango"); // !"Mango" -> !true -> false
console.log(!0); // !0 -> !false -> true
console.log(!""); // !"" -> !false -> true

const isOnline = true;
const isNotOnline = !isOnline; // !isOnline -> !true -> false

// const user = await fetch("https://translate.google.com/");

// if (!user || !seller && !isOnline && !isLogin) {
//    error
// }

// Оператор ! приводить операнд до буля, якщо необхідно, а потім робить інверсію - змінює його на протилежний true -> false або false -> true.

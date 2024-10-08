"use strict";
// ----------    Числа
// Усі числа в JavaScript, як цілі, так і дробові, мають тип Number і їх можна записувати не тільки в десятковій системі числення.

// ------ Приведення до числа

// Більшість арифметичних операцій і математичних функцій перетворюють значення у число автоматично.
// Для того, щоб зробити це явно, використовуйте функцію Number(value), передаючи їй у value те, що потрібно привести до числа.

// Якщо значення привести до числа неможливо, результатом буде спеціальне числове значення NaN (Not a Number).
// Аналогічним чином відбувається перетворення і в інших математичних операторах і функціях.

const valueA = "5";
console.log(Number(valueA)); // 5
console.log(typeof Number(valueA)); // "number"

// const valueB = "random string";
// console.log(Number(valueB)); // NaN
// console.log(typeof Number(valueB)); // "number"

// Методи Number.parseInt() і Number.parseFloat()​

// Перетворюють рядок символ за символом, доки це можливо. У разі виникнення помилки повертається підсумкове число.

// Метод Number.parseInt() парсить з рядка ціле число.

// console.log(Number.parseInt("5px")); // 5
// console.log(Number.parseInt("12qwe74")); // 12
// console.log(Number.parseInt("12.46qwe79")); // 12
// console.log(Number.parseInt("qweqwe")); // NaN

// // Метод Number.parseFloat() парсить з рядка дробове число.

// console.log(Number.parseFloat("5px")); // 5
// console.log(Number.parseFloat("12qwe74")); // 12
// console.log(Number.parseFloat("12.46qwe79")); // 12.46
// console.log(Number.parseFloat("qweqwe")); // NaN

// ---------   Перевірка на число

// Для перевірки на число можна використовувати метод Number.isNaN(val). Він перевіряє, чи вказане значення є NaN.
// Метод відповідає на запитання "Це Not A Number?" і повертає:

// true - якщо значення val - NaN
// false - якщо значення val - не NaN
// Для всіх значень val, крім NaN, при передачі в Number.isNaN(val) поверне false.
// Цей метод не намагається перетворити val в число, а просто виконує перевірку на NaN.

// const validNumber = Number("51"); // 51
// console.log(Number.isNaN(validNumber)); // false

// const invalidNumber = Number("qweqwe"); // NaN
// console.log(Number.isNaN(invalidNumber)); // true

// ----------    Додавання чисел з рухомою крапкою

// Додаючи нецілі числа, в JavaScript і в інших мовах програмування є особливість.
// Якщо коротко, то 0.1 + 0.2 не дорівнює 0.3, результат додавання буде більший, ніж 0.3.
// Це тому що машина рахує у двійковій системі.

// Число 0.1 у двійковій системі числення - це нескінченний дріб, оскільки у двійковій системі одиниця не ділиться на десять.
// Двійкове значення нескінченних дробів зберігається тільки до певного знаку, тому виникає неточність.
// При додаванні 0.1 і 0.2, додаються дві неточності, виходить незначна, але все-таки помилка в обчисленнях.

// console.log(0.1 + 0.2 === 0.3); // false
// console.log(0.1 + 0.2); // 0.30000000000000004

// // // Ще один спосіб - додати, а результат скоротити до певного знаку після коми за допомогою методу toFixed().

// console.log(0.17 + 0.246); // 0.41000000000000003
// console.log((0.17 + 0.24).toFixed(2)); // 0.41

// // ------------- Клас Math​

// // Один із вбудованих класів, який надає набір методів для роботи з числами. Знання всіх методів напам'ять не вимагається, тільки деяких, найбільш корисних.

// Math.floor(num) - повертає найменше ціле число,
// менше, або яке дорівнює зазначеному числу
console.log(Math.floor(1.7)); // 1

// Math.ceil(num) - повертає найбільше ціле число,
// більше, або яке дорівнює зазначеному числу.
console.log(Math.ceil(1.2)); // 2

// Math.round(num) - повертає значення числа,
// округленого до найближчого цілого
console.log(Math.round(1.2)); // 1
console.log(Math.round(1.5)); // 2

// Math.max(num1, num2, ...) - повертає найбільше ціле число з набору
console.log(Math.max(20, 10, 50, 40)); // 50

// Math.min(num1, num2, ...) - повертає найменше ціле число з набору
console.log(Math.min(20, 10, 50, 40)); // 10

// Math.pow(base, exponent) - піднесення до степеня
console.log(Math.pow(2, 4)); // 16

// Math.random() - повертає псевдовипадкове число в діапазоні [0, 1)
console.log(parseInt(Math.random() * 100000)); // випадкове число між 0 і 1
console.log(Math.random() * (10 - 1) + 1); // псевдовипадкове число від 1 до 10

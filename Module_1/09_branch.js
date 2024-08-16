"use strict";
// ---------    Розгалуження

// Розгалуження використовуються для виконання різноманітного коду, залежно від умови. Принцип роботи простий - результат умови приводиться до буля true або false,
// після чого потік програми спрямовується в ту або іншу гілку.

// Інструкція if

if (true) {
  // тіло if
}

// Вхідні дані, які приводяться до буля, називаються умовою.Умова ставиться після оператора if в круглих дужках.
// Якщо умова приводиться до true, то виконується код у фігурних дужках тіла if.

// let price = 0;
// const subscription = "pro";

// if (subscription === "pro") {
//   price = 100;
// }

// console.log(price); // 100

// Якщо умова приводиться до false, код у фігурних дужках буде пропущений.

// let cost = 0;
// const subscription = "free";

// if (subscription === "pro") {
//   cost = 100;
// }

// console.log(cost); // 0

// ---------   Інструкція if...else

// if (true) {
//   // тіло if
// } else {
//   // тіло else
// }

// Розширює синтаксис if таким чином, що якщо умова приводиться до false, виконається код у фігурних дужках після оператора else.

// let pay;
// const sub = "free";

// if (sub === "pro") {
//   pay = 100;
// } else {
//   pay = 0;
// }

// console.log(pay); // 0

// Якщо умова приводиться до true, тіло блока else ігнорується.

// let plan;
// const option = "pro";

// if (option === "pro") {
//   plan = 100;
// } else {
//   plan = 0;
// }

// console.log(plan); // 100

// ---------------- Інструкція else...if

// Конструкція if...else може перевірити і зреагувати на виконання або невиконання лише однієї умови.

//Блок else...if дозволяє додати після else ще один оператор if з умовою. В кінці ланцюжка може бути класичний блок else,
// який виконається лише у тому випадку, якщо жодна умова не приведеться до true.

let item;
const level = "premium";

if (level === "free") {
  item = 0;
} else if (level === "pro") {
  item = 100;
} else if (level === "premium") {
  item = 500;
} else {
  console.log("Invalid level type");
}

if (level === "free") {
  item = 0;
}
console.log("object");

if (level === "pro") {
  item = 100;
  if (item === 100) {
    console.log("object");
  }
}

console.log(item); // 500

// При першому true перевірки припиняться і виконається лише один сценарій, який відповідає цьому true.
// Тому, такий запис варто читати як: шукаю перший збіг умови, ігнорую все інше.

// -----------------  Інструкція switch-case

// У деяких випадках незручність читання складних розгалужень if...else можна уникнути, використовуючи «плоскіший» синтаксис інструкції розгалуження switch.

// Межі застосування switch обмежені задачами з одним загальним запитанням (що порівнювати) і рядом варіантів відповідей (з чим порівнювати).

// Його синтаксис складається із блоку switch(значення) - що потрібно порівняти і набору окремих випадків case значення - з чим потрібно порівняти.
// Для порівняння використовується оператор строгої рівності ===.Тобто, не можна порівняти більше або менше, лише рівність.

switch (true) {
  case true:
    // інструкції;
    break; // переривання виконаня switch

  case false:
    // інструкції;
    break;

  default: // Якщо умова не знайдена, виконується default інструкції
  // інструкції;
}

// Значення в блоці switch(значення) - рядок або число, яке порівнюється щодо строгої рівності з усіма значеннями в блоках case значення по черзі, зверху вниз.

// Оператор break в кінці кожного блоку case необхідний, щоб перервати подальші перевірки і одразу перейти до коду за switch у тому випадку, коли перевірка рівності повернула true.

// Якщо жодного збігу значень не відбулося, необхідно виконати код за замовчуванням, як і в блоці else для інструкції if...else.
// Для цього, після усіх блоків case додається блок default. Оператор break після блоку default не потрібен, тому що це вже остання операція,
// яка буде виконана в switch і управління буде передано коду після нього.

let value;
const role = "premium";

switch (role) {
  case "free":
    value = 0;
    break;

  case "pro":
    value = 100;
    break;

  case "premium":
    value = 500;
    break;

  default:
    console.log("Invalid role type");
}

console.log(value); // 500

// Якщо оператор break відсутній, то після того як виконається будь-яка умова case, усі наступні за ним блоки коду будуть виконуватися один за одним,
// що може призвести до небажаних наслідків у випадку неправильного застосування.

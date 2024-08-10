"use strict"
// Основні оператори

// --------- Математичні оператори

// Призначення, функціонал і пріоритет (порядок) операцій нічим не відрізняються від шкільного курсу алгебри. 
// Оператори повертають значення у вигляді результату виразу. 

const one = 10;
const two = 5;

// Додавання
console.log(one + two); // 15

// Віднімання
console.log(one - two); // 5

// Множення
console.log(one * two); // 50

// Ділення
console.log(one / two); // 2

// Остача від ділення
console.log(one % two); // 0

// Додавання із заміною (також є для всіх інших операторів)
let value = 5;

// Аналогічно запису value = value + 10;
value += 10;
console.log(value); // 15

// Важливо запам'ятати терміни складових виразу. + - * / % називаються оператори, а те, на чому вони застосовуються - операнди.



//  --------  Оператори порівняння

// Використовуються для порівняння двох значень. Результатом свого виконання повертають буль - true або false, тобто «так» або «ні».

// a > b   // більше
// a < b   // менше
// a >= b  // більше або дорівнює
// a <= b  // менше або дорівнює
// a == b // рівність
// a != b // нерівність
// a === b // строга рівність
// a !== b // строга нерівність

const x = 5;
const y = 10;
const z = 5;

console.log("x > y:", x > y); // false
console.log("x < y:", x < y); // true
console.log("x < z:", x < z); // false
console.log("x <= z:", x <= z); // true
console.log("x === y:", x === y); // false
console.log("x === z:", x === z); // true
console.log("x !== y:", x !== y); // true
console.log("x !== z:", x !== z); // false

// Оператори рівності

// «Нестрогі» оператори рівності == і != виконують перетворення типів порівнюваних значень у число, що може призвести до помилок, особливо у початківців.

// X Погано, виконується приведення типів

console.log(5 == "5"); // true
console.log(5 != "5"); // false
console.log(1 == true); // true
console.log(1 != true); // false

// Тому для перевірки рівності або нерівності двох значень, використовуються тільки оператори === (строга рівність) і !== (строга нерівність), 
// які не виконують приведення типів операндів.

// Добре, приведення типів не виконується

console.log(5 === "5"); // false
console.log(5 === 5); // true
console.log(5 !== "5"); // true
console.log(5 !== 5); // false
console.log(1 === true); // false
console.log(1 !== true); // true

// У такому випадку, все дорівнює собі. Перед оцінкою нічого не перетворюється.


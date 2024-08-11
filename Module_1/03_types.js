"use strict"
// Примітивні типи даних //


// В JavaScript змінна не асоціюється з будь-яким типом даних, тип має її значення. Тобто змінна може зберігати значення різних типів.

// Number
const age = 25; //   Числовий тип даних. Включає цілі числа та числа з плаваючою точкою.
console.log('Тип змінної:',typeof age);

//String
const firstName = "John"; // Рядковий (строка) тип даних. Подає текст.
console.log('Тип змінної:',typeof firstName);

//Boolean
const isStudent = true; // Логічний тип даних. Може приймати значення 'true' або 'false'
console.log('Тип змінної:',typeof isStudent);

// Undefined
let salary; // Тип даних, який означає, що змінну оголошено, але значення їй не надано.
console.log('Тип змінної:',typeof salary);

// Null
const misterio = null; // Спеціальне значення, що становить відсутність будь-якого об'єкта чи значення. Це окремий тип даних.
console.log('Тип змінної:',typeof misterio);

// Symbol
let id = Symbol("id"); // Унікальні та незмінні ідентифікатори. Часто використовуються як ключі властивостей об'єктів.
console.log('Тип змінної:',typeof id);

// BigInt
const bigInt = 1234567890123456789012345678901234567890n; // Тип даних для подання цілих чисел довільної точності. Використовується для роботи з числами, що перевищують розмір Number
console.log('Тип змінної:',typeof bigInt);


// Посилальні типи даних //

// Object
const person = { name: "John", age: 25 }; // Це тип даних, який може зберігати колекції даних або складніші структури. Об'єкт може включати властивості та методи.
console.log('Тип змінної:',typeof person);

// Array
const grades = [85, 90, 78]; // Особливий вид об'єкта для зберігання впорядкованих колекцій даних.
const hobbies = ["reading", "painting"];
const students = [{ name: "John", age: 25 }, { name: "Nick", age: 22 }];
console.log('Тип змінної:',typeof hobbies);

// Function
function greet() {
    return "Alloha!"; 
}  // Особливий вид об'єкта, може бути викликаний. Функції JavaScript також вважаються об'єктами.
greet();

// Date

const dateNow = new Date(); // Об'єкт, що представляє дату та час.
console.log(dateNow);
"use strict"
// --------  Рядки

// Рядок - це індексований набір з нуля або більше символів, взятих в одинарні або подвійні лапки.

const username = "Mango";

// Важливо пам'ятати, що індексація елементів рядка починається з нуля. Наприклад, в рядку "JavaScript" літера "J" стоїть на позиції з індексом 0, а "t" - під індексом 9.

// Вміст рядка не можна змінити, лише прочитати. 
// Тобто, не можна взяти будь-який символ і замінити його, як тільки рядок створений - він такий назавжди. 
// Можна лише створити повністю новий рядок і присвоїти у змінну замість старого.

// ------ Конкатенація рядків

// Якщо застосувати оператор + до рядка і будь-якого іншого типу даних, результатом операції «додавання» буде рядок. 
// Ця операція називається конкатенація, або додавання рядків.

// Під час конкатенації, будь-який тип даних приводиться до рядка і зшивається з рядком, але є особливість - послідовність запису операндів.

// Послідовність операцій має значення, перетворення типів відбувається тільки в момент операції додавання з рядком, до цього моменту діють звичні правила математики.

const message = "Mango " + "is" + " happy";
console.log(message); // Mango is happy

// ------ Типи операндів 

console.log(1 + "2"); // "12"
console.log(1 + "2" + 4); // "124"
console.log(1 + 2 + "4"); // "34"

// В останньому прикладі відбулася математична операція додавання для перших двох чисел 1 і 2, після чого число 3 було перетворено у рядок "3" і зшито з рядком "4".

// ------- Шаблонні рядки 

// Шаблонні рядки - це альтернатива конкатенації зі зручнішим синтаксисом. 
// Шаблонний рядок береться у зворотні (косі) лапки, замість подвійних або одинарних, і може містити заповнювачі місця, 
// які позначаються знаком долара і фігурними дужками - ${вираз}.

// Використовуючи змінні, необхідно скласти рядок з підставленими значеннями
const guestName = "Манго";
const roomNumber = 207;
const greeting =
  "Welcome " + guestName + ", your room number is " + roomNumber + "!";
console.log(greeting); // "Welcome Mango, your room number is 207!"

// Складати рядки з підставленими значеннями, використовуючи конкатенацію, - дуже незручно. 
// На допомогу приходять шаблонні рядки та інтерполяція.

const guest = "Манго";
const room = 207;
const gree = `Welcome ${guest}, your room number is ${room}!`;
console.log(gree); // "Welcome Mango, your room number is 207!"

// --------- Властивості і методи рядків

// У кожного рядка є вбудовані властивості і методи, розглянемо деякі з них.

// Властивість length.Для того, щоб дізнатися довжину рядка, тобто кількість його символів, 
// у всіх рядків є вбудована властивість length, значення якої можна отримати, 
// звернувшись до нього через крапку після імені змінної або рядкового літерала.

const msg = "Welcome to Bahamas!";
console.log(msg.length); // 19
console.log("There is nothing impossible to him who will try".length); // 47

// Методи toLowerCase() і toUpperCase()​

// Повертають новий рядок у відповідному регістрі, не змінюючи оригінальний рядок.

const newMessage = "Welcome to Bahamas!";
console.log(newMessage.toLowerCase()); // "welcome to bahamas!"
console.log(newMessage.toUpperCase()); // "WELCOME TO BAHAMAS!"
console.log(newMessage); // "Welcome to Bahamas!"

// Бувають ситуації, коли всі символи в рядку необхідно перетворити в один регістр, верхній або нижній. 
// Наприклад, для пошуку за ключовим словом, коли користувач вводить рядок 'saMsUng', а порівняти його потрібно з рядком 'samsung' або 'SAMSUNG'.

console.log("saMsUng" === "samsung"); // false
console.log("saMsUng" === "SAMSUNG"); // false

// Щоб не вимагати абсолютно точне введення, можна зробити «нормалізацію» введеного користувачем рядка, тобто перетворити всі його символи у верхній або нижній регістр. 
// Методи рядка toLowerCase() і toUpperCase() повернуть новий рядок у відповідному регістрі, не змінюючи оригінальний.

const BRAND_NAME = "SAMSUNG";
const userInput = "saMsUng";
const normalizedToUpperCaseInput = userInput.toUpperCase();

console.log(userInput); // 'saMsUng'
console.log(userInput === BRAND_NAME); // false
console.log(normalizedToUpperCaseInput); // 'SAMSUNG'
console.log(normalizedToUpperCaseInput === BRAND_NAME); // true

// Метод indexOf()

// Повертає позицію (індекс), на якій знаходиться перший збіг підрядка або -1, якщо нічого не знайдено.

const str = "Welcome to Bahamas!";
console.log(str.indexOf("to")); // 8
console.log(str.indexOf("hello")); // -1

// Метод includes()​

// Перевіряє, чи міститься підрядок в рядку, повертає буль - true, якщо міститься, і false - в іншому випадку.
// Регістр символів в рядку і підрядку має значення, оскільки, наприклад, літера "a" не дорівнює літері "А".

const productName = "Ремонтний дроїд";

console.log(productName.includes("н")); // true
console.log(productName.includes("Н")); // false
console.log(productName.includes("дроїд")); // true
console.log(productName.includes("Дроїд")); // false
console.log(productName.includes("Ремонтний")); // true
console.log(productName.includes("ремонтний")); // false

// Усі методи рядків чутливі до регістру.

// ----------- Метод endsWith()​

// Дозволяє визначити, чи завершується рядок символами (підрядком), зазначеними в дужках, повертаючи true або false.

const scriptName = "script.js";
console.log(scriptName.endsWith(".js")); // true

const cssFileName = "styles.css";
console.log(cssFileName.endsWith(".js")); // false

// Методи replace() і replaceAll()

// Повертає новий рядок, в якому перше (replace) або усі збіги (replaceAll) підрядка замінені на вказане значення.

const fileName = "script.js";
const minifiedJsFileName = fileName.replace(".js", ".min.js");
console.log(minifiedJsFileName); // "script.min.js"

const cssFileNames = "styles.css, about.css, portfolio.css";
const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"


// -----------  Метод slice()​

// Метод рядків slice (startIndex, endIndex) використовується для створення копії частини або всього рядка. 
// Він робить копію елементів рядка від startIndex і до, але не включно endIndex і повертає новий рядок, не змінюючи оригінал.

const product = "Repair droid";
console.log(product.slice(0, 4)); // "Repa"
console.log(product.slice(3, 9)); // "air dr"
console.log(product.slice(0, product.length)); // "Repair droid"
console.log(product.slice(7, product.length)); // "droid"
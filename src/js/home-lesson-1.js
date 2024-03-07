// Example 1 - Математичні оператори
// Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.

const apples = 47;
const grapes = 135;
const total = apples + grapes;
// console.log(total);
const diff = grapes - apples;
// console.log(diff);

// Example 2 - Комбіновані оператори
// Заміни вираз перевизначення комбінованим оператором +=.

let students = 100;
students += 50;
// console.log(students);

// Example 3 - Пріоритет операторів
// Розбери пріоритет операторів в інструкції привласнення значення змінної result.

const result = 108 + 223 - 2 * 5;
// console.log(result);

// Example 4 - Клас Math
// Напиши скрипт, який виводить у консоль заокруглені вгору / вниз і т.д.
// значення змінної value.Використовуй методи Math.floor(), Math.ceil() та Math.round().
// Перевір що буде в консолі при значеннях 27.3 та 27.9.

// const value = 27.5;
// console.log(Math.floor(value));
// console.log(Math.ceil(value));
// console.log(Math.round(value));

// Example 5 - Шаблонні рядки
// Склади фразу за допомогою шаблонних рядків A has B bots in stock, де A, B - змінні вставлені в рядок.

const companyName = 'Cyberdyne Systems';
const repairBots = 250;
const defenceBots = 50;
const message = `Cyberdyne Systems has ${
  repairBots + defenceBots
} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// Example 6 - Методи рядків та чейнінг
// Напиши скрипт, який розраховує індекс маси тіла людини.Для цього необхідно розділити вагу в
// кілограмах на квадрат висоти людини у метрах.

// Вага та висота зберігаються у змінних weight та height, але не як числа, а в вигляді рядків
//     (спеціально для завдання).Не цілі числа можуть бути задані у вигляді 24.7 або 24, 7, тобто
//     як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

let weight = '88,3';
let height = '1.75';

const weightPars = weight.replace(',', '.');
const heightPars = height.replace(',', '.');

const bmi = Number((Number(weightPars) / Number(heightPars ** 2)).toFixed(1));
// console.log(bmi); // 28.8

// Example 7 - Оператори порівняння та приведення типів
// Яким буде результат виразів?

// console.log(5 > 4); //true

// console.log(10 >= '7'); // true

// console.log('2' > '12'); // true

// console.log('2' < '12'); // false

// console.log('4' == 4); // true

// console.log('6' === 6); // false

// console.log('false' === false); //false

// console.log(1 == true); // true

// console.log(1 === true); // false

// console.log('0' == false); // true

// console.log('0' === false); // false

// console.log('Papaya' < 'papaya'); //true

// console.log('Papaya' === 'papaya'); // false

// console.log(undefined == null); // true

// console.log(undefined === null); // false

// Example 8 - Логічні оператори
// Яким буде результат виразів?

// console.log(true && 3); // 3

// console.log(false && 3); // false

// console.log(true && 4 && 'kiwi'); // 'kiwi'

// console.log(true && 0 && 'kiwi'); // 0

// console.log(true || 3); // true

// console.log(true || 3 || 4); // true

// console.log(true || false || 7); // true

// console.log(null || 2 || undefined); // 2

// console.log((1 && null && 2) > 0); // false

// console.log(null || (2 && 3) || 4); // 3

// Example 9 - Значення за замовчуванням та оператор нульового злиття
// Отрефактори код так, щоб у змінну value присвоювалося значення змінної
// incomingValue, якщо воно не рівне undefined або null.В іншому випадку має
// присвоюватися значення defaultValue.Перевір роботу скрипта для наступних
// значень змінної incomingValue: null, undefined, 0, false.Використовуй оператор ?? (nullish coalescing operator).

const incomingValue = 5;
const defaultValue = 10;
const value = incomingValue || defaultValue;
// console.log(value);

// Example 10 - Оператор % та методи рядків
// Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) в рядок у форматі годин та хвилин HH:MM.

// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01
const totalMinutes = 70;

const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

const doubleDigitHours = String(hours).padStart(2, 0);
const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

// Example 1 - Введення користувача та розгалуження
// Використовуючи конструкцію if..else та prompt, напиши код, який питатиме:
// "Яка офіційна назва JavaScript?".Якщо користувач вводить ECMAScript, то показуй
// alert з рядком "Правильно!", в іншому випадку - "Не знаєте? ECMAScript!"

// Example 2 - Відображення часу (if...else)
// Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді рядка формату
// "14 г. 26 хв.".Якщо значення змінної minutes дорівнює 0, то виводь рядок "14 г.", без хвилин.

// const message = prompt(
//   'Яка офіційна назва JavaScript?".Якщо користувач вводить ECMAScript'
// );
// if (message === 'ECMAScript') {
//   alert('Правильно!');
// } else {
//   alert('Не знаєте? ECMAScript!');
// }

// const hours = 14;
// const minutes = 0;
// let timestring;

// if (minutes === 0) {
//   timestring = `${hours} г.`;
// } else {
//   timestring = `${hours} г. ${minutes} хв.`;
// }
// console.log(timestring);

// Example 3 - Розгалуження
// Напиши скрипт, який виводить у консоль рядок "Це позитивне число",
//     якщо у prompt користувач ввів число більше нуля.Якщо було введено
// нуль, виводь в консоль рядок "Це нуль".Якщо передали від'ємне число, у консолі повинен бути рядок "Це негативне число".

// const userInput = prompt('Введіть число');
// if (userInput < 0) {
//   console.log('Це негативне число');
// } else if (userInput > 0) {
//   console.log('Це позитивне число');
// } else {
//   console.log('Це нуль');
// }

// Example 4 - Вкладені розгалуження
// Напиши скрипт, який порівнює числа у змінних a та b.Якщо обидва
// значення більше 100, то виведи в консоль максимальне з них.В протилежному
// випадку у консолі повинна бути сума значення b та числа 512.

const a = 120;
const b = 180;

// if (a > 100 && b > 100) {
//   if (a > b) {
//     console.log(a);
//   }
//   console.log(b);
// } else {
//   console.log(b + 512);
// }

// Example 5 - Форматування посилання (endsWith)
// Напиши скрипт який перевіряє чи закінчується значення змінної link
// символом /.Якщо ні, додай до кінця значення link цей символ.Використовуй конструкцію if...else.

// let link = 'https://my-site.com/about';

// if (link.endsWith('/')) {
// } else {
//   link += '/';
// }
// console.log(link);

// Example 6 - Форматування посилання (includes та логічне «І»)
// Напиши скрипт який перевіряє чи закінчується значення змінної link
// символом /.Якщо ні, додай до кінця значення link цей символ, але тільки
// в тому випадку, якщо в link є підрядок "my-site".Використовуй конструкцію if...else.

// let link = 'https://somesite.commy-site/about';

// if (!link.endsWith('/') && link.includes('my-site')) {
//   link += '/';
// } else {
// }
// Пиши код нижче за цей рядок

// Пиши код вище за цей рядок
// console.log(link);

// Example 7 - Форматування посилання (тернарний оператор)
// Виконай рефакторинг коду задачі номер 4, використовуючи тернарний оператор.

// let link = 'https://somesite.com/about';
// // if (link.includes('my-site') && !link.endsWith('/')) {
// //   link += '/';
// // }
// link = link.includes('my-site') && !link.endsWith('/') ? (link += '/') : link;
// console.log(link);

// Example 8 - if...else та логічні оператори
// Напиши скрипт який виводитиме в консоль браузера рядок залежно від значення змінної hours.

// Якщо значення змінної hours:

// менше 17, виводь рядок "Pending"
// більше або дорівнює 17 і менше або дорівнює 24, виводь рядок "Expires"
// більше 24 , виводь рядок "Overdue"
// const hours = 27;

// if (hours > 24) {
//   console.log('Pending');
// } else if (hours >= 17 && hours <= 24) {
//   console.log('Expires');
// } else {
//   console.log('Overdue');
// }

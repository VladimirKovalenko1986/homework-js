// Example 1 - Базові операції з масивом
// Створіть масив genres з елементами «Jazz» та «Blues».
// Додайте «Рок-н-рол» до кінця.
// Виведіть у консоль перший елемент масиву.
// Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву довільної довжини.
// Видаліть перший елемент та виведіть його в консоль.
// Вставте «Country» та «Reggae» на початок масиву.

// const genres = ['Jazz', 'Blues'];
// genres.push('Рок-н-рол');
// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// const deletFirstEl = genres.splice(0, 1);
// console.log(deletFirstEl);
// console.log(genres);
// genres.unshift('Country', 'Reggae');
// console.log(genres);

// Напиши скрипт для обчислення площі прямокутника зі сторонами,
// значення яких зберігаються у змінній values у вигляді рядка.Значення гарантовано розділені пробілом.

// const values = '8 11';

// const arrValue = values.split(' ');
// const areaPentagon = arrValue[0] * arrValue[1];
// console.log(areaPentagon);

// Example 3 - Перебір масиву
// Напиши скрипт для перебору масиву fruits циклом for.Для кожного елемента
// масиву виведи в консоль рядок у форматі номер_елемента: значення_елемента.Нумерація елементів повинна починатися з 1.

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i <= fruits.length; i += 1) {
//   console.log(`${fruits[i]}: ${i + 1}`);
// }

// Example 4 - Масиви та цикли
// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
// У змінних names та phones зберігаються рядки імен та телефонних номерів, розділені
// комами.Порядковий номер імен та телефонів у рядках вказують на відповідність.Кількість імен та телефонів гарантовано однакова.

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';
// const arrNemes = names.split(',');
// const arrPhones = phones.split(',');
// console.log(arrNemes);

// for (let i = 0; i < arrNemes.length; i += 1) {
//   console.log(`${arrNemes[i]}: ${arrPhones[i]}`);
// }

// Example 5 - Масиви та рядки
// Напиши скрипт, який виводить у консоль усі слова рядка крім першого і
// останнього.Результуючий рядок не повинен починатися або закінчуватися символ
// пробілу.Скрипт повинен працювати для будь - якого рядка.

// const string = 'sdsds Welcome to the future sdsds dffdfd';
// const arr = string.split(' ');
// const spliceFromFirstAndLastEl = arr.slice(1, arr.length - 1);
// const parsArrString = spliceFromFirstAndLastEl.join(' ');
// console.log(parsArrString);

// Example 6 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок букв) і виводить його в консоль.

// const string = 'Welcome to the future';
// let reversedString = '';

// for (let i = string.length - 1; i >= 0; i--) {
//   reversedString += string[i];
// }

// console.log(reversedString);

// const reversedString = string.split('').reverse().join('');
// console.log(reversedString);

// Example 7 - Сортування масиву із циклом
// Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою елемента.

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];

// langs.sort((a, b) => a[0].localeCompare(b[0]));

// console.log(langs);

// for (let i = 0; i < langs.length - 1; i += 1) {
//   for (let j = 0; j < langs.length - i - 1; j += 1) {
//     if (langs[j][0] > langs[j + 1][0]) {
//       const temp = langs[j];
//       langs[j] = langs[j + 1];
//       langs[j + 1] = temp;
//     }
//   }
// }

// console.log(langs);

// Example 8 - Пошук елемента
// Напиши скрипт пошуку найменшого числа у масиві.Код повинен працювати для
// будь - якого масиву чисел.Використовуй цикл для розв'язання задачі.

// const numbers = [17, 94, 23, 37, 55, 555, 3333, 3];
// let min = numbers[0];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (min > numbers[i]) {
//     min = numbers[i];
//   }
// }
// console.log(min); // 1

// let min = Math.min(...numbers);
// console.log(min);

// let min = null;
// const sortMinNumber = numbers.sort((a, b) => a - b);
// min = sortMinNumber[0];
// console.log(min);

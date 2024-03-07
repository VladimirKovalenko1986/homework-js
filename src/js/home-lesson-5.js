// Example 1 - Основи об'єктів
// Напиши скрипт, який для об'єкта user, послідовно:

// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const userKeys = Object.keys(user);
// console.log(userKeys);

// for (const el of userKeys) {
//   console.log(`${el}: ${user[el]}`);
// }

// Example 2 - метод Object.values()
// У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
// підсумовування всіх зарплат і збережіть результат у змінній sum.Повинно вийти 390.
// Якщо об'єкт salaries порожній, то результат має бути 0.

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;
// const values = Object.values(salaries);
// for (const value of values) {
//   sum += value;
// }

// console.log(sum);

// Example 3 - Масив об'єктів
// Напишіть функцію calcTotalPrice(stones, stoneName), яка приймає масив
// об'єктів та рядок з назвою каменю. Функція рахує і повертає загальну вартість
// каміння з таким ім'ям, ціною та кількістю з об'єкта

// const stones = [
//   { name: 'Смарагд', price: 1300, quantity: 4 },
//   { name: 'Діамант', price: 2700, quantity: 3 },
//   { name: 'Сапфір', price: 400, quantity: 7 },
//   { name: 'Щебінь', price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {
//   let total = 0;
//   for (const { name, price, quantity } of stones) {
//     if (name === stoneName) {
//       total = price * quantity;
//     }
//   }
//   return total;
// }

// console.log(calcTotalPrice(stones, 'Смарагд'));
// console.log(calcTotalPrice(stones, 'Діамант'));
// console.log(calcTotalPrice(stones, 'Сапфір'));

// Example 4 - Комплексні завдання
// Напиши скрипт управління особистим кабінетом інтернет банку.Є об'єкт account в
// якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

/*
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Кожна транзакція це об'єкт із властивостями: id, type та amount
 */

const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  /*
   * Метод створює та повертає об'єкт транзакції.
   * Приймає суму та тип транзакції.
   */
  createTransaction(amount, type) {
    const transaction = {
      id: this.transactions.length + 1,
      amount: amount,
      type: type,
    };
    return transaction;
  },

  /*
   * Метод, що відповідає за додавання суми до балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій
   */
  deposit(amount) {
    const deposit = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(deposit);
    return (this.balance += amount);
  },

  /*
   * Метод, що відповідає за зняття суми з балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій.
   *
   * Якщо amount більше ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливе, недостатньо коштів.
   */
  withdraw(amount) {
    const withdraw = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(withdraw);
    if (this.balance < amount) {
      console.log('No money!!!');
      return false;
    } else {
      return (this.balance -= amount);
    }
  },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод шукає та повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    // for (const el of this.transactions) {
    //   if (el.id === id) {
    //     return el;
    //   }
    // }
    return this.transactions.find(el => el.id === id);
  },

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    const arr = [];
    for (const el of this.transactions) {
      if (el.type === type) {
        arr.push(el);
      }
    }
    return arr;

    // return this.transactions.filter(el => el.type === type);
  },
};

console.log(account.deposit(1000));
console.log(account.deposit(3000));
console.log(account.getBalance());
console.log(account.transactions);
console.log(account.withdraw(1000));
console.log(account.withdraw(2000));
console.log(account.transactions);
console.log(account.getBalance());
console.log(account.withdraw(2000));
console.log(account.getBalance());
console.log(account.transactions);
console.log(account.getTransactionDetails(2));
console.log(account.getTransactionTotal('deposit'));
console.log(account.getTransactionTotal('withdraw'));

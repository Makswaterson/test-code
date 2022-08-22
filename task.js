// Доповни код, присвоївши оголошеним змінним вирази звертання до відповідних елементів або властивостей рядка у змінній course.

// courseTopicLength - довжина рядка.
// firstElement - перший символ рядка.
// lastElement - останній символ рядка.

// const courseTopic = 'JavaScript essentials';
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[20];

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

/////////////////////////////////////////

// console.log(courseTopic.length);
// console.log(courseTopic[0]);
// // console.log(courseTopic[20]);
// console.log(courseTopic[courseTopic.length - 1]);

// //////////////////////////////////////////////////////
// Присвой змінній substring вираз створення підрядка довжиною length символів (від початку) з рядка string.

// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Change this line

//   return substring;
// }

////////////////////////////////////////////////////////////////////////
// Функція formatMessage(message, maxLength) приймає рядок (параметр message) і форматує його, якщо довжина перевищує значення в параметрі maxLength.

// Доповни код функції таким чином, що якщо довжина рядка:

// не перевищує maxLength, функція повертає його в початковому вигляді.
// більша за maxLength, то функція обрізає рядок до maxLength символів і додає в кінець три крапки "...", після чого повертає скорочену версію.

// function formatMessage(message, maxLength) {
//   let result = message.length > maxLength ? message.slice(0, maxLength) + `...` : message;

//   return result;
// }
////////////////////////////////////////////////////////////////////////////////
//Функція normalizeInput(input) приймає рядок (параметр input) і повертає такий самий рядок, але в нижньому регістрі. Присвой змінній normalizedInput вираз створення рядка у нижньому регістрі з параметра input./
// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   return normalizedInput;
// }
/////////////////////////////////////////////////////

//Присвой змінній result вираз перевірки входження імені (параметр name), у повне ім'я (параметр fullname). Нехай функція чітко розрізняє регістр літер, тобто «Петя» і «петя» - для неї різні імена.//

// function checkForName(fullName, name) {
//   const result = fullName.includes(name); // Change this line
//   return result;
// }
///////////////////////////////////////////////////////////

///Функція checkForSpam(message) приймає рядок (параметр message), перевіряє його на вміст заборонених слів spam і sale, і повертає результат перевірки. Слова в рядку параметра message можуть бути у довільному регістрі, наприклад SPAM або sAlE.

// Якщо знайшли заборонене слово (spam або sale) то функція повертає буль true.
// Якщо в рядку відсутні заборонені слова, функція повертає буль false.

// function checkForSpam(message) {
//   // Change code below this line
//   const normalizedToLowerCaseInput = message.toLowerCase();
//   result =
//     normalizedToLowerCaseInput.includes('sale') || normalizedToLowerCaseInput.includes('spam');

//   // Change code above this line
//   return result;
// }
///////////////////////////////////////////////////

// task 2 function////////////////////////////////////////
// Напиши функцію findLongestWordstring), яка приймає довільний рядок, що складається тільки зі слів, розділених пробілом(параметр string), і повертає найдовше слово в цьому рядку.

// function findLongestWordstring(string) {

//     let words = string.split(" ")
//     let longWord = words[0]
//     for (let i = 0; i < words.length; i += 1) {

//         if (words[i].length > longWord.length) {
//             longWord = words[i]
//         }
//     }
//   return longWord
// }
// //  За допомогою конструкції for
// function findLongestWordstring(string) {
// let words = string.split(" ");
//     let longWord = words[0];

//   for (const word of words) {
//     if (word.length > longWord.length) {
//       longWord = word;
//     }
//   }
//   return longWord
// }
///////////////////////////////////////////////////////////////////
//
// Напиши функцію includes(array, value), яка робить те саме, що і метод масиву масив.includes(значення) - перевіряє, чи присутнє в масиві array значення value, повертаючи true, якщо присутнє, і false в іншому випадку.

// При виконанні цього завдання в тілі функції includes() не можна використовувати метод масив.includes(значення).
//
// function includes(array, value) {
//   // Change code below this line
// for (let i = 0; i < array.length; i+= 1) {
//   if (array[i] === value) {
//     return true
//   }

// }
// return false
//   // Change code above this line
// }

// function includes(array, value) {
//   // Change code below this line

// for (const element of array) {
//   if (element === value) {
//     return true
//   }
// }
// return false
//   // Change code above this line
// }
////////////////////////////////////////////////////////////////////////

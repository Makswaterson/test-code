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

// ///////////////////////////////////////////////////////////
// Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною, а в майбутньому, можливо, й іншими характеристиками. Тому зараз у властивості potions буде зберігатися масив об'єктів з наступними властивостями
// {
//   name: "Dragon breath",
//   price: 700
// }
// Виконай рефакторинг методів об'єкта atTheOldToad таким чином, щоб вони працювали не з масивом рядків, а з масивом об'єктів.

// getPotions() - метод для отримання всього зілля. Повертає значення властивості potions.
// addPotion(newPotion) - додає зілля newPotion (вже об'єкт) в масив у властивості potions, але тільки, якщо такого зілля ще немає в інвентарі. В іншому випадку повертається рядок.
// removePotion(potionName) - видаляє об'єкт зілля з ім'ям potionName з масиву у властивості potions.
// updatePotionName(oldName, newName) - оновлює властивість name об'єкта-зілля з назвою oldName на newName в масиві potions.
// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],

//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (let potion of this.potions) {
//       if (newPotion.name === potion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const { potions } = this;
//     for (let i = 0; i < potions.length; i += 1) {
//       if (potionName === potions[i].name) {
//         return potions.splice(i, 1);
//       }
//     }

//     `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     const { potions } = this;
//     for (let i = 0; i < potions.length; i += 1) {
//       if (oldName === potions[i].name) {
//         return (potions[i].name = newName);
//       }
//     }

//     `Potion ${oldName} is not in inventory!`;
//   },
// };
// /////////////////////////////////////////////Variant 2/////////////////////////////////////
const atTheOldToad = {
  //   potions: [
  //     { name: 'Speed potion', price: 460 },
  //     { name: 'Dragon breath', price: 780 },
  //     { name: 'Stone skin', price: 520 },
  //   ],
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const potion of potions) {
      if (newPotions.name === potion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
      this.potions.push(newPotion);
    }
  },
  removePotion(potionName) {
    for (let i = 0; i < potions.length; i += 1) {
      if (potionName === this.potions[i].name) {
        return this.potions.splice(i, 1);
      }
    }
  },
  updatePotionName(oldName, newName) {
    for (const potion of potions) {
      if (oldName === potion.name) {
        return (potion.name = newName);
      }
    }
    return `Potion ${oldName} is not in inventory!`;
  },
};

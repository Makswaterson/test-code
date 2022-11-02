'use strict';
/*
 * Основи подій. Створення та видалення слухачів. Об'єкт події
 */

/*
 ?- Найменування колбеків для слухачів
 ?  - handle*: handleSubjectEvent
 ?  - *Handler: subjectEventHandler
 ?  - on*: onSubjectEvent
 */

const swapBtnRef = document.querySelector('.js-swap-btn');
// console.log(swapBtn);
const imgRef = document.querySelector('.js-img');
const removeBtnRef = document.querySelector('.js-remove-listener');

const handleClick = () => {
  imgRef.src = 'https://picsum.photos/200/300';
  imgRef.alt = 'random photo';
};
swapBtnRef.addEventListener('click', handleClick);

const onRemoveClick = () => {
  swapBtnRef.removeEventListener('click', handleClick);
  swapBtnRef.disabled = true;
};
removeBtnRef.addEventListener('click', onRemoveClick);

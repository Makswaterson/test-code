/*
 * Делегирование
 * - один из многих
 * - несколько из многих и Set
//  */
// const tagsContainer = document.querySelector('.js-tags');

// tagsContainer.addEventListener('click', onTagsContainerClick);
// let selectedTags = null;

// function onTagsContainerClick(evt) {
//   if (evt.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   const currentBtnActive = document.querySelector('.tags__btn--active');
//   console.log(currentBtnActive);

//   //   console.log(evt.target);
//   const nextActiveBtnTargen = evt.target;
//   nextActiveBtnTargen.classList.add('tags__btn--active');
//   selectedTags = nextActiveBtnTargen.dataset.value;

//   if (currentBtnActive) {
//     currentBtnActive.classList.remove('tags__btn--active');
//   }

//   // currentBtnActive?.classList.remove('tags__btn--active');
//   // Оператор необязательного свойства .? . При доступе к свойству работает только если правая часть не null и не undefind.

//   console.log(selectedTags);
// }

// ///////////////////// Second way /////////////////////////////

// const tagsContainer = document.querySelector('.js-tags');

// const selectedTags = [];

// tagsContainer.addEventListener('click', onTagsContainerClick);

// function onTagsContainerClick(evt) {
//   if (evt.target.nodeName !== 'BUTTON') {
//     return;
//   }
//   console.log(evt.target);
//   evt.target.classList.toggle('tags__btn--active');
//   selectedTags.push(evt.target.dataset.value);
//   console.log(selectedTags);
// }

/////////////////////// Third way //////////////////////////////////////

const tagsContainer = document.querySelector('.js-tags');

const selectedTags = new Set();
tagsContainer.addEventListener('click', onTagsContainerClick);

function onTagsContainerClick(evt) {
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }
  console.log(evt.target);
  const btn = evt.target;
  const isActiveBnt = btn.classList.contains('tags__btn--active');
  const tag = btn.dataset.value;

  if (isActiveBnt) {
    selectedTags.delete(tag);
  } else {
    selectedTags.add(tag);
  }

  btn.classList.toggle('tags__btn--active');

  console.log(selectedTags);
}

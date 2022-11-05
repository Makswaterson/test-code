'use strict';

const openModalBtn = document.querySelector('.js-modal-open');
const backdropRef = document.querySelector('.js-backdrop');
const closeModalBtn = document.querySelector('.js-modal-close');

const showModal = event => {
  backdropRef.classList.toggle('is-open');
};

const openBtnClick = event => {
  showModal();
  document.addEventListener('keydown', KeyBoardPress);
};

const closeBtnClick = event => {
  showModal();
  document.removeEventListener('keydown', KeyBoardPress);
};

openModalBtn.addEventListener('click', openBtnClick);

closeModalBtn.addEventListener('click', closeBtnClick);

const onBackDropClick = event => {
  if (event.target === event.currentTarget) {
    closeBtnClick();
  }
  //   console.log(event.target);
  //   console.log(event.currentTarget);
};

backdropRef.addEventListener('click', onBackDropClick);

function KeyBoardPress(event) {
  if (event.key === 'Escape') {
    closeBtnClick();
  }
  //   console.log(event.key);
  //   console.log(event.code);
}

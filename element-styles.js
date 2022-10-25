const openModalBtnRef = document.querySelector('.js-modal-btn');
const openBackdropBtnRef = document.querySelector('.js-backdrop');

openModalBtnRef.addEventListener('click', () => {
  openBackdropBtnRef.classList.add('is-backdrop-open');
  openModalBtnRef.classList.toggle('btn-active');
  // openModalBtnRef.className = 'btn-active';
});

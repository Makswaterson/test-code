'use strict';

const listItemsRefs = document.querySelectorAll('.pallet__item');
const listRef = document.querySelector('.js-pallet');
listItemsRefs.forEach(item => {
  const randomColor = getRangomColor();
  item.style.backgroundColor = randomColor;
  item.dataset.color = randomColor;
});

const onPalletClick = ({ target }) => {
  if (target.nodeName === 'UL') {
    return;
  }
  const spanRef = target.firstElementChild;
  const isActive = listRef.querySelector('.active');

  if (isActive) {
    isActive.classList.remove('active');
    isActive.firstElementChild.textContent = '...';
  }
  if (isActive === target) {
    return;
  }

  spanRef.textContent = target.dataset.color;
  target.classList.add('active');
  console.log(target.dataset.color);
};

listRef.addEventListener('click', onPalletClick);

// Для динамічного створення палітри
function getRangomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
}

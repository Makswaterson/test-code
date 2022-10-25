const titleRef = document.querySelector('.js-hero__title');
titleRef.textContent = 'Title from JS';
titleRef.style.fontSize = '50px';
titleRef.style.color = 'tomato';
// console.log(titleRef.textContent);
// titleRef.style.cssText = "color: blue; font-size: 40px; position: absolute";

const imgRef = document.querySelector('.js-img');
console.log(imgRef.hasAttribute('src'));
console.log(imgRef.getAttribute('title'));

const swapBtnRef = document.querySelector('[data-swap="false"]');
console.log(swapBtnRef);

swapBtnRef.addEventListener('click', () => {
  imgRef.src = 'https://picsum.photos/200/300';
  imgRef.alt = 'The best photo';
  imgRef.setAttribute('title', 'img');
  swapBtnRef.setAttribute('disabled', 'true');
});

const saveBntRef = document.querySelector('[data-action="save"]');
const closeBntRef = document.querySelector('[data-action="close"]');

console.log(closeBntRef.dataset.action);
closeBntRef.addEventListener('click', () => {
  saveBntRef.removeAttribute('disabled');
  closeBntRef.disabled = true;
});
saveBntRef.addEventListener('click', () => {
  closeBntRef.removeAttribute('disabled');
  saveBntRef.disabled = true;
});

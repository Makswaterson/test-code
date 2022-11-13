/*
 * Библиотека lazysizes
 * - feature detection
 */

const lazyImages = document.querySelectorAll('img[data-src]');
console.log(lazyImages);

lazyImages.forEach(image => {
  image.addEventListener('load', onImageLoad, { once: true });
});
function onImageLoad(evt) {
  console.log('Фото загружено');
  evt.target.classList.add('appear');
}

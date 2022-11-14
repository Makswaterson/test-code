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

if ('loading' in HTMLImageElement.prototype) {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  lazyImages.forEach(img => {
    img.src = img.dataset.src;
  });
  console.log('supported in browser');
} else {
  console.log('fetch polyfill/third-party library');
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
  script.integrity =
    'sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==';
  script.crossorigin = 'anonymous';
  script.referrerpolicy = 'no-referrer';
  document.body.appendChild(script);
}

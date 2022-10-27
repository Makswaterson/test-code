'use strict';
const pictures = [
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/0/700/460',
    alt: 'laptop',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/1/700/460',
    alt: 'developer',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/10/700/460',
    alt: 'forest',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/100/700/460',
    alt: 'beach',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/1000/700/460',
    alt: 'mountain',
  },
];

{
}

const galleryRef = document.querySelector('#js-gallery');
const listItems = pictures.map(({ alt, url, width, height }) => {
  return `<li><a href="#"><img src='${url}' alt='${alt}', width = '${width}', height = '${height}'></a></li>`;
});
let markup = listItems.join('');
galleryRef.innerHTML = markup;

const btnRef = document.querySelector('button');
btnRef.addEventListener('click', () => {
  markup += markup;
  galleryRef.insertAdjacentHTML('beforebegin', markup);
});

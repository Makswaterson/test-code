/*
<li class="gallery-item">
  <a href="#">
    <img src="https://picsum.photos/id/237/200/300" alt="Labrador">
  </a>
</li>
*/

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

const listRef = document.querySelector('.js-gallery');
console.log(listRef);

// const itemEl = document.createElement('li');
// itemEl.classList.add('gallery-item');
// const linkRef = document.createElement('a');
// linkRef.href = '#';

// const imgRef = document.createElement('img');
// imgRef.src = pictures[0].url;
// imgRef.alt = pictures[0].alt;
// linkRef.append(imgRef);
// itemEl.append(linkRef);

// listRef.append(itemEl);
// console.log(listRef);

const listItems = pictures.map(({ alt, url, width, height }) => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('gallery-item');
  const linkRef = document.createElement('a');
  linkRef.href = '#';
  const imgRef = document.createElement('img');
  imgRef.src = url;
  imgRef.alt = alt;
  imgRef.width = width;
  imgRef.height = height;
  linkRef.append(imgRef);
  itemEl.append(linkRef);
  // console.log(itemEl);

  return itemEl;
});
listRef.append(...listItems);

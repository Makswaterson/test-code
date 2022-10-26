'use strict';
/*
<li class="gallery-item">
  <a href="#">
    <img src="https://picsum.photos/id/237/200/300" alt="Labrador">
  </a>
</li>
*/
const listRef = document.querySelector('.js-gallery');
const itemEl = document.createElement('li');
itemEl.classList.add('gallery-item');
const linkRef = document.createElement('a');
linkRef.href = '#';

const imgRef = document.createElement('img');
imgRef.src = 'https://picsum.photos/id/237/200/300';
imgRef.alt = 'Labrador';
linkRef.append(imgRef);
itemEl.append(linkRef);

listRef.append(itemEl);
console.log(listRef);

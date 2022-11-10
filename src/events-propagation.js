'use strict';
/*
 * Поширення подій (занурення, таргетинг, спливання)
 */

// https://developer.mozilla.org/ru/docs/Web/API/EventTarget/addEventListener

const textRef = document.querySelector('.text');
const boxRef = document.querySelector('.div');
const sectionRef = document.querySelector('.section');

window.addEventListener('click', event => {
  console.group('Listener on window (4 -  сплиття, подія на абзаці)');
  console.log('target', event.target);
  console.log('currentTarget', event.currentTarget);
  console.groupEnd();
});
sectionRef.addEventListener(
  'click',
  event => {
    console.group('Listener on section (3 -  сплиття, подія на абзаці)');
    console.log('target', event.target);
    console.log('currentTarget', event.currentTarget);
    console.groupEnd();
  }
  // { once: true }
);

boxRef.addEventListener(
  'click',
  event => {
    console.group('Listener on div (2 -  сплиття, подія на div)');
    console.log('target', event.target);
    console.log('currentTarget', event.currentTarget);
    console.groupEnd();
  }
  //   { capture: true }
);

textRef.addEventListener('click', event => {
  console.group('Listener on p (1 -  сплиття, подія на абзаці)');
  console.log('target', event.target);
  console.log('currentTarget', event.currentTarget);
  console.groupEnd();
});

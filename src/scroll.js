'use strict';

const sectionListItemsRef = document.querySelectorAll('.section');
sectionListItemsRef.forEach(section => {
  section.style.backgroundColor = getRangomColor();
});

function getRangomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
}

const onHandleScroll = () => {
  if (window.pageYOffset > 800) {
    console.log('1/2 section 4');
    const animateSectionRef = document.querySelector('.animated-section');
    animateSectionRef.classList.add('active');
  }
};

const onTrottleHandleClick = _.throttle(onHandleScroll, 300);

document.addEventListener('scroll', onTrottleHandleClick);

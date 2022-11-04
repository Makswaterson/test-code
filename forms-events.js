'use strict';
/*
 *Події елементів форм. focus, blur, change, input, submit
 */

// {
//     name: 'Mango'
//     email: 'mango@gmail.com'
//  }

const formRef = document.querySelector('.js-contact-form');
const onHandleSubmit = event => {
  event.preventDefault();
  console.log('email', event.target.elements.email.value);
  console.log('name', event.target.elements.name.value);
};

formRef.addEventListener('submit', onHandleSubmit);

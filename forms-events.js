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
  const {
    elements: { name, email },
  } = event.currentTarget;
  if (name.value === '' || email.value === '') {
    alert('Заповність будь ласка всі поля');
    return;
  }
  const userData = {
    name: name.value,
    email: email.value,
  };
  console.log(userData);
  //   console.log(name.value);
  //   console.log(email.value);
  //   console.log('email', event.currentTarget.elements.email.value);
  //   console.log('name', event.currentTarget.elements.name.value);
};

formRef.addEventListener('submit', onHandleSubmit);

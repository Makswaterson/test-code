'use strict';
/*
 *Події елементів форм. focus, blur, change, input, submit
 */

// {
//     name: 'Mango'
//     email: 'mango@gmail.com'
//  }

const formRef = document.querySelector('.js-contact-form');
const nameInputRef = document.querySelector('.js-username-input');
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

const onInputFocus = event => {
  console.log('focus');
  console.log(event.target);
  event.target.classList.add('focus');
};
nameInputRef.addEventListener('focus', onInputFocus);

const onInputBlur = event => {
  const { dataset, value } = event.target;
  const requiredLength = Number(dataset.length);

  event.target.classList.remove('focus');
  // console.log('blur');
  // console.log(requiredLength);
  // console.log(value.length);
  // console.log(requiredLength === value.length);
  if (requiredLength === value.length) {
    // event.target.classList.add('valid');
    // event.target.classList.remove('invalid');
    changeClass('valid', 'invalid', event.target);
  } else {
    // event.target.classList.add('invalid');
    // event.target.classList.remove('valid');
    changeClass('invalid', 'valid', event.target);
  }
};
nameInputRef.addEventListener('blur', onInputBlur);

function changeClass(add, remove, elem) {
  elem.classList.add(add);
  elem.classList.remove(remove);
}

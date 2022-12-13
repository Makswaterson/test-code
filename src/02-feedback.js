// import '../css/common.css';
// import '../css/feedback-form.css';

// const STORAGE_KEY = 'feedback-msg';

// const refs = {
//   form: document.querySelector('.js-feedback-form'),
//   textarea: document.querySelector('.js-feedback-form  textarea'),
// };

// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', onTextareaInput);

// populateTextarea();

/*
 * - Останавливаем поведение по умолчанию
 * - Убираем сообщение из хранилища
 * - Очищаем форму
 */

// function onFormSubmit(evt) {
//   evt.preventDefault();
//   console.log('Отправляем форму');
//   evt.target.reset();
//   localStorage.removeItem(STORAGE_KEY);
// }

/*
 * - Получаем значение поля
 * - Сохраняем его в хранилище
 * - Можно добавить throttle
 */

// function onTextareaInput(evt) {
//   const message = evt.target.value;
//   localStorage.setItem(STORAGE_KEY, message);
// }

/*
 * - Получаем значение из хранилища
 * - Если там что-то было, обновляем DOM
 */

// function populateTextarea() {
//   const savedMessage = localStorage.getItem(STORAGE_KEY);
//   if (savedMessage) {
//     refs.textarea.value = savedMessage;
//   }
// }

///////////////////////////////////////////////////////////////////////

const STORAGE_KEY = 'feedback-msg';

const formData = {};

const refs = {
  form: document.querySelector('.js-feedback-form'),
  textarea: document.querySelector('.js-feedback-form  textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTextareaInput);

populateTextarea();

function onFormSubmit(evt) {
  evt.preventDefault();

  console.log('Отправляем форму');
  evt.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(evt) {
  // const message = evt.target.value;
  // localStorage.setItem(STORAGE_KEY, formData);

  formData[evt.target.name] = evt.target.value;
  const formDataJson = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, formDataJson);
  console.log(formData);
  console.log(formDataJson);
}

function populateTextarea() {
  const formData = localStorage.getItem(STORAGE_KEY);
  if (formData) {
    refs.textarea.value = formData;
    refs.textarea.name = formData;
  }
  const formDataJsonParse = JSON.parse(formData);
  if (formDataJsonParse) {
    formData[evt.target.name] = evt.target.value;
  }
}

refs.form.addEventListener('input', evt => {
  console.log(evt.target.name);
  console.log(evt.target.value);
  formData[evt.target.name] = evt.target.value;
  const formDataJson = JSON.stringify(formData[evt.target.name]);

  console.log(formDataJson);

  console.log(formData);
});

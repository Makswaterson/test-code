// import throttle from 'lodash.throttle';
// import '../css/common.css';
// import '../css/feedback-form.css';

const STORAGE_KEY = 'feedback-msg';

const refs = {
  form: document.querySelector('.js-feedback-form'),
  textarea: document.querySelector('.js-feedback-form  textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTextareaInput);

populateTextarea();

/*
 * - Останавливаем поведение по умолчанию
 * - Убираем сообщение из хранилища
 * - Очищаем форму
 */

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log('Отправляем форму');
  evt.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

/*
 * - Получаем значение поля
 * - Сохраняем его в хранилище
 * - Можно добавить throttle
 */

function onTextareaInput(evt) {
  const message = evt.currentTarget.value;
  localStorage.setItem('feedback-msg', message);
}

/*
 * - Получаем значение из хранилища
 * - Если там что-то было, обновляем DOM
 */

function populateTextarea() {
  const savedMessage = localStorage.getItem('STORAGE_KEY');
  if (savedMessage) {
    refs.textarea.value = savedMessage;
  }
}

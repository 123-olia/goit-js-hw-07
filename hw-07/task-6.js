/*
Задание 6
Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/>
Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid.

#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}
*/

const inputInform = document.querySelector('#validation-input');
const dataLength = inputInform.dataset.length;

// console.log(dataLength);

inputInform.addEventListener('change', checkValid);

function checkValid(event) {
  if (event.currentTarget.value.length === Number(dataLength)) {
    inputInform.classList.add('valid');
    inputInform.classList.remove('invalid');
  } else {
    inputInform.classList.add('invalid');
    inputInform.classList.remove('valid');
  }
}

// inputInform.removeEventListener('change', checkValid);

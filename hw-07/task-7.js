/*
Задание 7
Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

<input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span>
*/
const range = document.querySelector('#font-size-control');
const textToChange = document.querySelector('#text');

range.addEventListener('input', changeSize);

function changeSize(event) {
  let size = range.value;
  textToChange.style.fontSize = size + 'px';
}

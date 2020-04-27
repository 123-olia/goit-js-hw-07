/*
В HTML есть пустой список ul#ingredients.

<ul id="ingredients"></ul>
В JS есть массив строк.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().
*/

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingred = document.querySelector('#ingredients');

const items = ingredients.map(ingredient => {
  const creatorLi = document.createElement('li');
  creatorLi.textContent = ingredient;
  return creatorLi;
});

ingred.append(...items);

// for (let i = 0; i < ingredients.length; i++) {
//   const creatorLi = document.createElement('li');
//   creatorLi.textContent = ingredients[i];
//   // console.log(creatorLi);

//   const ingred = document.querySelector('#ingredients');
//   ingred.appendChild(creatorLi);
// }

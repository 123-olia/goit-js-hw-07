/* 
Напиши скрипт, который выполнит следующие операции.

Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

Например для первой категории получится:

Категория: Животные
Количество элементов: 4
*/

const catsQuantity = document.querySelectorAll('.item');
console.log(`В списке ${catsQuantity.length} категории.`);

catsQuantity.forEach(item =>
  console.log(`Категория: ${item.querySelector('h2').textContent}
Количество элементов: ${item.querySelectorAll('li').length}`),
);

// for (let i = 0; i < catsQuantity.length; i++) {
//   const el = catsQuantity[i];
//   const title = el.querySelector('h2');
//   const list = el.querySelectorAll('li');
//   console.log(
//     `Категория: ${title.textContent}
//     Количество элементов: ${list.length}`,
//   );
// }

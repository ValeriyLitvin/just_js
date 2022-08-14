const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const liEl = document.querySelector('#ingredients');

const createElement = ingredients.map((ingredient, index) => {
  const listEl = document.createElement('li');
  listEl.classList.add('item', 'list-item-js');
  listEl.textContent = ingredients[index];
  return listEl;
});
liEl.append(...createElement);

/*

Напиши скрипт, який для кожного елемента масиву ingredients:

Створить окремий елемент <li>. 
Обов'язково використовуй метод document.createElement().
Додасть назву інгредієнта як його текстовий вміст.
Додасть елементу клас item.
Після чого, вставить усі <li> 
за одну операцію у список ul#ingredients.

*/

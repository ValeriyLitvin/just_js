const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsEl = ingredients.map(ingredient => {
  console.log(ingredient);
  const creationLi = document.createElement('li');
  creationLi.classList.add('item', 'list-item-js');
  creationLi.textContent = ingredient;
  console.log(creationLi);

  return creationLi;
});
const liEl = document.querySelector('#ingredients');

liEl.append(...ingredientsEl);

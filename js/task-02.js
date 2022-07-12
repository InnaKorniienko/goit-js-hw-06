const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');
ingredientsEl.textContent = 'Ingredients: ';
console.log(ingredientsEl);

const elementsEl = ingredients.map(ingredients => {
const newLiEl = document.createElement('li');
newLiEl.classList.add('item');
newLiEl.textContent = ingredients;
console.log(newLiEl);
return newLiEl;
});

ingredientsEl.append(...elementsEl);


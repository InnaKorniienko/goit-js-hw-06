const numberOfCategoriesEl = document.querySelectorAll('.item');
console.log('Number of categories:', numberOfCategoriesEl.length);

numberOfCategoriesEl.forEach(function (element, index) {
const categoryEl = element.querySelector('h2');
const elementsEl = element.querySelectorAll('li'); 
console.log('Category:', categoryEl.textContent);
console.log('Elements:', elementsEl.length);
})



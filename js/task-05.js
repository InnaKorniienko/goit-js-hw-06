const inputnameEl = document.querySelector('#name-input');
console.log(inputnameEl);

const outputnameEl = document.querySelector('#name-output');
console.log(outputnameEl);  


inputnameEl.addEventListener('input', onInputChange) 

function onInputChange(event) {
    outputnameEl.textContent = inputnameEl.value.trim() === '' ? 'Anonymous': inputnameEl.value.trim();    
}
const input = document.querySelector("input");
console.log(input);

const spanEl = document.querySelector("span");
console.log(spanEl);

input.addEventListener('input', (event) => {
    spanEl.style.fontSize = `${event.currentTarget.value}px`;
});
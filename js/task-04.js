const counterValue = {
    value: 0,

    decrement (value) {
        console.log ('decrement => this', this);
        this.value -= 1;
    },

    increment (value) {
        console.log ('increment => this', this);
        this.value += 1;
    },
}

const decrementBtn = document.querySelector('button[data-action="decrement"]');
console.log(decrementBtn);
const incrementBtn = document.querySelector('button[data-action="increment"]');
console.log(incrementBtn);
const valueEl = document.querySelector('#value');
console.log(valueEl);

decrementBtn.addEventListener('click', function () {
    counterValue.decrement();
    console.log(counterValue);
    valueEl.textContent = counterValue.value;
})

incrementBtn.addEventListener('click', function () {
    counterValue.increment();
    console.log(counterValue);
    valueEl.textContent = counterValue.value;
})
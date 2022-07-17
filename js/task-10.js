function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEL = document.querySelector("input");
console.log(inputEL);

const buttonCreate = document.querySelector("[data-create]");
console.log(buttonCreate);

const buttonDestroy = document.querySelector("[data-destroy]");
console.log(buttonDestroy);

const divBoxes = document.querySelector("#boxes");
console.log(divBoxes);


buttonCreate.addEventListener('click', e => createBoxes(Number(inputEL.value)));

function createBoxes(amount) {
const divs = [];
for(let i = 0; i < amount; i += 1) {
 const div = document.createElement('div');
 div.style.width = div.style.height = `${30 + i * 10}px `;
 div.style.backgroundColor = getRandomHexColor();
 divs.push(div);
}
divBoxes.append(...divs);
};

buttonDestroy.addEventListener('click', deleteBoxes);

function deleteBoxes(event) {
  divBoxes.innerHTML = "";
}





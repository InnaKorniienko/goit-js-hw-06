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


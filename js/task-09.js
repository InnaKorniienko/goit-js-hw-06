function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorSpan = document.querySelector(".color");
console.log(colorSpan);

const button = document.querySelector(".change-color");
console.log(button);

button.addEventListener("click", changeBodyColor);

function changeBodyColor(color) {
  document.body.style.background = getRandomHexColor();
  return colorSpan.textContent = getRandomHexColor();
}
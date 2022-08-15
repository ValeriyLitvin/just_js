function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const spanEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');
const buttonEl = document.querySelector('.change-color');

buttonEl.addEventListener('click', color);
function color() {
  spanEl.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = getRandomHexColor();
}

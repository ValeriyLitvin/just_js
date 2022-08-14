const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener('input', onInputChange);
function onInputChange() {
  span.textContent = input.value;
  if (input.value === '') {
    span.textContent = 'Anonymous';
  }
}

console.log(input);
console.log(span);

/*

Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), 
підставляє його поточне значення в span#name-output. Якщо інпут порожній, 
у спані повинен відображатися рядок "Anonymous".


*/

const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const counterValue = document.querySelector('#value');

btnDecrement.addEventListener('click', () => {
  return (counterValue.textContent = Number(counterValue.textContent) - 1);
});
btnIncrement.addEventListener('click', () => {
  return (counterValue.textContent = Number(counterValue.textContent) + 1);
});

const liEl = document.querySelectorAll('.item');

console.log(`Number of categories: ${liEl.length}`);

liEl.forEach(liElement => {
  console.log(`Category: ${liElement.firstElementChild.textContent}`);
  console.log(`Elements: ${liElement.lastElementChild.children.length}`);
});

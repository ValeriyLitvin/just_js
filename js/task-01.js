let numbers = [3, 1, 6];

function addGrade(numbers, grade) {
  numbers.push(grade);
  return numbers;
}

console.log(addGrade(numbers, 10));
//

// const descriptionEl = document.querySelectorAll('.item');
// console.log(`Number of categories: ${descriptionEl.length}`);
// descriptionEl.forEach(element => {
//   console.log(`Category: ${element.firstElementChild.textContent}`);
//   console.log(`Elements: ${element.lastElementChild.children.length}`);
// });
/*

Напиши скрипт, який:

1.Порахує і виведе в консоль кількість категорій в ul#categories, 
тобто елементів li.item.

2.Для кожного элемента li.item у спику ul#categories, 
знайде і виведе в консоль текст заголовку елемента (тегу <h2>) 
і кількість елементів в категорії (усіх <li>, вкладених в нього).
В результаті, в консолі будуть виведені наступні повідомлення.

Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5

*/

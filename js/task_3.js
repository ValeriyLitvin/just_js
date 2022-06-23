// Напиши скрипт для створення галереї зображень на підставі масиву даних.
//  HTML містить список ul.gallery.

// <ul class="gallery"></ul>
// Використовуй масив об'єктів images для створення елементів <img>,
//  вкладених в < li >.
// Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Якби ви моглиб в двух словах пояснити як мені в кожен лі
// запізнути картинку. У мене виходіть в 1 лі всі картинки
// Не розумію як мені зробити так як сказано в завданні але не через
// метод insertAdjacentHTML
// ДЯКУЮ

//
const galleryEl = document.querySelector('.gallery');
const liEl = document.createElement('li');
const allImgEl = images.map(image => {
  return image;
});
console.log(allImgEl);
const element = liEl.forEach(
  (allImgEl = option => {
    const imageEl = document.createElement('img');
    imageEl.src = option.url;
    imageEl.alt = option.alt;
    return imageEl;
  })
);
// liEl.append(...element);
galleryEl.append(element);

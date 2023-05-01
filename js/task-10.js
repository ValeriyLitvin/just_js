// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// const user = {
//   name: 'sam',
//   age: 10,
// };
// console.log(user.name);
// user.lastName = 'Litvin';
// console.log(user.lastName);
// const userCorrectName = user.name[0].toUpperCase() + user.name.slice(1);
// // userCorrectName.toLowerCase();
// console.log(userCorrectName);

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };
// const { title, author, genres, isPublic, rating } = book;
// console.log(title === book.title);
function processCall(recipient, onAvailable, onNotAvailable) {
  // Імітуємо доступність абонента випадковим числом
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    onNotAvailable(recipient);
    return;
  }

  onAvailable(recipient);
}

function takeCall(name) {
  console.log(`З'єднуємо з ${name}, очікуйте...`);
  // Логіка прийняття дзвінка
}

function activateAnsweringMachine(name) {
  console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
  // Логіка активації автовідповідача
}

function leaveHoloMessage(name) {
  console.log(`Абонент ${name} недоступний, записуємо голограму.`);
  // Логіка запису голограми
}

processCall('Манго', takeCall, activateAnsweringMachine);
processCall('Полі', takeCall, leaveHoloMessage);
console.log(Math.random());

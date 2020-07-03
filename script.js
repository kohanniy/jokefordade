let phrases = [
  'Дать сыну денег',
  'Почесать репу',
  'Разобраться, о чём поют рэперы',
  'Погладить пол',
  'Расставить книги на полке по цвету',
  'Дать сыну еще больше денег',
  'Да дай же уже сыну денег :)'  
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');

button.addEventListener('click', function() {
  phrase.textContent = getRandomElement(phrases);
});
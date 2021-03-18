const getRandomInt = (min, max) => {
  if (min >= 0 && max > min) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  return undefined;
}

//создаем массив цифр в заданном интервале
const getNumbers = (min, max) => {
  let numbers = [];
  for (let i = min; i <= max; i++) {
    numbers.push(i);
  }
  return numbers;
}
//получаем случайный элемент
const getRandomElement = (elements) => {
  return elements[getRandomInt(0, elements.length - 1)];
};
//ловит событие нажатия на Esc
const isEscEvent = (evt) => {
  return evt.key === ('Escape' || 'Esc');
};
//ловит событие нажатия на Enter
const isEnterEvent = (evt) => {
  return evt.key === 'Enter';
};

export { getRandomInt, getNumbers, getRandomElement, isEscEvent, isEnterEvent };

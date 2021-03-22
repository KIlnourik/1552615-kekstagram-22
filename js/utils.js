const getRandomInt = (min, max) => {
  if (min >= 0 && max > min) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  return undefined;
}

const getNumbers = (min, max) => {
  let numbers = [];
  for (let i = min; i <= max; i++) {
    numbers.push(i);
  }
  return numbers;
}

const getRandomElement = (elements) => {
  return elements[getRandomInt(0, elements.length - 1)];
};

const isEscEvent = (evt) => {
  return evt.key === ('Escape' || 'Esc');
};

const isEnterEvent = (evt) => {
  return evt.key === 'Enter';
};

export { getRandomInt, getNumbers, getRandomElement, isEscEvent, isEnterEvent };

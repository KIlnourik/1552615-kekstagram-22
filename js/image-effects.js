import { imgPreview } from './image-scale.js';

const effectsList = document.querySelector('.effects__list');
const effectSlider = document.querySelector('.effect-level__slider');
const effectValue = document.querySelector('.effect-level__value');
const sliderField = document.querySelector('.effect-level');
let effect = '';

window.noUiSlider.create(effectSlider, {
  range: {
    min: 0,
    max: 100,
  },
  step: 1,
  start: 100,
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

effectSlider.noUiSlider.on('update', (values, handle) => {
  effectValue.value = values[handle];
  if (effect === 'chrome') {
    imgPreview.style.filter = `grayscale(${effectValue.value})`;
  } else if (effect === 'sepia') {
    imgPreview.style.filter = `sepia(${effectValue.value})`;
  } else if (effect === 'marvin') {
    imgPreview.style.filter = `invert(${effectValue.value}%)`;
  } else if (effect === 'phobos') {
    imgPreview.style.filter = `blur(${effectValue.value}px)`;
  } else if (effect === 'heat') {
    imgPreview.style.filter = `brightness(${effectValue.value})`;
  }
});

const onSliderValueChangeHandler = (evt) => {
  if (evt.target.matches('#effect-chrome')) {
    effect = evt.target.value;
    sliderField.classList.remove('hidden');
    effectSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    });
  } else if (evt.target.matches('#effect-sepia')) {
    effect = evt.target.value;
    sliderField.classList.remove('hidden');
    effectSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    });
  } else if (evt.target.matches('#effect-marvin')) {
    effect = evt.target.value;
    sliderField.classList.remove('hidden');
    effectSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    });
  } else if (evt.target.matches('#effect-phobos')) {
    effect = evt.target.value;
    sliderField.classList.remove('hidden');
    effectSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
  } else if (evt.target.matches('#effect-heat')) {
    effect = evt.target.value;
    sliderField.classList.remove('hidden');
    effectSlider.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
  } else if (evt.target.matches('#effect-none')) {
    effect = evt.target.value;
    imgPreview.style.filter = '';
    sliderField.classList.add('hidden');
  }
};

effectsList.addEventListener('change', onSliderValueChangeHandler);

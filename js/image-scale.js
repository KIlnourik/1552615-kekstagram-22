const SCALESTEP = 25;
const MINSCALE = 25;
const MAXSCALE = 100;
const scaleButtonPlus = document.querySelector('.scale__control--bigger');
const scaleButtonMinus = document.querySelector('.scale__control--smaller');
const scaleControlValue = document.querySelector('.scale__control--value');
const imgPreviewContainer = document.querySelector('.img-upload__preview');
const imgPreview = imgPreviewContainer.querySelector('img');

const onPlusButtonClick = () => {
  if (parseInt(scaleControlValue.value) < MAXSCALE) {
    scaleControlValue.value = `${parseInt(scaleControlValue.value) + SCALESTEP}%`;
  }
  imgPreview.style.transform = `scale(${parseInt(scaleControlValue.value) / 100})`;
};

const onMinusButtonClick = () => {
  if (parseInt(scaleControlValue.value) > MINSCALE) {
    scaleControlValue.value = `${parseInt(scaleControlValue.value) - SCALESTEP}%`;
  }
  imgPreview.style.transform = `scale(${parseInt(scaleControlValue.value) / 100})`;
};

scaleButtonPlus.addEventListener('click', onPlusButtonClick);

scaleButtonMinus.addEventListener('click', onMinusButtonClick);

export { imgPreview };

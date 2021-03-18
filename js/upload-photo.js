import { isEnterEvent, isEscEvent } from './utils.js';
import { imgPreview } from './image-scale.js';

const imgUploadPopup = document.querySelector('.img-upload__overlay');
const uploadPhoto = document.querySelector('#upload-file');
const uploadPopupCloseButton = imgUploadPopup.querySelector('.cancel');

//создаем обработчик события нажатия на Esc
const onImgUploadPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeImgUploadPopup();
  }
};

//создаем обработчик события клика по иконке открытия попапа загрузки
const onUploadIconClick = (evt) => {
  if (evt.target.matches('#upload-file') && evt.target.value !== '') {
    evt.preventDefault();
    openImgUploadPopup();
  }
};

//создаем функцию открытия попапа с загрузкой фотографии
const openImgUploadPopup = () => {
  imgUploadPopup.classList.remove('hidden');
  document.querySelector('.effect-level').classList.add('hidden');
  document.querySelector('.scale__control--value').value = '100%';
  document.querySelector('body').classList.add('modal-open');
  document.addEventListener('keydown', onImgUploadPopupEscKeydown);
};

//создаем функцию закрытия попапа
const closeImgUploadPopup = () => {
  imgUploadPopup.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  document.removeEventListener('keydown', onImgUploadPopupEscKeydown);
  uploadPhoto.value = '';
  imgPreview.style.filter = '';
  imgPreview.style.transform = 'scale(1)';
};

//добавляем обработчик события
uploadPhoto.addEventListener('change', onUploadIconClick);

//доавляем обработчик события нажатия Enter на миниатюру
imgUploadPopup.addEventListener('keydown', (evt) => {
  if (isEnterEvent(evt)) {
    evt.preventDefault();
    openImgUploadPopup();
  }
});

//добавляем обработчик события на элемент крестик - закрытие попапа
uploadPopupCloseButton.addEventListener('click', () => {
  closeImgUploadPopup();
});

//добавляем обработчик события на нажатие Esc
document.addEventListener('keydown', (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeImgUploadPopup();
  }
});

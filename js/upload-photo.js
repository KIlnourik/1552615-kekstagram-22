import { isEnterEvent, isEscEvent } from './utils.js';
import { imgPreview } from './image-scale.js';

const imgUploadPopup = document.querySelector('.img-upload__overlay');
const uploadPhoto = document.querySelector('#upload-file');
const uploadPopupCloseButton = imgUploadPopup.querySelector('.cancel');

const onImgUploadPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeImgUploadPopup();
  }
};

const onUploadIconClick = (evt) => {
  if (evt.target.matches('#upload-file') && evt.target.value !== '') {
    evt.preventDefault();
    openImgUploadPopup();
  }
};

const openImgUploadPopup = () => {
  imgUploadPopup.classList.remove('hidden');
  document.querySelector('.effect-level').classList.add('hidden');
  document.querySelector('.scale__control--value').value = '100%';
  document.querySelector('body').classList.add('modal-open');
  document.addEventListener('keydown', onImgUploadPopupEscKeydown);
};

const closeImgUploadPopup = () => {
  imgUploadPopup.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  document.removeEventListener('keydown', onImgUploadPopupEscKeydown);
  uploadPhoto.value = '';
  imgPreview.style.filter = '';
  imgPreview.style.transform = 'scale(1)';
};

uploadPhoto.addEventListener('change', onUploadIconClick);

imgUploadPopup.addEventListener('keydown', (evt) => {
  if (isEnterEvent(evt)) {
    evt.preventDefault();
    openImgUploadPopup();
  }
});

uploadPopupCloseButton.addEventListener('click', () => {
  closeImgUploadPopup();
});

document.addEventListener('keydown', (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeImgUploadPopup();
  }
});


export { closeImgUploadPopup };

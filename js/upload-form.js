import { showUploadError, showUploadSuccess } from './form-messages.js';
import { closeImgUploadPopup } from './upload-photo.js';

const imageUploadForm = document.querySelector('.img-upload__form');

const setImageUploadFormSubmit = (onSuccess) => {
  imageUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);

    fetch('https://22.javascript.pages.academy/kekstagram',
      {
        method: 'POST',
        body: formData,
      })
      .then((response) => {
        if (response.ok) {
          onSuccess();
          showUploadSuccess();
        } else {
          throw new Error('Ошибка');
        }
      })
      .catch(() => {
        showUploadError();
        closeImgUploadPopup();
      });
  });
};

setImageUploadFormSubmit(closeImgUploadPopup);

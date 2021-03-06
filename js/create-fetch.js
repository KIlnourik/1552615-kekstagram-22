import { renderPictures } from './miniatures.js';
import { showDownloadError } from './form-messages.js';

let receivedPhotos = [];
const getPhotos = () => receivedPhotos;

fetch('https://22.javascript.pages.academy/kekstagram/data')
  .then((response) => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error('Ошибка загрузки данных');
    }
  })
  .then((photos) => {
    receivedPhotos = photos;
    renderPictures(photos);

    document.querySelector('.img-filters').classList.remove('img-filters--inactive');
  })
  .catch((err) => {
    showDownloadError(err.message);
  });

export { getPhotos };

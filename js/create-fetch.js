import { renderPictures } from './miniatures.js';
import { showDownloadError } from './form-messages.js';

fetch('https://22.javascript.pages.academy/kekstagram/data')
  .then((response) => {
    if (response.ok) {
      return response.json()
    } else {
      showDownloadError();
    }
  })
  .then((photos) => {
    renderPictures(photos);
  });

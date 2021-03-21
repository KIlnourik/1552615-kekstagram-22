import { isEscEvent } from './utils.js';

const errorTemplate = document.querySelector('#error').content;
const successTemplate = document.querySelector('#success').content;
const mainPage = document.querySelector('main');
const ALERT_SHOW_TIME = 5000;

const showUploadError = () => {
  const errorFragment = document.createDocumentFragment();
  errorFragment.appendChild(errorTemplate.cloneNode(true));
  mainPage.appendChild(errorFragment);

  const errorButton = document.querySelector('.error__button');
  const errorRemove = () => {
    document.querySelector('.error').remove();
  }

  errorButton.addEventListener('click', errorRemove);

  document.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      errorRemove();
    }
  });
}

const showUploadSuccess = () => {
  const successFragment = document.createDocumentFragment();
  successFragment.appendChild(successTemplate.cloneNode(true));
  mainPage.appendChild(successFragment);

  const successButton = document.querySelector('.success__button');
  const successRemove = () => {
    document.querySelector('.success').remove();
  }

  successButton.addEventListener('click', successRemove);

  document.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      successRemove();
    }
  });
}

const showDownloadError = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '50%';
  alertContainer.style.top = '50%';
  alertContainer.style.transform = 'translate(-50%, -50%)';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);


}

export { showUploadError, showUploadSuccess, showDownloadError };

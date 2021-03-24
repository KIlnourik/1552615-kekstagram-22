import { isEscEvent } from './utils.js';

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureCloseElement = bigPicture.querySelector('.big-picture__cancel');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const bigPicCommentsList = document.querySelector('.social__comments');
const shownComments = document.querySelector('.comments-visible');
const DISPLAYED_COMMENTS_COUNT = 5;

const bigPicDataRender = ({ url, likes, comments, description }) => {
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.comments-count').textContent = comments.length;
  bigPicture.querySelector('.social__caption').textContent = description;

  const commentsListFragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    const commentElement = document.querySelector('#social-comment').content.querySelector('.social__comment').cloneNode(true);
    commentElement.querySelector('.social__picture').src = comment.avatar;
    commentElement.querySelector('.social__picture').alt = comment.name;
    commentElement.querySelector('.social__text').textContent = comment.message;
    commentsListFragment.appendChild(commentElement);
  });
  bigPicCommentsList.innerHTML = '';
  bigPicCommentsList.appendChild(commentsListFragment);

  const renderedComments = document.querySelectorAll('.social__comment');
  renderedComments.forEach((comment) => {
    comment.classList.add('hidden');
  });

  displayComments(DISPLAYED_COMMENTS_COUNT);
  // commentsLoader.classList.remove('hidden');
  if (shownComments.textContent === bigPicture.querySelector('.comments-count').textContent) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }
};

const displayComments = (i) => {
  const hiddenComments = document.querySelectorAll('.social__comment.hidden');
  const hiddenCommentsArray = Array.prototype.slice.call(hiddenComments);
  hiddenCommentsArray.slice(0, i).forEach((comment) => {
    comment.classList.remove('hidden');
  });

  const otherComments = document.querySelectorAll('.social__comment.hidden').length;
  shownComments.textContent = document.querySelectorAll('.social__comment').length - otherComments;

  if (shownComments.textContent === bigPicture.querySelector('.comments-count').textContent) {
    commentsLoader.classList.add('hidden');
  }
};

commentsLoader.addEventListener('click', () => {
  displayComments(DISPLAYED_COMMENTS_COUNT);
});

const onBigPictureEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

const openBigPicture = () => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onBigPictureEscKeydown);
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onBigPictureEscKeydown);
};

bigPictureCloseElement.addEventListener('click', () => {
  closeBigPicture();
});

export { openBigPicture, closeBigPicture, bigPicDataRender }

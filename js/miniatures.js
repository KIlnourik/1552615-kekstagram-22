import { openBigPicture, bigPicDataRender } from './big-pic.js';

const pictures = document.querySelector('.pictures');
const userPictureTemplate = document.querySelector('#picture').content;


const renderPictures = (photos) => {
  const picturesFragment = document.createDocumentFragment();

  photos.forEach(({ url, comments, likes, id }) => {
    const userPictureElement = userPictureTemplate.cloneNode(true);
    userPictureElement.querySelector('.picture__img').src = url;
    userPictureElement.querySelector('.picture__comments').textContent = comments.length;
    userPictureElement.querySelector('.picture__likes').textContent = likes;
    userPictureElement.querySelector('.picture').dataset.id = id;
    picturesFragment.appendChild(userPictureElement);
  });

  document.querySelectorAll('.picture').forEach((picture) => {
    picture.remove();
  });
  pictures.appendChild(picturesFragment);

  const onPictureImgClick = (evt) => {
    const pictureElement = evt.target.closest('.picture');
    if (pictureElement) {
      openBigPicture();
      bigPicDataRender(photos.find(photo => photo.id === Number(pictureElement.dataset.id)));
    }
  };

  pictures.addEventListener('click', onPictureImgClick);
};

export { renderPictures };

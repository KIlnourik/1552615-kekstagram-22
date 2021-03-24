import { getPhotos } from './create-fetch.js';
import { renderPictures } from './miniatures.js';

const filterDefaultButton = document.querySelector('#filter-default');
const filterRandomButton = document.querySelector('#filter-random');
const filterDiscussedButton = document.querySelector('#filter-discussed');
const MIN_RANDOM_PHOTOS = 0;
const MAX_RANDOM_PHOTOS = 10;
const RERENDER_DELAY = 500;

const debounceRenderPictures = window._.debounce((photos) => {
  renderPictures(photos);
}, RERENDER_DELAY);

filterDefaultButton.addEventListener('click', () => {
  debounceRenderPictures(getPhotos());

  filterDefaultButton.classList.add('img-filters__button--active');
  filterRandomButton.classList.remove('img-filters__button--active');
  filterDiscussedButton.classList.remove('img-filters__button--active');
});

filterRandomButton.addEventListener('click', () => {
  const randomPhotos = getPhotos().sort(() => 0.5 - Math.random());

  let slicedRandomPhotos = randomPhotos.slice(MIN_RANDOM_PHOTOS, MAX_RANDOM_PHOTOS);

  debounceRenderPictures(slicedRandomPhotos);

  filterDefaultButton.classList.remove('img-filters__button--active');
  filterRandomButton.classList.add('img-filters__button--active');
  filterDiscussedButton.classList.remove('img-filters__button--active');
});

filterDiscussedButton.addEventListener('click', () => {
  const sorted = window._.sortBy(getPhotos(), (photo) => {
    return photo.comments.length;
  }).reverse();

  debounceRenderPictures(sorted);

  filterDefaultButton.classList.remove('img-filters__button--active');
  filterRandomButton.classList.remove('img-filters__button--active');
  filterDiscussedButton.classList.add('img-filters__button--active');
});

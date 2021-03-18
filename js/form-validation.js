const hashtagsInput = document.querySelector('.text__hashtags');
const userCommentInput = document.querySelector('.text__description');
const COMMENT_MAX_LENGTH = 140;
const HASHTAGS_MAX_COUNT = 5;
const HASHTAG_MAX_LENGTH = 20;

userCommentInput.addEventListener('input', () => {
  const userCommentLength = userCommentInput.value.length;
  if (userCommentLength > COMMENT_MAX_LENGTH) {
    userCommentInput.setCustomValidity(`Максимальная длина комментария ${COMMENT_MAX_LENGTH} знаков`);
  } else {
    userCommentInput.setCustomValidity('');
  }
  userCommentInput.reportValidity();
});

const hashtagLengthValidate = (hashTags) => {
  for (let i = 0; i < hashTags.length; i++) {
    if (hashTags[i].length <= HASHTAG_MAX_LENGTH) {
      return true;
    }
  }
}

const hashtagLettersValidate = (hashTags) => {
  return hashTags.every((tag) => /^#\w{1,19}$/i.test(tag));
}

const hashtagFirstLetterValidate = (hashTags) => {
  for (let i = 0; i < hashTags.length; i++) {
    if (hashTags[i].startsWith('#')) {
      return true;
    }
  }
}

hashtagsInput.addEventListener('input', () => {
  const hashtags = hashtagsInput.value.split(' ');

  if (hashtagsInput.value === '') {
    hashtagsInput.setCustomValidity('');
  } else {
    if (hashtags.length > HASHTAGS_MAX_COUNT) {
      hashtagsInput.setCustomValidity(`Максимум ${HASHTAGS_MAX_COUNT} хэштегов`);
    } else if (!hashtagLengthValidate(hashtags)) {
      hashtagsInput.setCustomValidity(`Макс. длина хэштега ${HASHTAG_MAX_LENGTH} зн.`);
    } else if (hashtags.length !== new Set(hashtags).size) {
      hashtagsInput.setCustomValidity('Хэштеги должны быть уникальны');
    } else if (!hashtagFirstLetterValidate(hashtags)) {
      hashtagsInput.setCustomValidity('Хэштеги должны начинаться с "#"');
    } else if (!hashtagLettersValidate(hashtags)) {
      hashtagsInput.setCustomValidity('Хэштеги не может состоять только из "#" должны содержать только буквы и цифры');
    } else {
      hashtagsInput.setCustomValidity('');
    }
  }

  hashtagsInput.reportValidity();
});

const onInputEscKeydown = (evt) => {
  if (evt.key === 'Esc' || evt.key === 'Escape') {
    evt.preventDefault();
    evt.stopPropagation();
  }
}

hashtagsInput.addEventListener('keydown', onInputEscKeydown);
userCommentInput.addEventListener('keydown', onInputEscKeydown);

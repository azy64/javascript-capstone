const commentCounter = (json) => {
  const { length } = json;
  document.querySelector('.comment-heading').innerHTML = `Comments(${length})`;
};

export default commentCounter;
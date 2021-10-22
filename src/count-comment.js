const commentCounter = (json) => {
  const { length } = json;
  document.querySelector('.comment-heading').innerHTML = `Comments(${length})`;
  return length;
};

export default commentCounter;
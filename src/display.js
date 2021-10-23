const info = document.querySelector('.information');
const comments = document.querySelector('.comments');

/**
 * Function for displaying comments
 */
export const displayComments = (data) => {
  const template = `
      <section class="comment-div text-center">
      <span>${data.creation_date}</span>
      <span>${data.username}:</span>
      <span>${data.comment}</span>
      </section>
      
      `;
  comments.innerHTML += template;
};

/**
 * Display data about a particular series
 */
export const displayInfo = (data) => {
  const template = `
      <div class="serie" id="${data.id}">
        <div class="serie-image text-center">
          <img src="${data.image.medium}">
        </div>
  
        <div>
         <p class="serie-title p">
          Name: ${data.name}
         </p>
         <p>
          Rating: ${data.rating.average}
         </p>
         <p class="serie-description p">
          ${data.summary}
         </p>
        </div>
  </div>
      
      `;
  info.innerHTML = template;
};

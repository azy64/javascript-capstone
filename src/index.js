// import _ from 'lodash';
import './style.css';
import logo from './images/logo.png';
import load from './images/loading.gif';
import like from './images/heart.png';
import Image from './ImgElement.js';

const img = document.querySelector('.logo-image');
const content = document.querySelector('.content');
const header = document.querySelector('#header');
const info = document.querySelector('.information')
const ImgLoader = new Image(20, 20);

const init = {
  data: [],
};
img.setAttribute('src', logo);
const limit = { inf: 0, sup: 50 };

const addButtonListen = () => {
  const buttons = document.querySelectorAll('.btn')
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector('.container').classList.add('hide')
      document.querySelector('#header').classList.add('hide')
      document.querySelector('.comment-section').classList.remove('hide')

      const displayComments = (data) => {
        const template = `
        <div class="serie" id="${data.id}">
          <div class="serie-image">
            <img src="${data.image.original}">
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
        info.innerHTML += template;
      }

      const id = btn.parentElement.parentElement.id

      fetch('https://api.tvmaze.com/shows')
      .then((resp) => resp.json())
      .then((datum) => {
        console.log(datum[id-1]);
        displayComments(datum[id-1])
      });     
    })
  }); 
}

/**
 * this function display data in the DOM
 * @param {array} data
 */
const displayData = (data) => {

  let tmp = '';
  // if(data.length <)
  for (let i = limit.inf; i < limit.sup; i += 1) {
    if (i >= data.length) break;
    tmp += `
    <div class="card" id="${data[i].id}">
    <div class="card-image">
        <img src="${data[i].image.medium}">
    </div>
    <div class="card-title p">
      ${data[i].name}
    </div>
    <div class="card-like p"><img src="${like}"></div>
    <div class="btn-comment p">
        <button type="button" class="btn" >Comment</button>
    </div>
</div>
    
    `;
  }
  content.innerHTML += tmp;
  addButtonListen()
};
/**
 * this function fetch data from the API
 * and then call displayData to display data within the DOM
 */
const loadData = async () => {
  const l = ImgLoader.getImage();
  l.src = load;
  l.classList.add('loader');
  content.append(l);
  await fetch('https://api.tvmaze.com/shows')
    .then((resp) => resp.json())
    .then((datum) => {
      init.data = datum;
      content.removeChild(l);
      displayData(init.data);
    });
};

loadData();
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 10) {
    header.classList.add('fixed');
    header.classList.add('width-100');
    header.classList.add('shadow');
  }
  if (window.pageYOffset === 0) {
    header.classList.remove('fixed');
    header.classList.remove('width-100');
    header.classList.remove('shadow');
  }

  const top = content.lastChild.previousSibling.offsetTop;
  const h = content.lastChild.previousSibling.offsetHeight;
  const position = (top) - h;
  if (window.pageYOffset > position && !Number.isNaN(position)) {
    limit.inf += 50;
    limit.sup += 50;
    loadData();
  }
});

// import _ from 'lodash';
import './style.css';
import logo from './images/logo.png';
import cancel from './images/xicon.jpg';
import load from './images/loading.gif';
import like from './images/heart.png';
import likeGreen from './images/heart-green.png';
import Image from './ImgElement.js';
import commentCounter from './count-comment.js';
import { displayComments, displayInfo } from './display.js';
import AppId from './AppId.js';
import Utilities from './Utilities.js';

const img = document.querySelector('.logo-image');
const img2 = document.querySelector('.x-icon');
const content = document.querySelector('.content');
const header = document.querySelector('#header');
const counter = document.querySelector('#number');
const ImgLoader = new Image(20, 20);
const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
let systemId = '';
const init = {
  data: [],
};
img.setAttribute('src', logo);
const limit = { inf: 0, sup: 50 };
img2.setAttribute('src', cancel);

/**
 * this function fetch data from the API comment endpoint
 */
const getComments = async (id) => {
  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YG7f4fmyaSRAJHzw8A5N/comments?item_id=${id}`)
    .then((resp) => resp.json())
    .then((json) => {
      if (json.error) {
        const json = [];
        const p = document.createElement('p');
        p.innerHTML = 'Add a new comment';
        document.querySelector('.comments').appendChild(p);
        commentCounter(json);
      } else {
        json.forEach((element) => {
          displayComments(element);
          commentCounter(json);
        });
      }
    });
};

/**
 * Event for implementing comment popup
 */
const addButtonListen = () => {
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      window.scrollTo(0, 0);
      document.querySelector('.comment-section').classList.remove('hide');
      const { id } = btn.parentElement.parentElement;

      /**
 * Get information about series to display
 */
      fetch('https://api.tvmaze.com/shows')
        .then((resp) => resp.json())
        .then((datum) => {
          if (id <= 16) {
            displayInfo(datum[id - 1]);
          } else if (id <= 35) {
            displayInfo(datum[id - 2]);
          } else {
            displayInfo(datum[id - 3]);
          }
        });
      getComments(id);

      /**
 * Function to post comments to API
 */
      document.querySelector('.button-submit').addEventListener('click', (e) => {
        e.preventDefault();
        const name = document.querySelector('.name').value;
        const message = document.querySelector('#message').value;

        const postComments = async () => {
          const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YG7f4fmyaSRAJHzw8A5N/comments', {
            method: 'post',
            body: JSON.stringify({
              item_id: id,
              username: name,
              comment: message,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          });
          /*eslint-disable*/
          const json = await response.text();
          document.querySelector('.comments').innerHTML = ''
          getComments(id);
        };

        document.querySelector('.name').value = '';
        document.querySelector('#message').value = '';
        postComments();
      });
    });
  });
};

if (localStorage.getItem('appId')) systemId = localStorage.getItem('appId');
else {
  AppId.loadId();
  systemId = localStorage.getItem('appId');
}
const getLikes = async () => {
  await fetch(`${baseUrl}${systemId}/likes/`)
    .then((r) => r.json())
    .then((data) => {
      AppId.saveLikes(data);
    });
};

const addLike = (id, data) => {
  fetch(`${baseUrl}${id}/likes/`,
    {
      method: 'POST',
      headers: { 'content-type': 'application/json;charset=UTF-8' },
      body: JSON.stringify(data),
    })
    .then((res) => res.text())
    .then((data) => data);
};

const displayLike = async (node, id) => {
  await getLikes();
  const data = AppId.getLikes();
  if (data.length > 0) {
    const index = data.findIndex((element) => element.item_id === id);
    const brother = node.nextSibling;
    brother.innerHTML = data[index].likes;
  }
};
const giveLike = (e) => {
  const myTarget = e.target;
  const myParent = myTarget.parentNode.parentNode;
  const id = parseInt(myParent.id, 10);
  const value = {
    item_id: id,
  };
  addLike(systemId, value);
  // getLikes();
  displayLike(e.target, id);
};

const putLike = () => {
  const buttonLikes = document.querySelectorAll('.like-btn');
  buttonLikes.forEach((btn) => {
    btn.addEventListener('click', giveLike);
  });
};
/**
 *
 * @param {integer} id
 * @returns number of likes or 0 from a given show id
 */
const myLike = (id) => {
  const data = AppId.getLikes();
  if (data.length > 0) {
    const index = data.findIndex((element) => element.item_id === id);
    if (data[index] !== undefined) { return data[index].likes; }
  }
  return 0;
};
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
    <div class="p card-image text-center">
        <img src="${data[i].image.medium}">
    </div>
    <div class="card-title p">
      ${data[i].name}
    </div>
    <div class="card-like p"><img class="like-btn" alt="click to like" title="click to like" src="${like}"><span>${myLike(data[i].id)}</span></div>
    <div class="btn-comment p">
        <button type="button" class="btn" >Comment</button>
    </div>
</div>
    
    `;
  }
  content.innerHTML += tmp;
  addButtonListen();
  putLike();
  Utilities.hover({ element: '.like-btn', img1: like, img2: likeGreen });
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
      counter.innerHTML = Utilities.counter(init.data);
    });
};
getLikes();
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

img2.addEventListener('click', () => {
  window.location.reload();
});


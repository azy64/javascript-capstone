// import _ from 'lodash';
import './style.css';
import logo from './images/logo.png';
import load from './images/loading.gif';
import like from './images/heart.png';
import likeGreen from './images/heart-green.png';
import Image from './ImgElement.js';
import AppId from './AppId.js';
import Utilities from './Utilities.js';

const img = document.querySelector('.logo-image');
const content = document.querySelector('.content');
const header = document.querySelector('#header');
const ImgLoader = new Image(20, 20);
const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
let systemId = '';
const init = {
  data: [],
};
img.setAttribute('src', logo);
const limit = { inf: 0, sup: 50 };

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
    <div class="card-image">
        <img src="${data[i].image.medium}">
    </div>
    <div class="card-title p">
      ${data[i].name}
    </div>
    <div class="card-like p"><img class="like-btn" alt="click to like" title="click to like" src="${like}"><span>${myLike(data[i].id)}</span></div>
    <div class="btn-comment p">
        <button class="btn">Comment</button>
    </div>
</div>
    
    `;
  }
  content.innerHTML += tmp;
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
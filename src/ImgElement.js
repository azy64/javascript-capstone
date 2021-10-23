export default class ImgElement {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.img = document.createElement('img');
    this.img.style.width = this.width;
    this.img.style.height = this.height;
  }

  getImage = () => this.img;
}
export default class Utilities {
    static hover = ({ element, img1, img2 }) => {
      const elements = document.querySelectorAll(element);
      elements.forEach((el) => {
        el.addEventListener('mouseover', () => {
          el.src = img2;
        });
        el.addEventListener('mouseout', () => {
          el.src = img1;
        });
      });
    }
}
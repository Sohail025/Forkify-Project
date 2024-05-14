import icons from '../../img/icons.svg';
import ParentView from './ParentView.js';
class addRecipeView extends ParentView {
  parentElement = document.querySelector('.upload');
  window = document.querySelector('.add-recipe-window');
  overlay = document.querySelector('.overlay');
  btnOpen = document.querySelector('.nav__btn--add-recipe');
  btnClose = document.querySelector('.btn--close-modal');
  constructor() {
    super();
    this.btnOpenHandler();
    this.btnCloseHandler();
  }
  btnHremover() {
    this.overlay.classList.toggle('hidden');
    this.window.classList.toggle('hidden');
  }
  btnOpenHandler() {
    this.btnOpen.addEventListener('click', this.btnHremover.bind(this));
  }
  btnCloseHandler() {
    this.btnClose.addEventListener('click', this.btnHremover.bind(this));
  }
  Recipehandler(handler) {
    this.parentElement.addEventListener('submit', e => {
      e.preventDefault();
      const dataArr = [...new FormData(this.parentElement)];
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }
  generateMarkup() {}
}
export default new addRecipeView();

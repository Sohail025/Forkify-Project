import { async } from 'regenerator-runtime';
import icons from '../../img/icons.svg';
export default class ParentView {
  spinner = () => {
    let html = `
        <div class="spinner">
            <svg>
                <use href="${icons}#icon-loader"></use>
            </svg>
        </div>
      `;
    this.clear();
    this.parentElement.insertAdjacentHTML('afterbegin', html);
  };
  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this.data = data;
    let html = this.generateMarkup();
    if (!render) return html;
    this.clear();
    this.parentElement.insertAdjacentHTML('afterbegin', html);
    // if ((result = false)) return data;
    // else return html;
  }
  clear() {
    this.parentElement.innerHTML = '';
  }
  renderError(message = this.errorMessage) {
    let html = `<div class="error">
    <div>
      <svg>
        <use href="${icons}#icon-alert-triangle"></use>
      </svg>
    </div>
    <p>${message}</p>
  </div>`;
    this.clear();
    this.parentElement.insertAdjacentHTML('afterbegin', html);
  }
}

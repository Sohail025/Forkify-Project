import icons from '../../img/icons.svg';
import ParentView from './ParentView.js';
class paginationView extends ParentView {
  parentElement = document.querySelector('.pagination');
  paginationHander(handler) {
    this.parentElement.addEventListener('click', e => {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const pageGoTo = +btn.dataset.goto;
      handler(pageGoTo);
    });
  }
  generateMarkup() {
    const currPage = this.data.page;
    const numpages = Math.ceil(
      this.data.results.length / this.data.recipeLimit
    );
    if (currPage === 1 && numpages > 1) {
      return `
      <button data-goto="${
        currPage + 1
      }" class="btn--inline pagination__btn--next">
            <span>${currPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
      `;
    }
    if (currPage === numpages && numpages > 1) {
      return `
        <button data-goto="${
          currPage - 1
        }" class="btn--inline pagination__btn--prev">
              <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
              </svg>
              <span>${currPage - 1}</span>
            </button>
        `;
    }
    if (currPage < numpages) {
      return `
        <button data-goto="${
          currPage + 1
        }" class="btn--inline pagination__btn--next">
              <span>${currPage + 1}</span>
              <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
              </svg>
            </button>
            <button data-goto="${
              currPage - 1
            }" class="btn--inline pagination__btn--prev">
              <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
              </svg>
              <span>${currPage - 1}</span>
            </button>
        `;
    }
    return '';
  }
}
export default new paginationView();

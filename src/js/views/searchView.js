import { async } from 'regenerator-runtime';
class SearchView {
  parentElement = document.querySelector('.search');
  quaryGet() {
    let quaryline = document.querySelector('.search__field').value;
    return quaryline;
  }
  clear() {
    document.querySelector('.search__field').value = '';
  }
  handlerFunc(Function) {
    this.parentElement.addEventListener('submit', e => {
      e.preventDefault();
      Function();
    });
  }
}
export default new SearchView();

import { bookmark } from '../modal.js';
import ParentView from './ParentView.js';
import previewView from './Upreview.js';
class Bookmarkview extends ParentView {
  errorMessage = 'Please Bookmark any recipe and then see there';
  parentElement = document.querySelector('.bookmarks__list');
  generateMarkup() {
    return this.data.map(bk => previewView.render(bk, false)).join('');
  }
  ControlBookmarks(handler) {
    window.addEventListener('load', handler());
  }
}
export default new Bookmarkview();

import icons from '../../img/icons.svg';
import ParentView from './ParentView.js';
import previewView from './Upreview.js';
class resultsView extends ParentView {
  errorMessage = 'We do not find the recipe';
  parentElement = document.querySelector('.results');
  generateMarkup() {
    return this.data.map(bk => previewView.render(bk, false)).join('');
  }
}
export default new resultsView();

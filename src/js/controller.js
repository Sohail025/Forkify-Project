import * as modal from './modal.js';
import Recipeview from './views/view.js';
import Searchview from './views/searchView.js';
import Resultsview from './views/Resultsview.js';
import paginationView from './views/paginationView.js';
import bookmarkview from './views/bookmarks.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

let API = async () => {
  try {
    let id = window.location.hash.slice(1);
    if (!id) return;
    Recipeview.spinner();
    await modal.fetchingData(id);
    Recipeview.render(modal.state.recipe);
    controlServings();
  } catch (err) {
    Recipeview.renderError();
  }
};
const SearchFunc = async () => {
  try {
    let quary = Searchview.quaryGet();
    if (!quary) return;
    await modal.searchResults(quary);
    Resultsview.render(modal.getSearchpage());
    bookmarkview.render(modal.state.bookmark);
    paginationView.render(modal.state.search);
  } catch (error) {
    console.log(error);
  }
};
const paginationbtn = pageGoTo => {
  Resultsview.render(modal.getSearchpage(pageGoTo));
  paginationView.render(modal.state.search);
};
const controlServings = newservings => {
  modal.updateServings(newservings);
  Recipeview.render(modal.state.recipe);
};
const bookmark = () => {
  if (!modal.state.recipe.bookmarked) modal.bookmark(modal.state.recipe);
  else modal.deletebookmarks(modal.state.recipe.id);
  Recipeview.render(modal.state.recipe);
  bookmarkview.render(modal.state.bookmark);
};
const updatebookmark = () => {
  bookmarkview.render(modal.state.bookmark);
};
const init = () => {
  bookmarkview.ControlBookmarks(updatebookmark);
  Recipeview.hashchange(API);
  Searchview.handlerFunc(SearchFunc);
  paginationView.paginationHander(paginationbtn);
  Recipeview.UpdateServingsHandler(controlServings);
  Recipeview.bookmarkHandler(bookmark);
};
init();

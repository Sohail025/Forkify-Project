import { JsonDataEx, sendJSON } from './helpers.js';
import { async } from 'regenerator-runtime';
import { API_URL, PAGE_LIMIT } from './config.js';
import bookmarks from './views/bookmarks.js';
export let state = {
  recipe: {},
  search: {
    quary: '',
    results: [],
    recipeLimit: PAGE_LIMIT,
    page: 1,
    numPages: 0,
  },
  bookmark: [],
};
export let fetchingData = async id => {
  try {
    const data = await JsonDataEx(`${API_URL}${id}`);
    let { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      cookingTime: recipe.cooking_time,
      image: recipe.image_url,
      ingredients: recipe.ingredients,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      servings: recipe.servings,
    };
    if (state.bookmark.some(b => b.id === id)) state.recipe.bookmarked = true;
    else state.recipe.bookmarked = false;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
export const searchResults = async quary => {
  try {
    let data = await JsonDataEx(`${API_URL}?search=${quary}`);
    state.search.quary = quary;
    state.search.results = data.data.recipes.map(re => {
      return {
        id: re.id,
        title: re.title,
        image: re.image_url,
        publisher: re.publisher,
      };
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
};
export const getSearchpage = (page = state.search.page) => {
  state.search.page = page;
  let start = (page - 1) * state.search.recipeLimit;
  let end = page * state.search.recipeLimit;
  return state.search.results.slice(start, end);
};
export const updateServings = newServings => {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = newServings * (state.recipe.servings / 100);
    if (newServings > 0) state.recipe.servings = newServings;
  });
};
const persistbookmarks = () => {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmark));
};
export const bookmark = recipe => {
  state.bookmark.push(recipe);
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
  persistbookmarks();
};
export const deletebookmarks = id => {
  const index = state.bookmark.findIndex(el => el.id === id);
  state.bookmark.splice(index, 1);
  if (id === state.recipe.id) state.recipe.bookmarked = false;
  persistbookmarks();
};
export const init = () => {
  let storage = localStorage.getItem('bookmarks');
  if (storage) state.bookmark = JSON.parse(storage);
};
export const uploadReciple = newrecipe => {
  try {
    const ingredients = Object.entries(newrecipe)
      .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
      .map(ing => {
        const ingArr = ing[1].replaceAll(' ', '').split(',');
        if (ingArr.length !== 3) throw new Error('Enter Correct Ingredient');
        const [quantity, unit, description] = ingArr;
        return { quantity: quantity ? +quantity : null, unit, description };
      });
    const recipe = {
      title: newrecipe.title,
      source_url: newrecipe.sourceUrl,
      image_url: newrecipe.image,
      publisher: newrecipe.publisher,
      cookingTime: +newrecipe.cookingTime,
      servings: +newrecipe.servings,
      ingredients,
    };
    console.log(recipe);
  } catch (error) {
    throw error;
  }
};
init();

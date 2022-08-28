import * as model from './model.js';
import CharacterView from './views/charInfoView.js';
import { getJSON } from './helpers.js';
import searchView from './views/searchView';
import ResultsView from './views/resultsView.js';
import PaginationView from './views/paginationView.js';

import 'core-js/stable'; // this is for polyfilling everything else
import 'regenerator-runtime/runtime'; // this is for polyfilling async await
import resultsView from './views/resultsView.js';

if (module.hot) {
  module.hot.accept();
}

const controlCharacterInfo = async () => {
  try {
    // CharacterView.renderSpinner();
    const id = window.location.hash.slice(1);
    if (!id) return;
    await model.loadCharacterInfo(id);
    CharacterView.render(model.state.characterInfo);
  } catch (err) {
    CharacterView.renderError();
  }
};

const controlSearch = async () => {
  try {
    ResultsView.renderSpinner();
    const query = searchView.getQuery();

    if (!query) return;
    console.log(query);

    await model.loadSearchResults(query);

    model.state.searchResults.page = 1;
    // ResultsView.render(model.state.searchResults.results);
    ResultsView.render(model.getSearchViewPage());

    //4 initial pagination buttons
    PaginationView.render(model.state.searchResults);
  } catch (err) {
    resultsView.renderError();
  }
};

const controlPagination = (goToPage) => {
  ResultsView.render(model.getSearchViewPage(goToPage));
  PaginationView.render(model.state.searchResults);
};

const init = () => {
  CharacterView.addHandlerRender(controlCharacterInfo);
  searchView.addHandlerSearch(controlSearch);
  PaginationView.addHandlerClick(controlPagination);
};

init();

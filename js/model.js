import { getJSON } from './helpers.js';
import { API_URL_ID, API_URL_SEARCH, RES_PER_PAGE } from './config.js';

export const state = {
  searchResults: {
    query: '',
    results: [],
    resultsPerpage: RES_PER_PAGE,
    page: 1,
  },
  characterInfo: {},
};

export const loadCharacterInfo = async (id) => {
  try {
    const data = await getJSON(`${API_URL_ID}${id}`);

    const charResult = data;
    state.characterInfo = {
      id: charResult.id,
      name: charResult.name,
      powerstats: charResult.powerstats,
      biography: charResult.biography,
      gender: charResult.appearance.gender,
      height: charResult.appearance.height[0],
      weight: charResult.appearance.weight[1],
      race: charResult.appearance.race,
      img: charResult.image.url,
      connecttions: charResult.connecttions,
    };

    console.log(data);
    console.log(state.characterInfo);
  } catch (err) {
    throw err;
  }
};

export const loadSearchResults = async (query) => {
  try {
    state.searchResults.query = query;
    const data = await getJSON(API_URL_SEARCH + query);
    // const { results } = data;
    // state.searchResults = {
    //   id: charResult.id,
    //   name: charResult.name,
    //   img: charResult.image.url,
    //   publisher: data.biography.publisher,
    // };

    state.searchResults.results = data.results.map((char) => {
      return {
        id: char.id,
        name: char.name,
        img: char.image.url,
        publisher: char.biography.publisher,
      };
    });

    console.log(state.searchResults.results);
  } catch (err) {
    throw err;
  }
};

export const getSearchViewPage = (page = state.searchResults.page) => {
  state.searchResults.page = page;
  const start = (page - 1) * state.searchResults.resultsPerpage;
  const end = page * state.searchResults.resultsPerpage;

  return state.searchResults.results.slice(start, end);
};

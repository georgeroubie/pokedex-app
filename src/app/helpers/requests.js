import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2/';

const handleError = (exception, reject) => {
  localStorage.clear();
  window.location.reload();
  reject(exception);
};

const cacheGet = (url) =>
  new Promise((resolve, reject) => {
    try {
      if (localStorage.getItem(url)) {
        const cachedData = JSON.parse(localStorage.getItem(url));
        resolve({ data: cachedData });
      } else {
        axios
          .get(url)
          .then(({ data }) => {
            localStorage.setItem(url, JSON.stringify(data));
            resolve({ data });
          })
          .catch((ex) => handleError(ex, reject));
      }
    } catch (ex) {
      handleError(ex, reject);
    }
  });

const getAllPokemonNames = () => cacheGet(`${API_URL}pokemon?limit=100000&offset=0`);

const getPokemonSpecies = (id) => cacheGet(`${API_URL}pokemon-species/${id}`);

const getPokemon = (url) => cacheGet(url);

const getEvolutionChain = (url) => cacheGet(url);

const getPokemonTypes = (urls) => axios.all(urls.map((url) => cacheGet(url)));

export { getAllPokemonNames, getPokemon, getPokemonTypes, getPokemonSpecies, getEvolutionChain };

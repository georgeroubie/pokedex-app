import axios from 'axios';
import {
  transformPokemonChainData,
  transformPokemonData,
  transformPokemonRecordsData,
  transformPokemonSpeciesData,
} from './data';

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
          .catch((ex) => {
            handleError(ex, reject);
          });
      }
    } catch (ex) {
      handleError(ex, reject);
    }
  });

function get(url, callback) {
  return new Promise((resolve, reject) => {
    try {
      if (localStorage.getItem(url)) {
        const cachedData = JSON.parse(localStorage.getItem(url));
        resolve(cachedData);
      } else {
        axios
          .get(url)
          .then(({ data }) => {
            const transformedData = callback(data);
            localStorage.setItem(url, JSON.stringify(transformedData));
            resolve(transformedData);
          })
          .catch((ex) => {
            handleError(ex, reject);
          });
      }
    } catch (ex) {
      handleError(ex, reject);
    }
  });
}

function getAllPokemonRecordsData() {
  return get(`${API_URL}pokemon?limit=100000&offset=0`, transformPokemonRecordsData);
}

function getPokemonData(url) {
  return get(url, transformPokemonData);
}

function getPokemonSpeciesData(url) {
  return get(url, transformPokemonSpeciesData);
}

function getEvolutionChainData(url) {
  return get(url, transformPokemonChainData);
}

const getPokemonTypes = (urls) => axios.all(urls.map((url) => cacheGet(url)));

export { getAllPokemonRecordsData, getPokemonData, getPokemonTypes, getPokemonSpeciesData, getEvolutionChainData };

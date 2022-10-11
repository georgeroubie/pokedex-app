import axios from 'axios';
import {
  transformPokemonChainData,
  transformPokemonData,
  transformPokemonRecordsData,
  transformPokemonSpeciesData,
  transformPokemonTypesData,
} from './data';

const API_URL = 'https://pokeapi.co/api/v2/';

function handleError(exception, reject) {
  localStorage.clear();
  sessionStorage.clear();
  window.location.reload();
  reject(exception);
}

function get(url, callback) {
  return new Promise((resolve, reject) => {
    try {
      if (sessionStorage.getItem(url)) {
        const cachedData = JSON.parse(sessionStorage.getItem(url));
        resolve(cachedData);
      } else {
        axios
          .get(url)
          .then(({ data }) => {
            const transformedData = callback(data);
            sessionStorage.setItem(url, JSON.stringify(transformedData));
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

function getPokemonTypesData(urls) {
  return axios.all(urls.map((url) => get(url, transformPokemonTypesData)));
}

export { getAllPokemonRecordsData, getPokemonData, getPokemonSpeciesData, getEvolutionChainData, getPokemonTypesData };

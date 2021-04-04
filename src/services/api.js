import axios from 'axios';

// Endpoints
const BASE_URL = 'https://swapi.dev/api';

// Custom Error for this api
function StarWarsApiError(message) {
  this.name = 'StarWarsApiError';
  this.message = message || 'Algo deu errado jovem Padawan';
  this.stack = new Error().stack;
}
StarWarsApiError.prototype = Object.create(StarWarsApiError.prototype);
StarWarsApiError.prototype.constructor = StarWarsApiError;

const starWarsApi = axios.create({
  baseURL: BASE_URL,
});

// Util functions
const spliResourceFromFullBaseUrl = url => {
  if (url?.includes(BASE_URL)) {
    const [, resource] = [...url.split(BASE_URL)];
    return resource;
  }

  return url;
};

export const getStarWarsCharactersByPage = async pageNumber => {
  try {
    const response = await starWarsApi.get('/people', {
      params: {
        page: pageNumber,
      },
    });
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const getStarWarsInfoByUrl = async url => {
  try {
    const resource = spliResourceFromFullBaseUrl(url);
    if (resource === url) {
      throw new StarWarsApiError();
    }
    const response = await starWarsApi.get(resource+'q');
    return response.data;
  } catch (error) {
    console.log(error instanceof StarWarsApiError);
    console.log(error);
  }
};

getStarWarsInfoByUrl('https://swapi.dev/api/films/1/');

const STARWARS_ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function getStarWars() {
  const response = await fetch(STARWARS_ENDPOINT);
  const result = await response.json();
  return result;
}

export default getStarWars;

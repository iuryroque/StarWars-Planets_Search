const STARWARS_ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function getStarWars() {
  const response = await fetch(STARWARS_ENDPOINT);
  const result = await response.json();
  console.log(result);
  return result;
}

export default getStarWars;

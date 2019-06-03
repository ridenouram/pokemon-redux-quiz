export function getAllPokemon(page) {
  console.log('new fetch with ', page);
  return fetch(`https://alchemy-pokedex.herokuapp.com/api/pokedex?page=${page}&perPage=10`)
    .then(res => res.json())
    .then(res => res.results);
}

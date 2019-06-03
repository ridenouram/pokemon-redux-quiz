export function getPokemonById(id) {
  return fetch(`https://alchemy-pokedex.herokuapp.com/api/pokedex/${id}`)
    .then(res => res.json())
    .then(res => res.results);
}

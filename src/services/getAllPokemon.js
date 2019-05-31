export default function getAllPokemon() {
  return fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex?page=1&perPage=20')
    .then(res => res.json())
    .then(res => res.results);
}

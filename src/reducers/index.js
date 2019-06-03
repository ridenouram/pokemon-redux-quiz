import { combineReducers } from 'redux';
import allPokemon from './allPokemonReducer';
import pokemonDetail from './pokemonDetailReducer';

export default combineReducers({
  allPokemon,
  pokemonDetail
});

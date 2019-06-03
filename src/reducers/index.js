import { combineReducers } from 'redux';
import allPokemon from './allPokemonReducer';
import pokemonDetail from './pokemonDetailReducer';
import comments from './commentReducer';

export default combineReducers({
  allPokemon,
  pokemonDetail,
  comments
});

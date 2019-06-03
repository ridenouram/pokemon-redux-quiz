import { getPokemonById } from '../services/getPokemonById';

export const SINGLE_FETCH_LOADING = 'SINGLE_FETCH_LOADING';
export const SINGLE_FETCH = 'SINGLE_FETCH';
export const SINGLE_FETCH_ERROR = 'SINGLE_FETCH_ERROR';

export const fetchSinglePokemon = id => ({
  type: SINGLE_FETCH,
  payload: getPokemonById(id),
  pendingType: SINGLE_FETCH_LOADING,
  errorType: SINGLE_FETCH_ERROR
});

import { getAllPokemon } from '../services/getAllPokemon';

export const ALL_FETCH_LOADING = 'ALL_FETCH_LOADING';
export const ALL_FETCH = 'ALL_FETCH';
export const ALL_FETCH_ERROR = 'ALL_FETCH_ERROR';

export const fetchAll = () => ({
  type: ALL_FETCH,
  payload: getAllPokemon(),
  pendingType: ALL_FETCH_LOADING,
  errorType:  ALL_FETCH_ERROR
});

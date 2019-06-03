import reducer from './allPokemonReducer';
import { ALL_FETCH, ALL_FETCH_LOADING, ALL_FETCH_ERROR } from '../actions/listActions';

describe('all pokemon reducer', () => {
  it('handles fetch pokemon action', () => {
    const initialState = {
      loading: true,
      error: null,
      pokemonArr: []
    };

    const newState = reducer(initialState, {
      type: ALL_FETCH,
      payload: ['some pokemon']
    });

    expect(newState).toEqual({
      loading: false,
      error: null,
      pokemonArr: ['some pokemon']
    });
  });
  it('handles fetch pokemon loading action', () => {
    const initialState = {
      loading: false,
      error: null,
      pokemonArr: []
    };

    const newState = reducer(initialState, {
      type: ALL_FETCH_LOADING,
    });

    expect(newState).toEqual({
      loading: true,
      error: null,
      pokemonArr: []
    });
  });
  it('handles fetch pokemon error action', () => {
    const initialState = {
      loading: false,
      error: null,
      pokemonArr: []
    };

    const newState = reducer(initialState, {
      type: ALL_FETCH_ERROR,
      payload: 'my error'
    });

    expect(newState).toEqual({
      loading: false,
      error: 'my error',
      pokemonArr: []
    });
  });
});

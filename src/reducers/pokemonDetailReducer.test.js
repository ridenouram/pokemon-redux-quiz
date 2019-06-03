import reducer from './pokemonDetailReducer';
import { SINGLE_FETCH, SINGLE_FETCH_LOADING, SINGLE_FETCH_ERROR } from '../actions/detailActions';

describe('single pokemon reducer', () => {
  it('handles fetch single pokemon action', () => {
    const initialState = {
      loading: true,
      error: null,
      pokemon: {},
      id: ''
    };

    const newState = reducer(initialState, {
      type: SINGLE_FETCH,
      payload: { test: 'test' }
    });

    expect(newState).toEqual({
      loading: false,
      error: null,
      pokemon: { test: 'test' },
      id: ''
    });
  });

  it('handles fetch pokemon loading action', () => {
    const initialState = {
      loading: false,
      error: null,
      pokemon: {},
      id: ''
    };

    const newState = reducer(initialState, {
      type: SINGLE_FETCH_LOADING,
    });

    expect(newState).toEqual({
      loading: true,
      error: null,
      pokemon: {},
      id: ''
    });
  });
  it('handles fetch pokemon error action', () => {
    const initialState = {
      loading: false,
      error: null,
      pokemon: {},
      id: ''
    };

    const newState = reducer(initialState, {
      type: SINGLE_FETCH_ERROR,
      payload: 'my error'
    });

    expect(newState).toEqual({
      loading: false,
      error: 'my error',
      pokemon: {},
      id: ''
    });
  });
});

import { ALL_FETCH, ALL_FETCH_LOADING, ALL_FETCH_ERROR } from '../actions/listActions';

const initialState = {
  loading: false,
  error: null,
  pokemonArr: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ALL_FETCH_LOADING:
      return { ...state, loading: true }; 
    case ALL_FETCH:
      return { ...state, loading: false, error: null, pokemonArr: action.payload  };
    case ALL_FETCH_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

import { SINGLE_FETCH_LOADING, SINGLE_FETCH, SINGLE_FETCH_ERROR } from "../actions/detailActions";


const initialState = {
  loading: false,
  error: null,
  pokemon: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SINGLE_FETCH_LOADING:
      return { ...state, loading: true };
    case SINGLE_FETCH:
      return { ...state, loading: false, error: null, pokemon: action.payload };
    case SINGLE_FETCH_ERROR:
      return { ...state, error: action.payload };
    default: 
      return state;
  }
}

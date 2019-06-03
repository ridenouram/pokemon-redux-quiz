import { createComment } from '../actions/commentActions';
import reducer from './commentReducer';

describe('comment reducer', () => {
  it('creates a comment', () => {
    const initialState = {};

    const newState = reducer(initialState, createComment('123', 'hello'));
    expect(newState).toEqual({ '123': ['hello'] });
  });
});

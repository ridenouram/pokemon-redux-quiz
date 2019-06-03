import { createComment, CREATE_COMMENT } from './commentActions';
import { fetchSinglePokemon } from './detailActions';
import {} from './listActions';

describe('comment actions', () => {
  it('can create a comment', () => {
    expect(createComment('12', 'my comment')).toEqual({
      type: CREATE_COMMENT,
      payload: {
        id: '12',
        comment: 'my comment'
      }
    });
  });
});







import React from 'react';
import { shallow } from 'enzyme';
import FullPokemon from './FullPokemon';

describe('FullPokemon component', () => {
  it('snapshot', () => {
    const wrapper = shallow(<FullPokemon pokemon={{}} />);
    expect(wrapper).toMatchSnapshot();
  });
});

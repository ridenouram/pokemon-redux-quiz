import React from 'react';
import { shallow } from 'enzyme';
import PokemonCard from './PokemonCard';

describe('PokemonCard component', () => {
  it('snapshot', () => {
    const wrapper = shallow(<PokemonCard name='bob' color='blue' img='url' />);
    expect(wrapper).toMatchSnapshot();
  });
});

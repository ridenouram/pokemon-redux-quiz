import React from 'react';
import { shallow } from 'enzyme';
import PokemonList from './PokemonList';

describe('PokemonList component', () => {
  it('snapshot', () => {
    const wrapper = shallow(<PokemonList pokemonArr={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
});

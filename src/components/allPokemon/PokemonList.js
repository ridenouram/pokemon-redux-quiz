import React from 'react';
import PropTypes from 'prop-types';
import PokemonCard from './PokemonCard';

function PokemonList({ pokemonArr }) {
  const mappedPokemon = pokemonArr.map(pokemon => {
    return (
      <li key={pokemon._id}>
        <PokemonCard name={pokemon.pokemon} color={pokemon.color_1} img={pokemon.url_image} id={pokemon._id} />
      </li>
    );
  });

  return (
    <ul>
      {mappedPokemon}
    </ul>
  );
}

PokemonList.propTypes = {
  pokemonArr: PropTypes.array.isRequired
};

export default PokemonList;

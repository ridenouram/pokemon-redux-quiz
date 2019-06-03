import React from 'react';
import PropTypes from 'prop-types';

function FullPokemon({ pokemon }) {
  return (
    <section>
      <h1>{pokemon.pokemon}</h1>
      <img src={pokemon.url_image} />
      <div>
        <h3>Attack: {pokemon.attack}</h3>
        <h3>Defense: {pokemon.defense}</h3>
        <h3>HP: {pokemon.hp}</h3>
      </div>
      <a href={pokemon.pokedex}>More Information</a>
    </section>
  );
}

FullPokemon.propTypes = {
  pokemon: PropTypes.object.isRequired
};

export default FullPokemon;

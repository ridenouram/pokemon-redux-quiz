import React from 'react';
import PropTypes from 'prop-types';

function PokemonCard({ name, img, color }) {
  return (
    <div style={{ background: color }}>
      <h2>{name}</h2>
      <img src={img} />
    </div>
  );
}

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default PokemonCard;

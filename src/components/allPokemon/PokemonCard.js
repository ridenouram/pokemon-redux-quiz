import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function PokemonCard({ name, img, color, id }) {
  return (
    <Link to={`/${id}`}>
      <div style={{ background: color }}>
        <h2>{name}</h2>
        <img src={img} />
      </div>
    </Link>
  );
}

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default PokemonCard;

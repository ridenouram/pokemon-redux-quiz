import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function PokemonCard({ name, img, color, id }) {
  return (
    <Link to={`/detail/${id}`}>
      <div style={{ background: color, width: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '30px' }}>
        <h2>{name}</h2>
        <img src={img} style={{ width: '250px'}} />
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

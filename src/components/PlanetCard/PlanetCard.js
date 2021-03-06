import React from 'react';
import './PlanetCard.css';
import PropTypes from 'prop-types';

const PlanetCard = ({
  name,
  terrain,
  population,
  climate,
  residents,
  toggleFavorites}) => {
  return (
    <div className='planet'>
      <h1 className='planet-name'>{name}</h1>
      <p className='planet-terrain'>terrain: {terrain}</p>
      <p className='planet-population'>population: {population}</p>
      <p className='planet-climate'>climate: {climate}</p>
      <p className='planet-residents'>residents: {residents}</p>
      <button
        className='button'
        onClick={() => toggleFavorites({
          name,
          terrain,
          population,
          climate,
          residents,
          category: 'planets'
        })}>
        Favorite
      </button>
    </div>
  );
};

PlanetCard.propTypes = {
  name: PropTypes.string,
  terrain: PropTypes.string,
  population: PropTypes.number,
  climate: PropTypes.string,
  residents: PropTypes.string,
  toggleFavorites: PropTypes.func
};

export default PlanetCard;

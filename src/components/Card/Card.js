import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = ({name, species, homeworld, population, toggleFavorites}) => {
  return (
    <div className='card'>
      <h1 className='name'>{name}</h1>
      <p className='species'>Species: {species}</p>
      <p className='homeworld'>Homeworld: {homeworld}</p>
      <p className='population'>
        Population:
        {population}
      </p>
      <button
        className='button'
        onClick={() =>
          toggleFavorites({
            name,
            species,
            homeworld,
            population,
            category: 'people'
          })}>
        Favorites
      </button>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  species: PropTypes.string,
  homeworld: PropTypes.string,
  population: PropTypes.number,
  toggleFavorites: PropTypes.func
};

export default Card;

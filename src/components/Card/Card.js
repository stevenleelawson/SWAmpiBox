import React from 'react';
import './Card.css'

const Card = ({name, species, homeworld, population, toggleFavorites}) => {
  return (
    <div className='card'>
      <h1 className='name'>{name}</h1>
      <p className='species'>Species: {species}</p>
      <p className='homeworld'>Homeworld: {homeworld}</p>
      <p className='population'>Population: {population}</p>
      <button className='button' onClick={() => toggleFavorites({name, species, homeworld, population, category: 'people'})}>favorites</button>
    </div>
  )
}

export default Card;

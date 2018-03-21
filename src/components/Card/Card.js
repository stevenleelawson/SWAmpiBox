import React from 'react';
import './Card.css'

const Card = ({name, species, homeworld, population}) => {
  console.log('card', name)
  return (
    <div className='card'>
      <h1 className='name'>{name}</h1>
      <p className='species'>Species: {species}</p>
      <p className='homeworld'>Homeworld: {homeworld}</p>
      <p className='population'>Population: {population}</p>
    </div>
  )
}

export default Card;

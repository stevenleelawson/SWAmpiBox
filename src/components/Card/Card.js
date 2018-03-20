import React from 'react';
import './Card.css'

const Card = ({name, species}) => {
  return (
    <div className='card'>
      <h1 className='name'>{name}</h1>
      <p className='species'>Species: {species}</p>
    </div>
  )
}

export default Card;

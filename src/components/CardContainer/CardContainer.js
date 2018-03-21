import React from 'react';
import './CardContainer.css';
import Card from '../Card/Card';

const CardContainer = ({ data }) => {
  console.log('CardContainer', data)
  const people = data.map( person =>
    <Card name={person.name}
          species={person.species}
          homeworld={person.homeworld}
          />)
  return (
    <div className='card-container'>
      {people}
    </div>
  )
}
export default CardContainer;

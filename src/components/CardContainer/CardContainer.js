import React from 'react';
import './CardContainer.css';
import Card from '../Card/Card';

const CardContainer = ({ data }) => {
  console.log('CardContainer', data.results)
  const people = data.results.map( person =>
    <Card name={person.name}
          species={person.species}

          />)
  return (
    <div className='card-container'>
      {people}
    </div>
  )
}
export default CardContainer;

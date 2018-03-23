import React from 'react';
import './PeopleCardContainer.css';
import Card from '../Card/Card';

const PeopleCardContainer = ({ data, toggleFavorites }) => {
  console.log('people',data)
  let people;
   if(data){
   people = data.map( person =>

    <Card name={person.name}
          species={person.species}
          homeworld={person.homeworld}
          population={person.population}
          toggleFavorites={toggleFavorites}
          />)
    } else {
      return null
    }
  return (
    <div className='card-container'>
      {people}
    </div>
  )
}
export default PeopleCardContainer;

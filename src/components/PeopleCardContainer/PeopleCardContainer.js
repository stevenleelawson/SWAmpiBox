import React from 'react';
import './PeopleCardContainer.css';
import Card from '../Card/Card';

const PeopleCardContainer = ({ data, toggleFavorites }) => {
  let people;
   if(data){
   people = data.map( (person, index) =>

    <Card name={person.name}
          species={person.species}
          homeworld={person.homeworld}
          population={person.population}
          toggleFavorites={toggleFavorites}
          key={person.name + index}
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

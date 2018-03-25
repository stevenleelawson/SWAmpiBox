import React from 'react';
import './PeopleCardContainer.css';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

const PeopleCardContainer = ({ data, toggleFavorites }) => {
  let people;

  if (data){
    people = data.map( (person, index) =>

      <Card name={person.name}
        species={person.species}
        homeworld={person.homeworld}
        population={person.population}
        toggleFavorites={toggleFavorites}
        key={person.name + index}
      />
    );
  } else {
    return null;
  }
  return (
    <div className='card-container'>
      {people}
    </div>
  );
};

PeopleCardContainer.propTypes = {
  data: PropTypes.object,
  toggleFavorites: PropTypes.func
};

export default PeopleCardContainer;

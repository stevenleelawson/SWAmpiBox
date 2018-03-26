import React from 'react';
import PlanetCard from '../PlanetCard/PlanetCard';
import PropTypes from 'prop-types';

const PlanetsCardContainer = ({data, toggleFavorites}) => {
  const displayPlanets = data.map( (planet, index) =>
    <PlanetCard
      name={planet.name}
      terrain={planet.terrain}
      population={planet.population}
      climate={planet.climate}
      residents={planet.residents.join(', ')}
      toggleFavorites={toggleFavorites}
      key={planet.name + index}
    />
  );
  return (
    <div className='card-container'>{displayPlanets}</div>
  );
};

PlanetsCardContainer.propTypes = {
  data: PropTypes.array,
  toggleFavorites: PropTypes.func
};

export default PlanetsCardContainer;

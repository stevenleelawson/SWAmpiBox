import React from 'react';
import './Favorites.css';
import Card from '../Card/Card';
import VehicleCard from '../VehicleCard/VehicleCard';
import PlanetCard from '../PlanetCard/PlanetCard';

const Favorites = ({favorites, toggleFavorites}) => {
  let favCards;
  if (!favorites.length) {
    return (
      <h3 className='no-favorite'>There are no Favorites!!!</h3>
    );
  } else {
    favCards = favorites.map( (favorite, index) => {
      if (favorite.category === 'people') {
        return <Card
          name={favorite.name}
          species={favorite.species}
          homeworld={favorite.homeworld}
          population={favorite.population}
          toggleFavorites={toggleFavorites}
          key={favorite.name + index}
        />;
      } else if (favorite.category === 'vehicles') {
        return <VehicleCard
          name={favorite.name}
          model={favorite.model}
          vehicleClass={favorite.vehicle_class}
          passengers={favorite.passengers}
          key={favorite.name + index}
          toggleFavorites={toggleFavorites}
        />;
      } else if (favorite.category === 'planets') {
        return <PlanetCard
          name={favorite.name}
          terrain={favorite.terrain}
          population={favorite.population}
          climate={favorite.climate}
          residents={favorite.residents}
          toggleFavorites={toggleFavorites}
          key={favorite.name + index}
        />;
      }
    }
    );
    return (
      <div className='container'>{favCards}</div>
    );
  }
};

export default Favorites;

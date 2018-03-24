import React from 'react';
import { NavLink } from 'react-router-dom';
import FavoriteCard from '../FavoriteCard/FavoriteCard';
import './Favorites.css';
import Card from '../Card/Card';
import VehicleCard from '../VehicleCard/VehicleCard';
import PlanetCard from '../PlanetCard/PlanetCard';

const Favorites = ({favorites, toggleFavorites}) => {
  console.log('favvvvs', favorites)
  let favCards
  if(!favorites.length) {

    return (
      <h3 className='no-favorite'>There are no Favorites!!!</h3>
    )
  } else {
    favCards = favorites.map( (favorite, index) => {
      if(favorite.category === 'people') {
        return <Card name={favorite.name}
              species={favorite.species}
              homeworld={favorite.homeworld}
              population={favorite.population}
              toggleFavorites={toggleFavorites}
              />
        console.log('fav',favorite)
      } else if(favorite.category === 'vehicles') {
          return <VehicleCard name={favorite.name}
                            model={favorite.model}
                            vehicleClass={favorite.vehicle_class}
                            passengers={favorite.passengers}
                            key={favorite.name + index}
                            toggleFavorites={toggleFavorites}
                            />
      } else if(favorite.category === 'planets') {
        return <PlanetCard name={favorite.name}
                    terrain={favorite.terrain}
                    population={favorite.population}
                    climate={favorite.climate}
                    residents={favorite.residents}
                    toggleFavorites={toggleFavorites}/>
      }
    }

    )
    return (

      <div className='container'>{favCards}</div>
    )
  }
}

export default Favorites

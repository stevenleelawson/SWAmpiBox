import React from 'react';
import './VehicleCard.css';
import PropTypes from 'prop-types';

const VehicleCard = ({
  name,
  model,
  vehicleClass,
  passengers,
  toggleFavorites
}) => {
  return (
    <div className='vehicle'>
      <h1 className='vehicle-name'>{name}</h1>
      <p className='vehicle-model'>model: {model}</p>
      <p className='vehicle-class'>class: {vehicleClass}</p>
      <p className='vehicle-passenger'>passengers: {passengers}</p>
      <button
        className='button'
        onClick={() => toggleFavorites({
          name,
          model,
          vehicleClass,
          passengers,
          category:'vehicles'
        })}>
        Favorite
      </button>
    </div>
  );
};

VehicleCard.propTypes = {
  name: PropTypes.string,
  model: PropTypes.string,
  vehicleClass: PropTypes.string,
  passengers: PropTypes.number,
  toggleFavorites: PropTypes.func
};

export default VehicleCard;

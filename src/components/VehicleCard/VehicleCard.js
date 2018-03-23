import React from 'react';
import './VehicleCard.css'

const VehicleCard = ({name, model, vehicleClass, passengers}) => {
  return (
    <div className='vehicle'>
      <h1 className='vehicle-name'>{name}</h1>
      <p className='vehicle-model'>model: {model}</p>
      <p className='vehicle-class'>class: {vehicleClass}</p>
      <p className='vehicle-passenger'>passengers: {passengers}</p>
      <button>Favorite</button>
    </div>
  )
}

export default VehicleCard;

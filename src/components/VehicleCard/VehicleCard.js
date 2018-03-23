import React from 'react';
import './VehicleCard.css'

const VehicleCard = ({name, model, vehicleClass}) => {
  return (
    <div className='vehicle'>
      <h1 className='vehicle-name'>{name}</h1>
      <p className='vehicle-model'>model: {model}</p>
      <p className='vehicle-class'>class: {vehicleClass}</p>
    </div>
  )
}

export default VehicleCard;

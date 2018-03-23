import React from 'react';
import './VehicleCard.css'

const VehicleCard = ({name}) => {
  return (
    <div className='vehicle'>
      <h1 className='vehicle-name'>{name}</h1>
    </div>
  )
}

export default VehicleCard;

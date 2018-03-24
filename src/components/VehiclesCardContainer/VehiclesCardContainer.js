import React from 'react';
import VehicleCard from '../VehicleCard/VehicleCard';
import './VehiclesCardContainer.css'

const VehiclesCardContainer = ({data, toggleFavorites}) => {
  let displayVehicles;
  if(data.results){
    displayVehicles = data.results.map((vehicle, index) => {
      return <VehicleCard name={vehicle.name}
                          model={vehicle.model}
                          vehicleClass={vehicle.vehicle_class}
                          passengers={vehicle.passengers}
                          key={vehicle.name + index}
                          toggleFavorites={toggleFavorites}
                        />
    })
  } else {
    return null
  }
  return (
    <div className='card-container'>{displayVehicles}</div>
  )
}

export default VehiclesCardContainer;

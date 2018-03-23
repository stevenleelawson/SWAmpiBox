import React from 'react';
import VehicleCard from '../VehicleCard/VehicleCard';
import './VehiclesCardContainer.css'

const VehiclesCardContainer = ({data}) => {
  console.log('vehicle', data.results)
  let displayVehicles;
  if(data.results){
    displayVehicles = data.results.map((vehicle, index) => {
      return <VehicleCard name={vehicle.name}/>
    })
  } else {
    return null
  }
  return (
    <div className='card-container'>{displayVehicles}</div>
  )
}

export default VehiclesCardContainer;
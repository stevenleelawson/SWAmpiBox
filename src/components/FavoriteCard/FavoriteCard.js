import React from 'react';

const FavoriteCard = (props) => {
  console.log('favcard', props)
  return (
    <div>
      <h1>{props.name}</h1>
      <p>population: {props.population}</p>
      <p>terrain: {props.terrain}</p>
      <p>climate: {props.climate}</p>
      <p>residents: {props.residents}</p>
      <p>homeworld: {props.homeworld}</p>
      <p>class: {props.vehicleClass}</p>
      <p>passengers: {props.passengers}</p>
    </div>
  )
}

export default FavoriteCard;

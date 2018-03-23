import React from 'react';
import Button from '../Button/Button';
import './ButtonContainer.css';
import { NavLink } from 'react-router-dom';

const ButtonContainer = ({ getPeople, getVehicles, favorites }) => {
  return (
    <div className='button-container'>
      <NavLink className="button" to={'/people'} onClick={() => getPeople()}>People</NavLink>
      <NavLink className="button" to={'/vehicles'} onClick={() => getVehicles()}>Vehicles</NavLink>
      <NavLink className="button" to={'/planets'} onClick={() => getPeople()}>Planets</NavLink>
      <NavLink className="button" to={'/favorites'}>Favorites <p>{favorites.length}</p></NavLink>
    </div>
  )
}
export default ButtonContainer;

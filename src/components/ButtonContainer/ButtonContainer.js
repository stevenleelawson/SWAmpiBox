import React from 'react';
import './ButtonContainer.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const ButtonContainer = ({ getPeople, getVehicles, getPlanets, favorites }) => {
  return (
    <div className='button-container'>
      <NavLink
        className="button"
        to={'/people'}
        onClick={() => getPeople()}>
        People
      </NavLink>
      <NavLink
        className="button"
        to={'/vehicles'}
        onClick={() => getVehicles()}>
        Vehicles
      </NavLink>
      <NavLink
        className="button"
        to={'/planets'}
        onClick={() => getPlanets()}>
        Planets
      </NavLink>
      <NavLink
        className="button"
        to={'/favorites'}>
        <span className="favorites-button">Favorites</span>
        <p>{favorites.length}</p>
      </NavLink>
    </div>
  );
};

ButtonContainer.propTypes = {
  getPeople: PropTypes.func,
  getVehicles: PropTypes.func,
  getPlanets: PropTypes.func,
  favorites: PropTypes.array
};

export default ButtonContainer;

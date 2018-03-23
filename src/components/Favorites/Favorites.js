import React from 'react';
import { NavLink } from 'react-router-dom';
import Card from '../Card/Card';
import './Favorites.css';

const Favorites = ({favorites}) => {
  if(!favorites.length) {

    return (
      <h3 className='no-favorite'>There are no Favorites!!!</h3>
    )
  } else {
    const favCards = favorites.map( favorite => <p  className='fav-card'>{favorite.name}</p>)
    return (

      <h3 className='container'>{favCards}</h3>
    )
  }
}

export default Favorites

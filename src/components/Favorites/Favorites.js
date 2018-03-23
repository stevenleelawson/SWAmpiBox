import React from 'react';
import { NavLink } from 'react-router-dom';

const Favorites = ({favorites}) => {
  if(!favorites.length) {


    return (
      <h3>There are no Favorites!!!</h3>
    )
  } else {
    return (

      <h3>There are Favorites!!!</h3>
    )
  }
}

export default Favorites

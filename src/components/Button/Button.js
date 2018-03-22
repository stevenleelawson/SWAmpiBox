import React from 'react';
import './Button.css';
import { NavLink } from 'react-router-dom';

const Button = ({category, getPeople}) => {
  return (

      <NavLink to={'/'}>
        <button className='button' onClick={() => getPeople()}>{category}</button>
      </NavLink>

  )
}

export default Button;

import React from 'react';
import './Button.css';

const Button = ({category, getPeople}) => {
  return (
    <div>
      <button className='button' onClick={() => getPeople()}>{category}</button>
    </div>
  )
}

export default Button;

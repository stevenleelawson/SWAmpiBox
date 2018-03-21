import React from 'react';
import './Button.css';

const Button = ({category}) => {
  return (
    <div>
      <button className='button'>{category}</button>
    </div>
  )
}

export default Button;

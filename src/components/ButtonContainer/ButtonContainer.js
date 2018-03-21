import React from 'react';
import Button from '../Button/Button';
import './ButtonContainer.css';

const ButtonContainer = () => {
  return (
    <div className='button-container'>
      <Button category="people"/>
      <Button category="vehicles"/>
      <Button category="planets"/>
    </div>
  )
}
export default ButtonContainer;

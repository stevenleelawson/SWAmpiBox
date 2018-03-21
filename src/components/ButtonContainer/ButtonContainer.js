import React from 'react';
import Button from '../Button/Button';
import './ButtonContainer.css';

const ButtonContainer = ({ getPeople }) => {
  return (
    <div className='button-container'>
      <Button category="people"
              getPeople={getPeople}/>
      <Button category="vehicles"/>
      <Button category="planets"/>
    </div>
  )
}
export default ButtonContainer;

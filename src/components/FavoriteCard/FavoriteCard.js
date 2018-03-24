import React from 'react';

const FavoriteCard = (props) => {
  console.log('favcard', props)
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

export default FavoriteCard;

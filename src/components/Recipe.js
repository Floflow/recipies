import React from 'react';
import { Link } from 'react-router-dom';

const Recipe = ({ id, title, image }) => {
  return(
    <div>
      <p>{title}</p>
      <img src={image} alt="image of the recipe"/>
    </div>
  );
}

export default Recipe;

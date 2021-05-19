import React from 'react';
import { Link } from 'react-router-dom';

const Recipe = ({ id, title, image }) => {
  return(
    <article className='recipe'>
      <div className='image-container'>
        <img src={image} alt="image of the recipe"/>
      </div>
      <div className='recipe-footer'>
        <h3>{title}</h3>
        <Link to={`/recipes/${id}`} className='btn btn-primary btn-details'>
          More details
        </Link>
      </div>
    </article>
  );
}

export default Recipe;

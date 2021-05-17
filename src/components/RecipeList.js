import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context'
import Recipe from './Recipe'

const RecipeList = () => {
  const { recipes } = useGlobalContext();
  return(
    <div>
      {
        recipes.map((recipe)=>{
          return(
            <Recipe key={recipe.id} {...recipe}/>
          )
        })
      }
    </div>
  );
}

export default RecipeList;


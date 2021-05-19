import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context'
import Recipe from './Recipe'
import Loading from './Loading'

const RecipeList = () => {
  const { recipes, loading } = useGlobalContext();
  if(loading){
   return <Loading/>
  }
  if (recipes.length <1) {
    return <h2>There is no recipe matching your criterias.</h2>
  }
  return(
    <section className='section'>
      <div className='recipe-center'>
        {
          recipes.map((recipe)=>{
            return(
              <Recipe key={recipe.id} {...recipe}/>
            )
          })
        }
      </div>
    </section>

  );
}

export default RecipeList;


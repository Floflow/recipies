import React, { useContext, useState, useEffect, useCallback } from 'react';

const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}&query=`
const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [loading, setLoading ] = useState(true);
  const [recipes, setRecipes ] = useState([]);
  const [search, setSearch] = useState('pizza');

  const fetchRecipes = useCallback(async() =>{
    setLoading(true);
    try{
      //I added "number="" params as I have limited requests per day. Remove it to get full result.
      const response = await fetch(`${url}${search}&number=2`);
      console.log(`${url}${search}&number=1`)
      const data = await response.json()
      console.log(data)
      const { results } = data;
      if(results){
        console.log(results)
        const newRecipes = results.map((product)=>{
          const { id, title, image } = product;
          return {id, title, image}
        })
        setRecipes(newRecipes)
      } else {
        setRecipes([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }, [search])
  useEffect(()=>{
    fetchRecipes()
  }, [fetchRecipes, search])

  return(
    <AppContext.Provider value={{ loading, recipes, search, setSearch }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider }

import {rest} from 'msw';
import {recipeItems, recipeDetails} from './data/recipe-data'

const handlers = [
  rest.get(
   'https://api.spoonacular.com/recipes/search?&query=dummy',
   (req, res, ctx) => res(ctx.status(200), ctx.json({ items: recipeItems }))
  ),
  rest.get(
   'https://api.spoonacular.com/recipes/dummyid/information?',
   (req, res, ctx) => res(ctx.status(200), ctx.json({ items: recipeDetails }))
  )
]
 export {handlers}

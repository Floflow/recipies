import React from 'react';
import {setupServer} from 'msw/node';
import {rest} from 'msw';
import {handlers} from './server-handlers'
import {render, screen} from '@testing-library/react';

const recipeItems = [
  {
    id: 656329,
    title: "Pizza bites with pumpkin",
    image: "https://spoonacular.com/recipeImages/656329-312x231.jpg",
    imageType: "jpg"
  },
  {
    id: 656338,
    title: "Pizza bites with tomatoes",
    image: "https://spoonacular.com/recipeImages/656329-312x221.jpg",
    imageType: "jpg"
  }
]

const server = setupServer(
  rest.get(
   'https://api.spoonacular.com/recipes/complexSearch?&query=dummy',
   (req, res, ctx) => res(ctx.status(200), ctx.json({ items: recipeItems }))
  )
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

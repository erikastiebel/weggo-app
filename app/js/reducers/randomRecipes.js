import { RANDOM_RECIPES } from '../actions/actions';

export default function randomRecipesReducer( state = [], action ) {
  switch (action.type) {

  case RANDOM_RECIPES:
    return action.randomRecipesData;

  default:
    return state;
  }
}

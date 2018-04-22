import { RECEIVE_RECIPES } from '../actions/actions';
import { RECEIVE_RECIPE } from '../actions/actions';

export default function recipesReducer( state = [], action ) {
  switch (action.type) {

  case RECEIVE_RECIPES:
    return action.recipesData;

  case RECEIVE_RECIPE:
    return [
      ...state, action.recipeData
    ]
  default:
    return state;
  }
}

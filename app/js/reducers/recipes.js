import {
  RECEIVE_RECIPES
 } from "../actions/actions";

export default function recipesReducer( state = {}, action ) {
  switch (action.type) {
  case RECEIVE_RECIPES:
    return action.recipesData;
  default:
    return state;
  }
}

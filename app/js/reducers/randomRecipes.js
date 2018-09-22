import {
  RANDOM_RECIPES,
  RANDOM_RECIPES_SUCCESS,
  RANDOM_RECIPES_FAILURE,
  SWITCH_RECIPE,
  SWITCH_RECIPE_SUCCESS,
  SWITCH_RECIPE_FAILURE
  } from '../actions/actions';

export default function randomRecipesReducer( state = { visibleRecipes:[], usedRecipes:[] }, action ) {
  switch (action.type) {

  case RANDOM_RECIPES:
    return {state};

  case RANDOM_RECIPES_SUCCESS:
    return {...state, visibleRecipes: action.updatedRecipes.visibleRecipes, usedRecipes: action.updatedRecipes.usedRecipes};

  case RANDOM_RECIPES_FAILURE:
    return {...state, error: action.updatedRecipes};

  case SWITCH_RECIPE:
    return {state};

  case SWITCH_RECIPE_SUCCESS:
    return {...state, visibleRecipes: action.updatedRecipes.visibleRecipes, usedRecipes: action.updatedRecipes.usedRecipes};

  case SWITCH_RECIPE_FAILURE:
    return {...state, error: action.updatedRecipes};

  default:
    return state;
  }
}

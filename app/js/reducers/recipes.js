import {
  RECEIVE_RECIPES,
  RECEIVE_RECIPES_SUCCESS,
  RECEIVE_RECIPES_FAILURE
 } from '../actions/actions';
import store from './../main';


export default function recipesReducer( state = {recipes:{}, isLoading: false, error: null}, action ) {
  switch (action.type) {

  case RECEIVE_RECIPES:
    return {...state, isLoading: true};

  case RECEIVE_RECIPES_SUCCESS:
    return {...state, isLoading:false, recipes: convertRecipes(action.recipes)};

  case RECEIVE_RECIPES_FAILURE:
    return {...state, isLoading: false, error: action.recipes.error};

  default:
    return state;
  }
}

function convertRecipes(recipes){
  const storeRecipes = [];
    for(const recipeObject in recipes) {
      storeRecipes.push(recipes[recipeObject]);
    }
  return storeRecipes;
}

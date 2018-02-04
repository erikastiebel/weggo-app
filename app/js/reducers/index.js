import { combineReducers } from 'redux';
import recipesData from './recipes';
import randomRecipesData from './randomRecipes';


const rootReducer = combineReducers({
  recipesData,
  randomRecipesData
});

export default rootReducer;

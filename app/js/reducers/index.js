import { combineReducers } from 'redux';
import recipesDB from './recipes';
import randomRecipes from './randomRecipes';
import userData from './handleUser';


const rootReducer = combineReducers({
  recipesDB,
  randomRecipes,
  userData
});

export default rootReducer;

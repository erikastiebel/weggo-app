import { combineReducers } from 'redux';
import recipesDB from './recipes';
import randomRecipes from './randomRecipes';
import userData from './handleUser';
import userMenues from './userMenues';


const rootReducer = combineReducers({
  recipesDB,
  randomRecipes,
  userData,
  userMenues
});

export default rootReducer;

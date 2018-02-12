import { combineReducers } from 'redux';
import recipesData from './recipes';
import randomRecipesData from './randomRecipes';
import userInfoData from './login';


const rootReducer = combineReducers({
  recipesData,
  randomRecipesData,
  userInfoData

});

export default rootReducer;

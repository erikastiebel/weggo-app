import * as carrotApi from '../api/carrotApi';
import * as random from '../utils/randomRecipes';


/*
// RECEIVE RECIPES
*/
export const RECEIVE_RECIPES = 'RECEIVE_RECIPES';
export const RECEIVE_RECIPES_SUCCESS = 'RECEIVE_RECIPES_SUCCESS';
export const RECEIVE_RECIPES_FAILURE = 'RECEIVE_RECIPES_SUCCESS_FAILURE';

function receiveRecipes() {
  return {
    type: RECEIVE_RECIPES
  }
}

function receiveRecipesSuccess(recipes) {
  return {
    type: RECEIVE_RECIPES_SUCCESS,
    recipes: recipes
  }
}

function receiveRecipesFailure(error) {
  return {
    type: RECEIVE_RECIPES_FAILURE,
    recipes: {error}
  }
}

//Fetching recipes from the Carrot API
export function fetchRecipes() {
  return dispatch => {
    carrotApi.getRecipes()
    .then(results => {
      dispatch(receiveRecipesSuccess(results))
    }).catch(error => {
      dispatch(receiveRecipesFailure(error))
    })
  };
};


/*
// RANDOM RECIPES
*/
export const RANDOM_RECIPES = 'RANDOM_RECIPES';
export const RANDOM_RECIPES_SUCCESS = 'RANDOM_RECIPES_SUCCESS';
export const RANDOM_RECIPES_FAILURE = 'RANDOM_RECIPES_FAILURE';

function randomRecipes(recipes) {
  return {
    type: RANDOM_RECIPES
  }
}

function randomRecipesSuccess(updatedRecipes) {
  return {
    type: RANDOM_RECIPES_SUCCESS,
    updatedRecipes: updatedRecipes
  }
}

function randomRecipesFailure(error) {
  return {
    type: RANDOM_RECIPES_FAILURE,
    updatedRecipes: {error}
  }
}

export const getRandomRecipes = (numberOfRecipes, index = null) => {
  return dispatch => {
    let updatedRecipesList = random.randomRecipes(numberOfRecipes, index = null);
    if(updatedRecipesList.visibleRecipes !== null && updatedRecipesList.visibleRecipes.length > 0){
      dispatch(randomRecipesSuccess({
        usedRecipes: updatedRecipesList.usedRecipes,
        visibleRecipes: updatedRecipesList.visibleRecipes
      }));
    }
    else {
      dispatch(randomRecipesFailure(updatedRecipesList));
    }
  }
}


/*
// SWITCH RECIPE
*/
export const SWITCH_RECIPE = 'SWITCH_RECIPE';
export const SWITCH_RECIPE_SUCCESS = 'SWITCH_RECIPE_SUCCESS';
export const SWITCH_RECIPE_FAILURE = 'SWITCH_RECIPE_FAILURE';

function switchRecipe(recipe) {
  return {
    type: SWITCH_RECIPE,
    updatedRecipes: recipe
  }
}

function switchRecipeSuccess(recipe) {
  return {
    type: SWITCH_RECIPE_SUCCESS,
    updatedRecipes: recipe
  }
}

function switchRecipeFailure(error) {
  return {
    type: SWITCH_RECIPE,
    updatedRecipes: error
  }
}

export const getNewRecipe = (index) => {
  return dispatch => {
    let updatedRecipe = random.randomRecipes(1, index);
    if(updatedRecipe.visibleRecipes !== null && updatedRecipe.visibleRecipes.length > 0){
      dispatch(switchRecipeSuccess({
        usedRecipes: updatedRecipe.usedRecipes,
        visibleRecipes: updatedRecipe.visibleRecipes
      }));
    }
    else {
      dispatch(switchRecipeFailure(updatedRecipe));
    }
  }
}


/*
// SEARCH RECIPES
*/
export const SEARCH_RECIPES = 'SEARCH_RECIPES';
export const SEARCH_RECIPES_SUCCESS = 'SEARCH_RECIPES_SUCCESS';
export const SEARCH_RECIPES_FAILURE = 'SEARCH_RECIPES_FAILURE';

function searchRecipes(recipes) {
  return {
    type: SEARCH_RECIPES,
    recipes: recipes
  }
}

function searchRecipesSuccess(recipes) {
  return {
    type: SEARCH_RECIPES_SUCCESS,
    recipes: recipes
  }
}

function searchRecipesFailure(error) {
  return {
    type: SEARCH_RECIPES_SUCCESS,
    recipes: error
  }
}


/*
// GET USER
*/
export const GET_USER = 'GET_USER';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';

function getUser(userData) {
  return {
    type: GET_USER,
    userData: userData
  }
}

function getUserSuccess(userData) {
  return {
    type: GET_USER_SUCCESS,
    userData: userData
  }
}

function getUserFailure(error) {
  return {
    type: GET_USER_FAILURE,
    userData: error
  }
}


/*
// LOGIN USER
*/
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

function loginUser(data) {
  return {
    type: LOGIN_USER,
    userData: data
  }
}

function loginUserSuccess(data) {
  return {
    type: LOGIN_USER_SUCCESS,
    userData: data
  }
}

function loginUserFailure(error) {
  return {
    type: LOGIN_USER_FAILURE,
    userData: error
  }
}


export const loginUserWithEmailAndPassword = (email, password) => {
  console.log('EMAIL+PASSW i action: ', email , ' & ', password);
  return dispatch => {
    carrotApi.loginUserToFirebase(email, password)
    .then(results => {
      console.log('Response from Login: ', results.user);
      dispatch(loginUserSuccess(results.user))
    }).catch(error => {
      dispatch(loginUserFailure(error))
    })
  }
}


/*
// LOGOUT USER
*/
// export const LOGOUT_USER = 'LOGOUT_USER';
// export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS';
// export const LOGOUT_USER_FAILURE = 'LOGOUT_USER_FAILURE';
//
// function logoutUser(data) {
//   return {
//     type: LOGOUT_USER,
//     userData: data
//   }
// }
//
// function logoutUserSuccess(data) {
//   return {
//     type: LOGOUT_USER_SUCCESS,
//     userData: data
//   }
// }
//
// function logoutUserFailure(error) {
//   return {
//     type: LOGOUT_USER_FAILURE,
//     userData: error
//   }
// }
//
// export const logoutUser = () => {
//   return dispatch => {
//     carrotApi.logoutUserFromFirebase()
//     .then(results => {
//       dispatch(logoutUserSuccess(results))
//     }).catch(error => {
//       dispatch(logoutUserFailure(error))
//     })
//   }
// }

export const RECEIVE_RECIPES = 'RECEIVE_RECIPES';
export const RECEIVE_RECIPE = 'RECEIVE_RECIPE';
export const RANDOM_RECIPES = 'RANDOM_RECIPES';
export const RECEIVE_USERINFO = 'RECEIVE_USERINFO';

//May be moved to config file
const recipesEndpoint = '/api/weggo/recipes/';
const recipeEndpoint = '/api/weggo/recipe';
const loginUserEndpoint = '/api/weggo/user/loginuser';

function reciveUserInfo(data) {
  return {
    type: RECEIVE_USERINFO,
    userInfoData: data
  }
}

function receiveRecipes(data) {
  return {
    type: RECEIVE_RECIPES,
    recipesData: data
  }
}

function receiveRecipe(data) {
  return {
    type: RECEIVE_RECIPE,
    recipeData: data
  }
}

function randomRecipes(data) {
  return {
    type: RANDOM_RECIPES,
    randomRecipesData: data
  }
}

//Fetching a specific recipe from Carrot API based on ID

export function fetchRecipeByID( recipeID, state) {
  return dispatch => {
    return fetch(recipeEndpoint + '/' + recipeID)
    .then((res) => res.json(),
    (error) => console.log('An error occurred.', error))
    .then(data => {
      //add recipeObject to state
      dispatch(receiveRecipe(data));
    })
  }
}

//Fetching recipes from the Carrot API
export function fetchRecipes() {
  return dispatch => {
    return fetch(recipesEndpoint)
    .then((res) => res.json(),
    (error) => console.log('An error occurred.', error))
    .then(data => {
      const storeRecipes = [];
      for(const recipeObject in data) {
        storeRecipes.push(data[recipeObject]);
      }
      dispatch(receiveRecipes(storeRecipes));
    })
  }
}


var visibleRecipes = [];
var usedRecipes = [];

export const getRandomRecipes = (state, numberOfRecipes, index = null) => {
  return (dispatch) => {
    if (numberOfRecipes !== null || undefined) {
      if (numberOfRecipes === 1) {
        visibleRecipes = state.visibleRecipes;
        usedRecipes = state.usedRecipes;
      }
      else {
        visibleRecipes = [];
        usedRecipes = [];
      }
      for(let i = 1; i <= numberOfRecipes; i++) {
        let randomRecipeIndex = randomNumber(state);
        usedRecipes.push(state.recipesData[randomRecipeIndex].id);
        if (index === null) {
          visibleRecipes.push(state.recipesData[randomRecipeIndex]);
        }
        else {
            visibleRecipes[index] = state.recipesData[randomRecipeIndex];
        }
      }
    }
    // console.log('visibleRecipes: ', visibleRecipes);
    // console.log('usedRecipes: ', usedRecipes);
    dispatch(randomRecipes({
      usedRecipes: usedRecipes,
      visibleRecipes: visibleRecipes
    }));
  }
}
//funktion som slumpar fram ett indextal för att välja nytt recept.
const randomNumber = (state) => {
  let randNum = Math.floor(Math.random() * state.recipesData.length);
//  console.log('randomNum: ', randNum,' receptlängd ', state.recipesData.length);
  while (checkSelecedRecipe(state, randNum)) {
    randNum = Math.floor(Math.random() * state.recipesData.length);
  }
  return randNum;
}

// Funktion för att kontrollera att ett indexnummer inte motsvarar ett receptid som redan valts
const checkSelecedRecipe = (state, num) => {
  //console.log('här vill vi titta: ', state.recipesData[num], usedRecipes);
  const recipe = state.recipesData[num];
  if (usedRecipes.indexOf(recipe.id) != -1) {
    return true;
  }
  else{
    return false;
  }
}

export const loginUserWithEmailAndPassword = (state, email, password) => {
  return dispatch => {
    const urlWithParams = loginUserEndpoint + '?username='+ encodeURIComponent(email) +'&password='+ encodeURIComponent(password);
    return fetch(urlWithParams, {
      method: 'POST'
    })
    .then((res) => res.json(),
    (error) => console.log('An error occurred.', error))
    .then(data => {
      console.log(data);
      dispatch(reciveUserInfo(data));
    })
  }
}

export const  makeRecipesList = (recipeObject) => {
  const recipesList = [];
  for (const recipe in recipeObject) {
    if (recipeObject) {
      recipesList.push(recipeObject[recipe]);
    }
  }
  return recipesList;
}

export const RECEIVE_RECIPES = 'RECEIVE_RECIPES';
export const RANDOM_RECIPES = 'RANDOM_RECIPES';

const url = '/api/weggo/recipies';


function receiveRecipes(data) {
  return {
    type: RECEIVE_RECIPES,
    recipesData: data
  }
}

function randomRecipes(data) {
  return {
    type: RANDOM_RECIPES,
    randomRecipesData: data
  }
}

//Feching recipes from the Carrot API
export function fetchRecipes() {
  return dispatch => {
    return fetch(url)
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
  console.log('Jag är klickad!!!!!!', state, numberOfRecipes, index);
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
  console.log(randNum);
  while (checkSelecedRecipe(state, randNum)) {
    randNum = Math.floor(Math.random() * state.recipesData.length);
  }
  return randNum;
}

// Funktion för att kontrollera att ett indexnummer inte motsvarar ett receptid som redan valts
const checkSelecedRecipe = (state, num) => {
  console.log('här vill vi titta: ', state.recipesData[num], usedRecipes);
  const recipe = state.recipesData[num];
  if (usedRecipes.indexOf(recipe.id) != -1) {
    return true;
  }
  else{
    return false;
  }
}

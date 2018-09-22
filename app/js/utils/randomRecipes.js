import store from './../main';


export const randomRecipes = (numberOfRecipes, index = null) => {

  const allRecipes = store.getState().recipesDB.recipes;
  let visibleRecipes = [];
  let usedRecipes = [];

  if (numberOfRecipes !== null || undefined) {
    if (numberOfRecipes === 1){
      visibleRecipes = store.getState().randomRecipes.visibleRecipes;
      usedRecipes = store.getState().randomRecipes.usedRecipes;
    }
    for(let i = 1; i <= numberOfRecipes; i++) {
      let randomRecipeIndex = randomNumber(allRecipes, usedRecipes);
      usedRecipes.push(allRecipes[randomRecipeIndex].id);
      if (index === null) {
        visibleRecipes.push(allRecipes[randomRecipeIndex]);
      }
      else {
          visibleRecipes[index] = allRecipes[randomRecipeIndex];
      }
    }
    return {
      visibleRecipes: visibleRecipes,
      usedRecipes:usedRecipes
    };
  }
  return {error: 'Number of recipes empty'};
}
//Funktion som slumpar fram ett indextal för att välja nytt recept.
const randomNumber = (allRecipes, usedRecipes) => {
  let randNum = Math.floor(Math.random() * allRecipes.length);
  while (checkSelecedRecipe(allRecipes, usedRecipes, randNum) && usedRecipes.length < allRecipes.length) {
    randNum = Math.floor(Math.random() * allRecipes.length);
  }
  return randNum;
}

// Funktion för att kontrollera att ett indexnummer inte motsvarar ett receptid som redan valts.
const checkSelecedRecipe = (allRecipes, usedRecipes, num) => {
  const recipe = allRecipes[num];
  if (usedRecipes.indexOf(recipe.id) != -1) {
    return true;
  }
  else{
    return false;
  }
}

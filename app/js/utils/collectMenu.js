import store from './../main';


export const collectMenu = () => {
  const allRecipes = store.getState().randomRecipes.visibleRecipes;
  const formatedList = {};
  allRecipes.forEach((recipe, index) => {
    formatedList[index] = recipe.id;
  });
  return JSON.stringify(formatedList);
}

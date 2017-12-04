export const RECEIVE_RECIPES = "RECEIVE_RECIPES";

const url = "/api/weggo/recipies";


function receiveRecipes(data) {
  return {
    type: RECEIVE_RECIPES,
    recipesData: data
  }
}

export function fetchRecipes() {
  return dispatch => {
    return fetch(url)
    .then((res) => res.json(),
    (error) => console.log('An error occurred.', error))
    .then(data => {
      dispatch(receiveRecipes(data))
    })
  }
}

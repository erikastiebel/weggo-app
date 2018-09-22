const recipesEndpoint = '/api/weggo/recipes/';
const loginUserEndpoint = '/api/weggo/user/loginuser';


export function getRecipes() {
  return fetch(recipesEndpoint)
  .then((response) => {
    return response.json()
  })
  .catch(err => {
    return err;
  });
}

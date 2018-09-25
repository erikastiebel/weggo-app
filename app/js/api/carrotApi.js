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

export const loginUserToFirebase = (email, password) => {
  const urlWithParams = loginUserEndpoint + '?username='+ encodeURIComponent(email) +'&password='+ encodeURIComponent(password);
  return fetch(urlWithParams, {
    method: 'POST'
  })
  .then((response) => {
    return response.json()
  })
  .catch(err => {
    return err;
  });

}

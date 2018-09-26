const recipesEndpoint = '/api/weggo/recipes/';
const loginUserEndpoint = '/api/weggo/user/loginuser';
const logoutUserEndpoint = '/api/weggo/user/logoutuser';

import store from './../main';


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

export const logoutUserFromFirebase = () => {
  const userToken = store.getState().userData.user.stsTokenManager.accessToken;
  console.log('userToken: ', userToken);
  const urlWithParams = logoutUserEndpoint + '?idToken='+ encodeURIComponent(userToken);
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

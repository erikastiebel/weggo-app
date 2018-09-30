const recipesEndpoint = '/api/weggo/recipes/';
const loginUserEndpoint = '/api/weggo/user/loginuser';
const logoutUserEndpoint = '/api/weggo/user/logoutuser';
const saveMenuToUserEndpoint = '/api/weggo/user/savemenu';

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

export const saveMenuToUser = (menu) => {
  const userToken = store.getState().userData.user.stsTokenManager.accessToken;
  const urlWithParams = saveMenuToUserEndpoint + '?idToken='+ encodeURIComponent(userToken);
  return fetch(urlWithParams, {
    method: 'POST',
    body: JSON.stringify(menu),
    headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json',
    }
  })
  .then((response) => {
    console.log('Vad är responset: ', response);
    return response.json();
  })
  .catch(err => {
    return err;
  });
}

import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import '../scss/style.scss';

import rootReducer from './reducers/index';
import App from './components/App';

const store = createStore(
  rootReducer,
  window.devToolsExtension && window.devToolsExtension(),
  applyMiddleware(thunkMiddleware)
);

store.subscribe(() => {
  console.log(store.getState());
});

render (
<Provider store={store}>
  <App />
</Provider>,
document.getElementById('app-container')
);

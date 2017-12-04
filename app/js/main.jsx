'use strict';
import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";

import rootReducer from "./reducers/index";
import App from "./components/App";

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);

render (
<Provider store={store}>
  <App />
</Provider>,
document.getElementById('content')
);

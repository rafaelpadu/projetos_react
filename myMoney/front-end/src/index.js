import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import thunk from 'redux-thunk'
import multi from 'redux-multi'
import promise from 'redux-promise'

import reducers from "./main/reducers";
import App from "./main/App.jsx";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(multi,thunk,promise)(createStore)(reducers,devTools)
ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);

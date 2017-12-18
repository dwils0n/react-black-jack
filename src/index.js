import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers/reducer';
import AppWrapper from './components/App/AppWrapper';
import logger from 'redux-logger';
import './index.css';

const middleware = [logger];

let store = createStore(
    reducer,
    applyMiddleware(...middleware)
)

render(
  <Provider store={store}>
    <AppWrapper />
  </Provider>,
  document.getElementById('root')
)


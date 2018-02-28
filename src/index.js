import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './App';
import {listFilteringReducer} from './reducer/list-filtering-reducer.js'
import {listReducer} from './reducer/list-reducer.js'
import {rootReducers} from './reducer/index.js'

const store = createStore(rootReducers)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';

import initialState from '../initialState';
import reducers from '../reducers';

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(
    applyMiddleware(...middleware),
  ),
);

export default store;

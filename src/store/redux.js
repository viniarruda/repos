import {createStore, applyMiddleware} from 'redux';

import thunk from 'redux-thunk';
import {routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from 'history';

import reducers from './reducers';

export const history = createBrowserHistory();

export const middleware = [thunk, routerMiddleware(history)];

export const store = createStore(
  reducers(history),
  applyMiddleware(...middleware),
);

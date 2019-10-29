import {combineReducers} from 'redux';

import repos from './repos/reducers';

export default () =>
  combineReducers({
    repos,
  });

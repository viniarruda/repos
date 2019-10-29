import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import repos from './repos/reducers';

export default history =>
  combineReducers({
    repos,
    router: connectRouter(history),
  });

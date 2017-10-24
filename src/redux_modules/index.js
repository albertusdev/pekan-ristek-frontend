import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './auth';
import competition from './competition';

export default combineReducers({
  auth,
  competition,
  router: routerReducer,
});

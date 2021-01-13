import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { dialogsReducer } from './dialogsReducer/index';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import { appReducer } from './appReducer/index';

const reducers = combineReducers({
  dialogsData: dialogsReducer,
  profileData: profileReducer,
  sidebarData: sidebarReducer,
  usersData: usersReducer,
  auth: authReducer,
  app: appReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));

window.store = store;

export default store;

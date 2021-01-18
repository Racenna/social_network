import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import dialogsReducer from './dialogsReducer/index';
import profileReducer from './profileReducer/index';
import sidebarReducer from './sidebarReducer/sidebarReducer';
import usersReducer from './usersReducer/index';
import authReducer from './authReducer/index';
import appReducer from './appReducer/index';

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

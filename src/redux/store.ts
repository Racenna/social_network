import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import dialogsReducer from './dialogs_reducer/dialogsReducer';
import profileReducer from './profile_reducer/profileReducer';
import sidebarReducer from './sidebar_reducer/sidebarReducer';
import usersReducer from './users_reducer/usersReducer';
import authReducer from './auth_reducer/authReducer';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from './app_reducer/appReducer';

const reducers = combineReducers({
  dialogsData: dialogsReducer,
  profileData: profileReducer,
  sidebarData: sidebarReducer,
  usersData: usersReducer,
  auth: authReducer,
  app: appReducer,
  form: formReducer,
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof reducers>;
export default store;

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";

const reducers = combineReducers({
  dialogsData: dialogsReducer,
  profileData: profileReducer,
  sidebarData: sidebarReducer,
  usersData: usersReducer,
  auth: authReducer,
  form: formReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(thunk))
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store;

export default store;

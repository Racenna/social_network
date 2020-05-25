import { createStore, combineReducers } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

const reducers = combineReducers({
  dialogsData: dialogsReducer,
  profileData: profileReducer,
  sidebar: sidebarReducer,
});

const store = createStore(reducers);

export default store;

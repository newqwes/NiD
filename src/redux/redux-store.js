import profilePageReducer from "./profile-reducer";
import dialogPageReducer from "./dialog-reducer";
import sidebarPageReducer from "./sidebar-reducer";
import usersPageReducer from "./users-reducer";
import authReducer from "./auth";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./app-reducer";

const { createStore, combineReducers, applyMiddleware } = require("redux");
let reducers = combineReducers({
  profilePage: profilePageReducer,
  dialogPage: dialogPageReducer,
  menuSideBar: sidebarPageReducer,
  usersPage: usersPageReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});
let store = createStore(reducers, applyMiddleware(thunk));

window.store = store; //console call store.GetState() ....
export default store;

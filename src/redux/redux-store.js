import profilePageReducer from './profile-reducer';
import dialogPageReducer from './dialog-reducer';
import sidebarPageReducer from './sidebar-reducer';
import usersPageReducer from './users-reducer';
import authReducer from './auth';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from './app-reducer';
const { createStore, combineReducers, applyMiddleware, compose } = require('redux');

let reducers = combineReducers({
  profilePage: profilePageReducer,
  dialogPage: dialogPageReducer,
  menuSideBar: sidebarPageReducer,
  usersPage: usersPageReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

window.store = store;
export default store;

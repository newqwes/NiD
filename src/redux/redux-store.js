import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

import authReducer from './auth';
import appReducer from './app-reducer';
import usersPageReducer from './users-reducer';
import dialogPageReducer from './dialog-reducer';
import profilePageReducer from './profile-reducer';
import sidebarPageReducer from './sidebar-reducer';

const { createStore, combineReducers, applyMiddleware, compose } = require('redux');

const reducers = combineReducers({
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

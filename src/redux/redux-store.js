import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import profilePageReducer from './profile/profile-reducer';
import dialogPageReducer from './dialog/dialog-reducer';
import sidebarPageReducer from './sidebar/sidebar-reducer';
import usersPageReducer from './users/users-reducer';
import authReducer from './auth/auth';
import appReducer from './app/app-reducer';

import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  profilePage: profilePageReducer,
  dialogPage: dialogPageReducer,
  menuSideBar: sidebarPageReducer,
  usersPage: usersPageReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk, sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

window.store = store;
export default store;

import { all, call } from 'redux-saga/effects';
import { watcherApp } from './app/watchers';
import { watcherAuth } from './auth/watchers';
import { watcherSidebar } from './sidebar/watchers';
import { watcherProfile } from './profile/watchers';

function* rootSaga() {
  yield all([call(watcherApp), call(watcherSidebar), call(watcherAuth), call(watcherProfile)]);
}

export default rootSaga;

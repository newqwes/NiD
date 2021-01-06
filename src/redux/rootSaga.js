import { all, call } from 'redux-saga/effects';
import { watcherInitializedSuccess } from './app/watchers';
import { watcherGetOwnProfile } from './auth/watchers';
import { watcherSidebar } from './sidebar/watchers';

function* rootSaga() {
  yield all([call(watcherInitializedSuccess), call(watcherSidebar), call(watcherGetOwnProfile)]);
}

export default rootSaga;

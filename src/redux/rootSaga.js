import { all, call } from 'redux-saga/effects';
import { watcherInitializedSuccess } from './app/watchers';
import { watcherGetOwnProfile } from './auth/watchers';

function* rootSaga() {
  yield all([call(watcherInitializedSuccess), call(watcherGetOwnProfile)]);
}

export default rootSaga;

import { takeEvery } from 'redux-saga/effects';
import { GET_OWN_PROFILE, SET_LOGIN } from './types';
import { workerGetOwnProfile, workerSetLogin } from './workers';

export function* watcherGetOwnProfile() {
  yield takeEvery(GET_OWN_PROFILE, workerGetOwnProfile);
  yield takeEvery(SET_LOGIN, workerSetLogin);
}

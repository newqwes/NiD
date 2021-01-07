import { takeEvery } from 'redux-saga/effects';
import { PROFILES } from '../constants';

import {
  workerGetUserProfile,
  workerGetUserStatus,
  workerUpdateUserStatus,
  workerUpdatePhoto,
  workerUpdateInfo,
} from './workers';

export function* watcherProfile() {
  yield takeEvery(PROFILES.GET_USER_PROFILE, workerGetUserProfile);
  yield takeEvery(PROFILES.GET_USER_STATUS, workerGetUserStatus);
  yield takeEvery(PROFILES.UPDATE_USER_STATUS, workerUpdateUserStatus);
  yield takeEvery(PROFILES.UPDATE_PHOTO, workerUpdatePhoto);
  yield takeEvery(PROFILES.UPDATE_INFO, workerUpdateInfo);
}

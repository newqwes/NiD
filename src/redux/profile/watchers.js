import { takeEvery } from 'redux-saga/effects';
import {
  GET_USER_PROFILE,
  GET_USER_STATUS,
  UPDATE_USER_STATUS,
  CHANGE_PHOTO,
  CHANGE_INFO,
} from './types';
import {
  workerGetUserProfile,
  workerGetUserStatus,
  workerUpdateUserStatus,
  workerChangePhoto,
  workerChangeInfo,
} from './workers';

export function* watcherProfile() {
  yield takeEvery(GET_USER_PROFILE, workerGetUserProfile);
  yield takeEvery(GET_USER_STATUS, workerGetUserStatus);
  yield takeEvery(UPDATE_USER_STATUS, workerUpdateUserStatus);
  yield takeEvery(CHANGE_PHOTO, workerChangePhoto);
  yield takeEvery(CHANGE_INFO, workerChangeInfo);
}

import { stopSubmit } from 'redux-form';
import { put, select, call } from 'redux-saga/effects';
import { profileAPI } from '../../api/api';
import isRequestOK from '../../utils/requestChecker/isRequestOK';
import { setUserProfile, setUserStatus, updatePhotoSuccess, loadUserProfile } from '../actions';

export function* workerGetUserProfile({ userUrlId }) {
  const data = yield call(profileAPI.getUserProfile, userUrlId);
  yield put(setUserProfile(data));
}

export function* workerGetUserStatus({ userUrlId }) {
  const data = yield call(profileAPI.getUserStatus, userUrlId);
  yield put(setUserStatus(data));
}

export function* workerUpdateUserStatus({ status }) {
  const { data } = yield call(profileAPI.updateUserStatus, status);

  if (isRequestOK(data.resultCode)) {
    yield put(setUserStatus(status));
  }
}

export function* workerUpdatePhoto({ photo }) {
  const { data } = yield call(profileAPI.updatePhoto, photo);

  if (isRequestOK(data.resultCode)) {
    yield put(updatePhotoSuccess(data.data.photos));
  }
}

export function* workerUpdateInfo({ formData }) {
  const state = yield select();
  const userID = state.auth.id;
  const { data } = yield call(profileAPI.updateInfo, formData);

  if (isRequestOK(data.resultCode)) {
    yield put(loadUserProfile(userID));
  } else {
    yield put(
      stopSubmit('profile-form', {
        _error: data.messages[0],
      })
    );
    yield Promise.reject(data.messages[0]);
  }
}

import { stopSubmit } from 'redux-form';
import { put, select } from 'redux-saga/effects';
import { profileAPI } from '../../api/api';
import isRequestOK from '../../utils/requestChecker/isRequestOK';
import { setUserProfile, setUserStatus, changePhotoSuccess, getUserProfile } from './actions';

export function* workerGetUserProfile({ userUrlId }) {
  const data = yield profileAPI.getUserProfile(userUrlId);
  yield put(setUserProfile(data));
}

export function* workerGetUserStatus({ userUrlId }) {
  const data = yield profileAPI.getUserStatus(userUrlId);
  yield put(setUserStatus(data));
}

export function* workerUpdateUserStatus({ status }) {
  const { data } = yield profileAPI.updateUserStatus(status);

  if (isRequestOK(data.resultCode)) {
    yield put(setUserStatus(status));
  }
}

export function* workerChangePhoto({ photo }) {
  const { data } = yield profileAPI.changePhoto(photo);

  if (isRequestOK(data.resultCode)) {
    yield put(changePhotoSuccess(data.data.photos));
  }
}

export function* workerChangeInfo({ formData }) {
  const state = yield select();
  const userID = state.auth.id;
  const { data } = yield profileAPI.changeInfo(formData);

  if (isRequestOK(data.resultCode)) {
    yield put(getUserProfile(userID));
  } else {
    yield put(
      stopSubmit('profile-form', {
        _error: data.messages[0],
      })
    );
    yield Promise.reject(data.messages[0]);
  }
}

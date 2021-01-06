import { put, call } from 'redux-saga/effects';
import { getCaptchaUrl, getOwnProfile, setLogin, takeOwnAuth } from './actions';
import { authAPI, profileAPI } from '../../api/api';
import { stopSubmit } from 'redux-form';
import isRequestOK from '../../utils/requestChecker/isRequestOK';

export function* workerGetOwnProfile() {
  const { resultCode, data } = yield profileAPI.getOwnProfile();

  if (isRequestOK(resultCode)) {
    yield put(takeOwnAuth({ ...data, isAuth: true }));
  }
}

export function* workerSetLogin({ payload }) {
  const data = yield call(setLogin, payload);

  const { resultCode, messages } = yield authAPI.login(data.payload);

  if (isRequestOK(resultCode)) yield put(getOwnProfile());

  if (resultCode === 10) yield put(getCaptchaUrl());
  else {
    yield put(
      stopSubmit('login', {
        _error: messages[0] || 'Some Error',
      })
    );
  }
}

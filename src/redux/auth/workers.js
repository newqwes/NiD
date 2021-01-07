import { put, call } from 'redux-saga/effects';
import { loadCaptchaUrl, loadOwnProfile, loadLogin, setOwnAuth, setCaptcha } from '../actions';
import { authAPI, profileAPI, securityAPI } from '../../api/api';
import { stopSubmit } from 'redux-form';
import isRequestOK from '../../utils/requestChecker/isRequestOK';

export function* workerGetOwnProfile() {
  const { resultCode, data } = yield profileAPI.getOwnProfile();

  if (isRequestOK(resultCode)) {
    yield put(setOwnAuth({ ...data, isAuth: true }));
  }
}

export function* workerSetLogin({ payload }) {
  const data = yield call(loadLogin, payload);

  const { resultCode, messages } = yield call(authAPI.login, data.payload);

  if (isRequestOK(resultCode)) yield put(loadOwnProfile());

  if (resultCode === 10) yield put(loadCaptchaUrl());
  else {
    yield put(
      stopSubmit('login', {
        _error: messages[0] || 'Some Error',
      })
    );
  }
}

export function* workerSetCaptchaUrl() {
  const url = yield securityAPI.getCaptchaUrl();
  yield put(setCaptcha(url));
}

export function* workerLogout() {
  yield authAPI.logout();
  yield put(setOwnAuth());
}

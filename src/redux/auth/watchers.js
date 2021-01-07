import { takeEvery } from 'redux-saga/effects';
import { workerGetOwnProfile, workerSetLogin, workerSetCaptchaUrl, workerLogout } from './workers';
import { AUTHS } from '../constants';

export function* watcherAuth() {
  yield takeEvery(AUTHS.OWN_PROFILE, workerGetOwnProfile);
  yield takeEvery(AUTHS.LOGIN, workerSetLogin);
  yield takeEvery(AUTHS.CAPTCHA_URL, workerSetCaptchaUrl);
  yield takeEvery(AUTHS.LOGOUT, workerLogout);
}

import { takeEvery } from 'redux-saga/effects';
import { USERS } from '../constants';
import { workerGetAmountUsers, workerGetIsUploaded, workerGetIsAnsverGone } from './workers';

export function* watcherUsers() {
  // yield takeEvery(USERS.TOTAL_AMOUNT_USERS, workerGetAmountUsers);
  yield takeEvery(USERS.LOAD_USERS, workerGetAmountUsers);
  yield takeEvery(USERS.IS_UPLOADED, workerGetIsUploaded);
  yield takeEvery(USERS.IS_ANSVER_GONE, workerGetIsAnsverGone);
}

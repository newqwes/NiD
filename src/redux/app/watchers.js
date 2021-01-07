import { takeEvery } from 'redux-saga/effects';
import { APPS } from '../constants';
import { workerInitializeApp } from './workers';

export function* watcherApp() {
  yield takeEvery(APPS.INITIALIZED, workerInitializeApp);
}

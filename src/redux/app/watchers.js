import { takeEvery } from 'redux-saga/effects';
import { GET_INITIALIZED } from './types';
import { workerInitializeApp } from './workers';

export function* watcherInitializedSuccess() {
  yield takeEvery(GET_INITIALIZED, workerInitializeApp);
}

import { takeEvery } from 'redux-saga/effects';
import { GET_RATES } from './types';
import { workerGetRates } from './workers';

export function* watcherSidebar() {
  yield takeEvery(GET_RATES, workerGetRates);
}

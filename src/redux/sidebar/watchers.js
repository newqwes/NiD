import { takeEvery } from 'redux-saga/effects';
import { SIDEBARS } from '../constants';
import { workerGetRates } from './workers';

export function* watcherSidebar() {
  yield takeEvery(SIDEBARS.GET_RATES, workerGetRates);
}

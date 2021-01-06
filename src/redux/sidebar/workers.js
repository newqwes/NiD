import { put } from 'redux-saga/effects';
import { addNewExchangeRate } from './actions';
import { userAPI } from '../../api/api';

export function* workerGetRates() {
  const payload = yield userAPI.getRates();

  yield put(addNewExchangeRate(payload));
}

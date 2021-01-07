import { put, call } from 'redux-saga/effects';
import { setExchangeRate } from '../actions';
import { userAPI } from '../../api/api';

export function* workerGetRates() {
  const payload = yield call(userAPI.getRates);

  yield put(setExchangeRate(payload));
}

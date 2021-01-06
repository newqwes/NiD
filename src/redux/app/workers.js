import { put } from 'redux-saga/effects';
import { getOwnProfile } from '../auth/actions';
import { initializedSuccess } from './actions';

export function* workerInitializeApp() {
  const propmise = yield put(getOwnProfile());
  // FIXME: 
  yield Promise.all([propmise]);
  yield put(initializedSuccess());
}

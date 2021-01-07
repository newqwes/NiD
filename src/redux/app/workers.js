import { put } from 'redux-saga/effects';
import { setInitialized, loadOwnProfile } from '../actions';

export function* workerInitializeApp() {
  const propmise = yield put(loadOwnProfile());
  // FIXME:
  yield Promise.all([propmise]);
  yield put(setInitialized());
}

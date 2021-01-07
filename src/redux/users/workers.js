import { put, call } from 'redux-saga/effects';
import { userAPI } from '../../api/api';
import isRequestOK from '../../utils/requestChecker/isRequestOK';
import {
  isUploadedDis,
  setUsers,
  setAmountUsers,
  isAnsverGoneAC,
  subscribe,
  unsubscribe,
} from '../actions';

export function* workerGetAmountUsers({ payload }) {
  yield put(isUploadedDis(false));
  const data = yield call(userAPI.getUsers, payload);
  console.log(data);
  // yield put(setUsers(data.items));
  // yield put(setAmountUsers(data.totalCount));
  // yield put(isUploadedDis(true));
}

export function* workerGetIsUploaded({ id }) {
  yield put(isAnsverGoneAC(true, id));
  const data = yield call([userAPI, userAPI.postUserFollow], id);

  if (isRequestOK(data.resultCode)) {
    yield put(subscribe(id));
  }
  yield put(isAnsverGoneAC(false, id));
}

export function* workerGetIsAnsverGone({ id }) {
  yield put(isAnsverGoneAC(true, id));
  const data = yield call([userAPI, userAPI.deleteUserFollow], id);

  if (isRequestOK(data.resultCode)) {
    yield put(unsubscribe(id));
  }
  yield put(isAnsverGoneAC(false, id));
}

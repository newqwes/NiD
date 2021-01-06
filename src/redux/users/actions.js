import { userAPI } from '../../api/api';
import {
  IS_ANSVER_GONE,
  IS_UPLOADED,
  SET_USERS,
  SET_USERS_PAGE,
  SUBSCRIBE,
  TOTAL_AMOUNT_USERS,
  UNSUBSCRIBE,
} from './types';

export const subscribe = (id) => ({ type: SUBSCRIBE, id });
export const unsubscribe = (id) => ({ type: UNSUBSCRIBE, id });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setAmountUsers = (count) => ({ type: TOTAL_AMOUNT_USERS, count });

export const setUsersPage = (pageNumber) => ({
  type: SET_USERS_PAGE,
  pageNumber,
});

export const isUploadedDis = (isUploadedValue) => ({
  type: IS_UPLOADED,
  isUploadedValue,
});

export const isAnsverGoneAC = (booleanValue, id) => ({
  type: IS_ANSVER_GONE,
  booleanValue,
  id,
});

export const getUsers = (usersOnPage, currentPageUsers) => async (dispatch) => {
  dispatch(isUploadedDis(false));
  const data = await userAPI.getUsers(usersOnPage, currentPageUsers);
  dispatch(setUsers(data.items));
  dispatch(setAmountUsers(data.totalCount));
  dispatch(isUploadedDis(true));
};

export const follow = (id) => async (dispatch) => {
  dispatch(isAnsverGoneAC(true, id));
  const data = await userAPI.postUserFollow(id);

  if (data.resultCode === 0) {
    dispatch(subscribe(id));
  }

  dispatch(isAnsverGoneAC(false, id));
};

export const unfollow = (id) => async (dispatch) => {
  dispatch(isAnsverGoneAC(true, id));
  const data = await userAPI.deleteUserFollow(id);

  if (data.resultCode === 0) {
    dispatch(unsubscribe(id));
  }
  
  dispatch(isAnsverGoneAC(false, id));
};

import {
  TAKE_OWN_AUTH,
  INITIALIZED_SUCCESS,
  GET_CAPTCHA,
  ADD_NEW_MESSAGE,
  ADD_NEW_POST,
  SET_USER_STATUS,
  SET_USER_PROFILE,
  CHANGE_PHOTO_SUCCESS,
  SUBSCRIBE,
  UNSUBSCRIBE,
  SET_USERS,
  TOTAL_AMOUNT_USERS,
  SET_USERS_PAGE,
  IS_UPLOADED,
  IS_ANSVER_GONE,
} from '../actions';

export const takeOwnAuth = payload => ({
  type: TAKE_OWN_AUTH,
  payload,
});

export const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});

export const getCaptcha = payload => ({
  type: GET_CAPTCHA,
  payload,
});

export const addNewMessageText = (id, value) => ({
  type: ADD_NEW_MESSAGE,
  id,
  value,
});

export const addPost = postTextarea => ({
  type: ADD_NEW_POST,
  postTextarea,
});

export const setUserStatus = status => ({
  type: SET_USER_STATUS,
  status,
});

export const setUserProfile = userProfile => ({
  type: SET_USER_PROFILE,
  userProfile,
});

export const changePhotoSuccess = photos => ({
  type: CHANGE_PHOTO_SUCCESS,
  photos,
});

export const subscribe = id => ({ type: SUBSCRIBE, id });

export const unsubscribe = id => ({ type: UNSUBSCRIBE, id });

export const setUsers = users => ({ type: SET_USERS, users });

export const setAmountUsers = count => ({ type: TOTAL_AMOUNT_USERS, count });

export const setUsersPage = pageNumber => ({
  type: SET_USERS_PAGE,
  pageNumber,
});

export const isUploadedDis = isUploadedValue => ({
  type: IS_UPLOADED,
  isUploadedValue,
});

export const isAnsverGoneAC = (booleanValue, id) => ({
  type: IS_ANSVER_GONE,
  booleanValue,
  id,
});

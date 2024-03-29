import { stopSubmit } from 'redux-form';

import { isTen, isZero } from '../utils';

import { authAPI, profileAPI, securityAPI, userAPI } from '../api';
import {
  addNewExchangeRate,
  getCaptcha,
  initializedSuccess,
  isAnsverGoneAC,
  isUploadedDis,
  setAmountUsers,
  setUsers,
  subscribe,
  takeOwnAuth,
  unsubscribe,
  changePhotoSuccess,
  setUserProfile,
  setUserStatus,
} from '../actionCreators';

export const getUserProfile = userUrlId => async dispatch => {
  const data = await profileAPI.getUserProfile(userUrlId);

  dispatch(setUserProfile(data));
};

export const getUserStatus = userUrlId => async dispatch => {
  const data = await profileAPI.getUserStatus(userUrlId);

  dispatch(setUserStatus(data));
};

export const updateUserStatus = status => async dispatch => {
  const { resultCode } = await profileAPI.updateUserStatus(status);

  if (isZero(resultCode)) {
    dispatch(setUserStatus(status));
  }
};

export const changePhoto = photo => async dispatch => {
  const {
    resultCode,
    data: { photos },
  } = await profileAPI.changePhoto(photo);

  if (isZero(resultCode)) {
    dispatch(changePhotoSuccess(photos));
  }
};

export const changeInfo = formData => async (dispatch, getState) => {
  const userID = getState().auth.id;

  const { resultCode, messages } = await profileAPI.changeInfo(formData);

  if (isZero(resultCode)) {
    dispatch(getUserProfile(userID));
  } else {
    dispatch(
      stopSubmit('profile-form', {
        _error: messages[0],
      }),
    );

    return Promise.reject(messages[0]);
  }
};

export const initializeApp = () => dispatch => {
  const propmise = dispatch(getOwnProfile());

  Promise.all([propmise]).then(() => {
    dispatch(initializedSuccess());
  });
};

export const getOwnProfile = () => async dispatch => {
  const { resultCode, data } = await profileAPI.getOwnProfile();

  if (isZero(resultCode)) {
    dispatch(takeOwnAuth({ ...data, isAuth: true }));
  }
};

export const getCaptchaUrl = () => async dispatch => {
  const { url } = await securityAPI.getCaptchaUrl();

  dispatch(getCaptcha(url));
};

export const login = (email, password, rememberMe, captcha) => async dispatch => {
  const { resultCode, messages } = await authAPI.login(email, password, rememberMe, captcha);

  if (isZero(resultCode)) dispatch(getOwnProfile());

  if (isTen(resultCode)) dispatch(getCaptchaUrl());
  else {
    dispatch(
      stopSubmit('login', {
        _error: messages[0] || 'Some Error',
      }),
    );
  }
};

export const logout = () => async dispatch => {
  const { resultCode } = await authAPI.logout();

  if (isZero(resultCode)) {
    dispatch(takeOwnAuth({ email: null, id: null, isAuth: false, login: null }));
  }
};

export const getRates = () => async dispatch => {
  const rate = await userAPI.getRates();

  dispatch(addNewExchangeRate(rate));
};

export const getUsers = (usersOnPage, currentPageUsers) => async dispatch => {
  dispatch(isUploadedDis(false));

  const { items, totalCount } = await userAPI.getUsers(usersOnPage, currentPageUsers);

  dispatch(setUsers(items));
  dispatch(setAmountUsers(totalCount));

  dispatch(isUploadedDis(true));
};

export const follow = id => async dispatch => {
  dispatch(isAnsverGoneAC(true, id));

  const { resultCode } = await userAPI.postUserFollow(id);

  if (isZero(resultCode)) {
    dispatch(subscribe(id));
  }

  dispatch(isAnsverGoneAC(false, id));
};

export const unfollow = id => async dispatch => {
  dispatch(isAnsverGoneAC(true, id));

  const { resultCode } = await userAPI.deleteUserFollow(id);

  if (isZero(resultCode)) {
    dispatch(unsubscribe(id));
  }

  dispatch(isAnsverGoneAC(false, id));
};

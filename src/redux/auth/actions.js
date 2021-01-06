import { authAPI, securityAPI } from '../../api/api';
import isRequestOK from '../../utils/requestChecker/isRequestOK';
import { GET_CAPTCHA, SET_LOGIN, TAKE_OWN_AUTH, GET_OWN_PROFILE } from './types';

export const takeOwnAuth = (payload) => ({
  type: TAKE_OWN_AUTH,
  payload,
});

const getCaptcha = (payload) => ({
  type: GET_CAPTCHA,
  payload,
});

export const getOwnProfile = () => ({
  type: GET_OWN_PROFILE,
});

export const setLogin = (payload) => ({
  type: SET_LOGIN,
  payload,
});

// __________

export const logout = () => async (dispatch) => {
  const { resultCode } = await authAPI.logout();

  if (isRequestOK(resultCode)) {
    dispatch(takeOwnAuth(false));
  }
};

export const getCaptchaUrl = () => async (dispatch) => {
  const captchaUrl = await securityAPI.getCaptchaUrl();
  dispatch(getCaptcha(captchaUrl));
};

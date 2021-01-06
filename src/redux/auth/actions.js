import {
  GET_CAPTCHA,
  SET_LOGIN,
  TAKE_OWN_AUTH,
  GET_OWN_PROFILE,
  GET_LOGOUT,
  GET_CAPTCHA_URL,
} from './types';

export const takeOwnAuth = (payload) => ({
  type: TAKE_OWN_AUTH,
  payload,
});

export const getCaptcha = (payload) => ({
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

export const getLogout = () => ({
  type: GET_LOGOUT,
});

export const getCaptchaUrl = () => ({
  type: GET_CAPTCHA_URL,
});

import { stopSubmit } from 'redux-form';
import { profileAPI, authAPI, securityAPI } from '../api/api';

const TAKE_OWN_AUTH = 'TAKE_USER_AUTH';
const GET_CAPTCHA = 'GET_CAPTCHA';

const isRequestOK = (result) => result === 0;

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case TAKE_OWN_AUTH:
      return action.payload
        ? {
            ...state,
            ...action.payload,
          }
        : {
            ...initialState,
          };
    case GET_CAPTCHA:
      return action.payload
        ? {
            ...state,
            captchaUrl: action.payload,
          }
        : {
            ...initialState,
          };

    default:
      return state;
  }
};

const takeOwnAuth = (payload) => ({
  type: TAKE_OWN_AUTH,
  payload,
});

const getCaptcha = (payload) => ({
  type: GET_CAPTCHA,
  payload,
});

export const getOwnProfile = () => async (dispatch) => {
  const { resultCode, data } = await profileAPI.getOwnProfile();

  if (isRequestOK(resultCode)) {
    dispatch(takeOwnAuth({ ...data, isAuth: true }));
  }
};

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  const { resultCode, messages } = await authAPI.login(email, password, rememberMe, captcha);

  if (isRequestOK(resultCode)) dispatch(getOwnProfile(resultCode));

  if (resultCode === 10) dispatch(getCaptchaUrl());
  else {
    dispatch(
      stopSubmit('login', {
        _error: messages[0] || 'Some Error',
      })
    );
  }
};

export const logout = () => async (dispatch) => {
  const { resultCode } = await authAPI.logout();

  if (isRequestOK(resultCode)) {
    dispatch(takeOwnAuth(false));
  }
};

export const getCaptchaUrl = () => async (dispatch) => {
  const captchaUrl = await securityAPI.getCaptchaUrl();
  console.log(captchaUrl);
  dispatch(getCaptcha(captchaUrl));
};

export default authReducer;

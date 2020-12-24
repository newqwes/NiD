import { stopSubmit } from 'redux-form';
import { profileAPI, authAPI } from '../api/api';

const TAKE_OWN_AUTH = 'TAKE_USER_AUTH';

const isRequestOK = (result) => result === 0;

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
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

    default:
      return state;
  }
};

const takeOwnAuth = (payload) => ({
  type: TAKE_OWN_AUTH,
  payload,
});

export const getOwnProfile = () => async (dispatch) => {
  let { resultCode, data } = await profileAPI.getOwnProfile();

  if (isRequestOK(resultCode)) {
    dispatch(takeOwnAuth({ ...data, isAuth: true }));
  }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
  let { resultCode, messages } = await authAPI.login(email, password, rememberMe);

  if (isRequestOK(resultCode)) {
    dispatch(getOwnProfile(resultCode));
  } else {
    dispatch(
      stopSubmit('login', {
        _error: messages[0] || 'Some Error',
      })
    );
  }
};

export const logout = () => async (dispatch) => {
  let { resultCode } = await authAPI.logout();

  if (isRequestOK(resultCode)) {
    dispatch(takeOwnAuth(false));
  }
};

export default authReducer;

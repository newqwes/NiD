import { stopSubmit } from 'redux-form';
import { profileAPI, authAPI, securityAPI } from '../api/api';

const TAKE_OWN_AUTH = 'TAKE_USER_AUTH';
const GET_CAPTCHA = 'GET_CAPTCHA';

const isRequestOK = (result: number): boolean => result === 0;

const initialState = {
  id: null as number | null,
  email: null as string | null,
  login: null as string | null,
  captchaUrl: null as string | null,
  isAuth: false,
};

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): InitialStateType => {
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

type TakeOwnAuthPayloadType = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};

type TakeOwnAuthActionType = {
  type: typeof TAKE_OWN_AUTH;
  payload: TakeOwnAuthPayloadType;
};

const takeOwnAuth = (payload: TakeOwnAuthPayloadType): TakeOwnAuthActionType => ({
  type: TAKE_OWN_AUTH,
  payload,
});

type GetCaptchaActionType = {
  type: typeof GET_CAPTCHA;
  payload: string;
};

const getCaptcha = (payload: string): GetCaptchaActionType => ({
  type: GET_CAPTCHA,
  payload,
});

export const getOwnProfile = () => async (dispatch: any) => {
  const { resultCode, data }: any = await profileAPI.getOwnProfile();

  if (isRequestOK(resultCode)) {
    dispatch(takeOwnAuth({ ...data, isAuth: true }));
  }
};

export const getCaptchaUrl = () => async (dispatch: any) => {
  const { url }: any = await securityAPI.getCaptchaUrl();

  dispatch(getCaptcha(url));
};

export const login =
  (email: string, password: string, rememberMe: boolean, captcha: any) => async (dispatch: any) => {
    const { resultCode, messages }: any = await authAPI.login(email, password, rememberMe, captcha);

    if (isRequestOK(resultCode)) dispatch(getOwnProfile());

    if (resultCode === 10) dispatch(getCaptchaUrl());
    else {
      dispatch(
        stopSubmit('login', {
          _error: messages[0] || 'Some Error',
        }),
      );
    }
  };

export const logout = () => async (dispatch: any) => {
  const { resultCode }: any = await authAPI.logout();

  if (isRequestOK(resultCode)) {
    dispatch(takeOwnAuth({ email: null, id: null, isAuth: false, login: null }));
  }
};

export default authReducer;

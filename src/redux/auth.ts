import { TAKE_OWN_AUTH, GET_CAPTCHA } from '../actions';

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

export default authReducer;

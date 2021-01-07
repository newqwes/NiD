import { AUTHS } from '../constants';
import initialState from './initialState';

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHS.OWN_AUTH_SUCCESS:
      return action.payload
        ? {
            ...state,
            ...action.payload,
          }
        : {
            ...initialState,
          };
    case AUTHS.CAPTCHA_SUCCESS:
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

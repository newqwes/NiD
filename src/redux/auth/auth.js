import { GET_CAPTCHA, TAKE_OWN_AUTH } from './types';
import initialState from './initialState';

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

export default authReducer;

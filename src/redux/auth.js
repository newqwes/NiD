import { profileAPI, authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const TAKE_OWN_AUTH = "TAKE_USER_AUTH";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case TAKE_OWN_AUTH:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

const takeOwnAuth = (id, email, login, isAuth) => ({
  type: TAKE_OWN_AUTH,
  payload: { id, email, login, isAuth },
});

export const getOwnProfile = () => (dispatch) => {
  profileAPI.getOwnProfile().then((data) => {
    if (data.resultCode === 0) {
      let { id, email, login } = data.data;
      dispatch(takeOwnAuth(id, email, login, true));
    }
  });
};
export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then((data) => {
    if (data.resultCode === 0) {
      dispatch(getOwnProfile());
    } else {
      dispatch(
        stopSubmit("login", {
          _error: data.messages[0] || "Some Error",
        })
      );
    }
  });
};
export const logout = () => (dispatch) => {
  authAPI.logout().then((data) => {
    if (data.resultCode === 0) {
      dispatch(takeOwnAuth(null, null, null, false));
    }
  });
};
export default authReducer;

import { APPS, AUTHS, DIALOGS, PROFILES, SIDEBARS, USERS } from '../constants';

// to worker/reducer (set) SUCCESS
export const setInitialized = () => ({
  type: APPS.INITIALIZED_SUCCESS,
});

export const setOwnAuth = (payload) => ({
  type: AUTHS.OWN_AUTH_SUCCESS,
  payload,
});

export const setCaptcha = (payload) => ({
  type: AUTHS.CAPTCHA_SUCCESS,
  payload,
});

export const updateUserStatus = (status) => ({
  type: PROFILES.UPDATE_USER_STATUS,
  status,
});

export const setUserProfile = (userProfile) => ({
  type: PROFILES.SET_USER_PROFILE_SUCCESS,
  userProfile,
});

export const setUserStatus = (status) => ({
  type: PROFILES.SET_USER_STATUS_SUCCESS,
  status,
});

export const updatePhotoSuccess = (photos) => ({
  type: PROFILES.UPDATE_PHOTO_SUCCESS,
  photos,
});

export const setPost = (postTextarea) => ({
  type: PROFILES.SET_NEW_POST_SUCCESS,
  postTextarea,
});

export const setExchangeRate = (payload) => ({
  type: SIDEBARS.SET_EXCHANGE_RATE_SUCCESS,
  payload,
});

export const subscribe = (id) => ({ type: USERS.SUBSCRIBE_SUCCESS, id });

export const unsubscribe = (id) => ({ type: USERS.UNSUBSCRIBE_SUCCESS, id });

export const setUsers = (users) => ({ type: USERS.SET_USERS_SUCCESS, users });

export const setUsersPage = (pageNumber) => ({
  type: USERS.SET_USERS_PAGE_SUCCESS,
  pageNumber,
});

// to watcher/component (load) SIMPLE
export const loadInitializedApp = () => ({
  type: APPS.INITIALIZED,
});

export const loadOwnProfile = () => ({
  type: AUTHS.OWN_PROFILE,
});

export const loadLogin = (payload) => ({
  type: AUTHS.LOGIN,
  payload,
});

export const loadLogout = () => ({
  type: AUTHS.LOGOUT,
});

export const loadCaptchaUrl = () => ({
  type: AUTHS.CAPTCHA_URL,
});

export const loadNewMessageText = (id, value) => ({
  type: DIALOGS.MESSAGE,
  id,
  value,
});

export const loadUserProfile = (userUrlId) => ({
  type: PROFILES.GET_USER_PROFILE,
  userUrlId,
});

export const loadUserStatus = (userUrlId) => ({
  type: PROFILES.GET_USER_STATUS,
  userUrlId,
});

export const updatePhoto = (photo) => ({
  type: PROFILES.UPDATE_PHOTO,
  photo,
});

export const updateInfo = (formData) => ({
  type: PROFILES.UPDATE_INFO,
  formData,
});

export const loadRates = () => ({ type: SIDEBARS.GET_RATES });

export const loadUsers = (payload) => ({
  type: USERS.LOAD_USERS,
  payload,
});

export const loadFollow = (id) => ({
  type: USERS.LOAD_FOLLOW,
  id,
});

export const loadUnfollow = (id) => ({
  type: USERS.LOAD_UNFOLLOW,
  id,
});

export const setAmountUsers = (count) => ({ type: USERS.TOTAL_AMOUNT_USERS, count });

export const isUploadedDis = (isUploadedValue) => ({
  type: USERS.IS_UPLOADED,
  isUploadedValue,
});

export const isAnsverGoneAC = (booleanValue, id) => ({
  type: USERS.IS_ANSVER_GONE,
  booleanValue,
  id,
});

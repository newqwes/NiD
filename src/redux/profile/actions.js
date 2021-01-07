import {
  ADD_NEW_POST,
  CHANGE_PHOTO_SUCCESS,
  SET_USER_PROFILE,
  SET_USER_STATUS,
  GET_USER_PROFILE,
  GET_USER_STATUS,
  UPDATE_USER_STATUS,
  CHANGE_PHOTO,
  CHANGE_INFO,
} from './types';

// For Watchers
export const getUserProfile = (userUrlId) => ({
  type: GET_USER_PROFILE,
  userUrlId,
});

export const getUserStatus = (userUrlId) => ({
  type: GET_USER_STATUS,
  userUrlId,
});

export const changePhoto = (photo) => ({
  type: CHANGE_PHOTO,
  photo,
});

export const changeInfo = (formData) => ({
  type: CHANGE_INFO,
  formData,
});

// For Workers
export const updateUserStatus = (status) => ({
  type: UPDATE_USER_STATUS,
  status,
});

export const setUserProfile = (userProfile) => ({
  type: SET_USER_PROFILE,
  userProfile,
});

export const setUserStatus = (status) => ({
  type: SET_USER_STATUS,
  status,
});

export const changePhotoSuccess = (photos) => ({
  type: CHANGE_PHOTO_SUCCESS,
  photos,
});

export const addPost = (postTextarea) => ({
  type: ADD_NEW_POST,
  postTextarea,
});

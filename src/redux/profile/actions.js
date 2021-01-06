import { ADD_NEW_POST, CHANGE_PHOTO_SUCCESS, SET_USER_PROFILE, SET_USER_STATUS } from './types';
import { profileAPI } from '../../api/api';
import { stopSubmit } from 'redux-form';

export const addPost = (postTextarea) => ({
  type: ADD_NEW_POST,
  postTextarea,
});

const setUserStatus = (status) => ({
  type: SET_USER_STATUS,
  status,
});

export const setUserProfile = (userProfile) => ({
  type: SET_USER_PROFILE,
  userProfile,
});

const changePhotoSuccess = (photos) => ({
  type: CHANGE_PHOTO_SUCCESS,
  photos,
});

export const getUserProfile = (userUrlId) => async (dispatch) => {
  const data = await profileAPI.getUserProfile(userUrlId);
  dispatch(setUserProfile(data));
};

export const getUserStatus = (userUrlId) => async (dispatch) => {
  const data = await profileAPI.getUserStatus(userUrlId);
  dispatch(setUserStatus(data));
};

export const updateUserStatus = (status) => async (dispatch) => {
  const respons = await profileAPI.updateUserStatus(status);
  
  if (respons.data.resultCode === 0) {
    dispatch(setUserStatus(status));
  }
};

export const changePhoto = (photo) => async (dispatch) => {
  const respons = await profileAPI.changePhoto(photo);

  if (respons.data.resultCode === 0) {
    dispatch(changePhotoSuccess(respons.data.data.photos));
  }
};

export const changeInfo = (formData) => async (dispatch, getState) => {
  const userID = getState().auth.id;
  const respons = await profileAPI.changeInfo(formData);

  if (respons.data.resultCode === 0) {
    dispatch(getUserProfile(userID));
  } else {
    dispatch(
      stopSubmit('profile-form', {
        _error: respons.data.messages[0],
      })
    );
    return Promise.reject(respons.data.messages[0]);
  }
};

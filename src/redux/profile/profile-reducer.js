import { ADD_NEW_POST, CHANGE_PHOTO_SUCCESS, SET_USER_PROFILE, SET_USER_STATUS } from './types';
import initialState from './initialState';

const profilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_POST: {
      const date = new Date();
      const options = {
        month: 'long',
        day: 'numeric',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
      };
      const idNumberAdd = state.postData[2].id + 1;
      const postItem = {
        id: idNumberAdd,
        avatar: state.ownInformation.avatar,
        name: state.ownInformation.name,
        dateTime: date.toLocaleString('ru', options),
        postText: action.postTextarea,
      };

      return {
        ...state,
        postData: [postItem, ...state.postData],
      };
    }
    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.userProfile,
      };
    case SET_USER_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case CHANGE_PHOTO_SUCCESS:
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          photos: action.photos,
        },
      };

    default:
      return state;
  }
};

export default profilePageReducer;

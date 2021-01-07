import { PROFILES } from '../constants';
import initialState from './initialState';

const profilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILES.SET_NEW_POST_SUCCESS: {
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
    case PROFILES.SET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        userProfile: action.userProfile,
      };
    case PROFILES.SET_USER_STATUS_SUCCESS:
      return {
        ...state,
        status: action.status,
      };
    case PROFILES.UPDATE_PHOTO_SUCCESS:
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

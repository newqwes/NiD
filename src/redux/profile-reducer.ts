import { ADD_NEW_POST, CHANGE_PHOTO_SUCCESS, SET_USER_PROFILE, SET_USER_STATUS } from '../actions';

type PostType = {
  id: number;
  dateTime: string;
  avatar: string;
  name: string;
  postText: string;
};

type ContactsType = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};

type PhotosType = {
  small: null | string;
  large: null | string;
};

type ProfileType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  postText: string;
  contacts: ContactsType;
  photos: PhotosType;
};

const inicialState = {
  postData: [
    {
      id: 0,
      dateTime: '16 июня, 09:32',
      avatar: 'https://cdn.iconscout.com/icon/free/png-64/avatar-373-456325.png',
      name: 'Аня',
      postText: 'Привет',
    },
    {
      id: 1,
      dateTime: '19 июня, 10:54',
      avatar: 'https://cdn3.iconfinder.com/data/icons/avatars-flat/33/woman_9-512.png',
      name: 'Майя',
      postText: 'Привет это Майя',
    },
    {
      id: 2,
      dateTime: '04 сентябрь, 21:04',
      avatar: 'https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png',
      name: 'Назар',
      postText: 'Дата последнего обновления, время поста!',
    },
  ] as Array<PostType>,
  ownInformation: {
    name: 'Назар',
    avatar: 'https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png',
  },
  userProfile: null as ProfileType | null,
  status: '',
};

export type InicialStateType = typeof inicialState;

const profilePageReducer = (state = inicialState, action: any): InicialStateType => {
  switch (action.type) {
    case ADD_NEW_POST: {
      const date = new Date();

      const options = {
        month: 'long' as 'long',
        day: 'numeric' as 'numeric',
        timeZone: 'UTC' as 'UTC',
        hour: 'numeric' as 'numeric',
        minute: 'numeric' as 'numeric',
      };

      // меняю id по мере их добавления временно можно удалить и поставить статичный id: 3
      const idNumberAdd = state.postData[2].id + 1;

      let postItem = {
        id: idNumberAdd,
        avatar: state.ownInformation.avatar,
        name: `${state.ownInformation.name}`,
        dateTime: `${date.toLocaleString('ru', options)}`,
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
        } as any,
      };

    default:
      return state;
  }
};

export default profilePageReducer;

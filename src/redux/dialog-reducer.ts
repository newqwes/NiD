const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

let initialState = {
  dialogData: [
    {
      id: 0,
      name: 'Аня',
      nameOwn: 'Назар',
      avatarOwn: 'https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png',
      avatar: 'https://cdn.iconscout.com/icon/free/png-64/avatar-373-456325.png',
      url: '/Dialogs/Anna',
      message: {
        textEnemy: 'Привет, я Аня как дела?',
        textOwn: ['Нормально, твои как?'],
      },
    },
    {
      id: 1,
      name: 'Майя',
      nameOwn: 'Назар',
      avatarOwn: 'https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png',
      avatar: 'https://cdn3.iconfinder.com/data/icons/avatars-flat/33/woman_9-512.png',
      url: '/Dialogs/Maya',
      message: {
        textEnemy: 'Привет, я Майя как дела?',
        textOwn: ['Привет тетя, нормально, твои как?'],
      },
    },
    {
      id: 2,
      name: 'Азим',
      nameOwn: 'Назар',
      avatarOwn: 'https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png',
      avatar: 'https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png',
      url: '/Dialogs/Azim',
      message: {
        textEnemy: 'Привет, я Азимыч как дела?',
        textOwn: ['Привет бро, нормально, твои как?'],
      },
    },
    {
      id: 3,
      name: 'Бабуля',
      nameOwn: 'Назар',
      avatarOwn: 'https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png',
      avatar:
        'https://img.favpng.com/10/23/1/computer-icons-user-profile-avatar-png-favpng-ypy9BWih5X28x0zDEBeemwyx8.jpg',
      url: '/Dialogs/Grandmather',
      message: {
        textEnemy: 'Привет, я Катя как дела?',
        textOwn: ['Привет бабуль, нормально, твои как?'],
      },
    },
    {
      id: 4,
      name: 'Назар',
      nameOwn: 'Назар',
      avatarOwn: 'https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png',
      avatar: 'https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png',
      url: '/Dialogs/Nazar',
      message: {
        textEnemy: 'Привет, я',
        textOwn: ['Привет!'],
      },
    },
  ],
};

export type InitialStateType = typeof initialState;

const dialogPageReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case ADD_NEW_MESSAGE:
      return {
        ...state,
        dialogData: state.dialogData.map(n => {
          if (action.id === n.id)
            return {
              ...n,
              message: {
                ...n.message,
                textOwn: [...n.message.textOwn, action.value],
              },
            };
          return n;
        }),
      };

    default:
      return state;
  }
};

type AddNewMessageTextActionType = {
  type: typeof ADD_NEW_MESSAGE;
  id: number;
  value: string;
};

export const addNewMessageText = (id: number, value: string): AddNewMessageTextActionType => ({
  type: ADD_NEW_MESSAGE,
  id,
  value,
});

export default dialogPageReducer;

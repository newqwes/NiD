const initialState = {
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
  ],
  ownInformation: {
    name: 'Назар',
    avatar: 'https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png',
  },
  userProfile: null,
  status: '',
};

export default initialState;

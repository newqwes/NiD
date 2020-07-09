

let inicialState = {
    usersData: [
        {id : 0, fullName: 'Анна', status: 'Профессионально занимаюсь маникюром', avatarUrl: 'https://cdn.iconscout.com/icon/free/png-64/avatar-373-456325.png', 
        location: {country: 'Белерусь', city: 'Гродно'}, isSigned: false},
        {id : 1, fullName: 'Майя', status: 'Домашние задания', avatarUrl: 'https://cdn3.iconfinder.com/data/icons/avatars-flat/33/woman_9-512.png', 
        location: {country: 'Туркменистан', city: 'Ашхабад'}, isSigned: true},
        {id : 2, fullName: 'Азим', status: 'Учусь в школе', avatarUrl: 'https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png', 
        location: {country: 'Туркменистан', city: 'Ашхабад'}, isSigned: false}
    ]
}

const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_TIME: return {  };
        case ADD_EXCHANGE_RATE: {
            return { }
        }
        default: return state
    }
}

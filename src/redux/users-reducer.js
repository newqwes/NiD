
const SUBSCRIBE = "SUBSCRIBE";
const UNSUBSCRIBE = "UNSUBSCRIBE";

let initialState = {
    usersData: [
        {
            id: 0, fullName: 'Анна', status: 'Профессионально занимаюсь маникюром', avatarUrl: 'https://cdn.iconscout.com/icon/free/png-64/avatar-373-456325.png',
            location: { country: 'Белерусь', city: 'Гродно' }, isSubscribe: false
        },
        {
            id: 1, fullName: 'Майя', status: 'Домашние задания', avatarUrl: 'https://cdn3.iconfinder.com/data/icons/avatars-flat/33/woman_9-512.png',
            location: { country: 'Туркменистан', city: 'Ашхабад' }, isSubscribe: true
        },
        {
            id: 2, fullName: 'Азим', status: 'Учусь в школе', avatarUrl: 'https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png',
            location: { country: 'Туркменистан', city: 'Ашхабад' }, isSubscribe: false
        }
    ]
}

const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBSCRIBE: return {
            ...state,
            usersData: state.usersData.map(n => {
                if (n.id === action.id) return { ...n, isSubscribe: true }
                return n;
            })
        }
        case UNSUBSCRIBE: return {
            ...state,
            usersData: state.usersData.map(n => {
                if (n.id === action.id) return { ...n, isSubscribe: false }
                return n;
            })
        }

        default: return state
    }
}

export const subscribeAC = id => ({ type: SUBSCRIBE, id });
export const unsubscribeAC = id => ({ type: UNSUBSCRIBE, id });
export default usersPageReducer;



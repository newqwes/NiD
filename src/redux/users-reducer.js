
const SUBSCRIBE = "SUBSCRIBE";
const UNSUBSCRIBE = "UNSUBSCRIBE";
const SET_USERS = "SET-USERS";

let initialState = {
    usersData: []
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
        case SET_USERS: return {
            ...state,
            usersData: [...state.usersData, ...action.users]
        }

        default: return state
    }
}

export const subscribeAC = id => ({ type: SUBSCRIBE, id });
export const unsubscribeAC = id => ({ type: UNSUBSCRIBE, id });
export const setUsersAC = users => ({ type: SET_USERS, users });
export default usersPageReducer;



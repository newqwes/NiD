
const SUBSCRIBE = "SUBSCRIBE";
const UNSUBSCRIBE = "UNSUBSCRIBE";
const SET_USERS = "SET-USERS";
const TOTAL_AMOUNT_USERS = "TOTAL_AMOUNT_USERS";
const SET_USERS_PAGE = "SET_USERS_PAGE";

let initialState = {
    usersData: [],
    totalAmountUsers: 0,
    usersOnPage: 6,
    currentPageUsers: 1
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
            usersData: action.users
        }
        case TOTAL_AMOUNT_USERS: return {
            ...state,
            totalAmountUsers: action.count
        }
        case SET_USERS_PAGE: return {
            ...state,
            currentPageUsers: action.pageNumber
        }
        default: return state
    }
}

export const subscribeAC = id => ({ type: SUBSCRIBE, id });
export const unsubscribeAC = id => ({ type: UNSUBSCRIBE, id });
export const setUsersAC = users => ({ type: SET_USERS, users });
export const totalAmountUsersAC = count => ({ type: TOTAL_AMOUNT_USERS, count });
export const setUsersPageAC = pageNumber => ({ type: SET_USERS_PAGE, pageNumber });
export default usersPageReducer;



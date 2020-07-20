import { userAPI } from "../api/api";

const ADD_NEW_TIME = "ADD-NEW-TIME";
const ADD_EXCHANGE_RATE = "ADD-EXCHANGE-RATE";

let initialState = {
    menuItemData: [
        { id: 0, value: "Мой профиль", linkUrl: "/Profile" },
        { id: 1, value: "Сообщения", linkUrl: "/Dialogs" },
        { id: 2, value: "Пользователи", linkUrl: "/Users" }
    ],
    whatTimeNow: '00:00:00',
    exchangeRate: null
}

const sidebarPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_TIME: return { ...state, whatTimeNow: new Date().toLocaleTimeString() };
        case ADD_EXCHANGE_RATE: {
            return { ...state, exchangeRate: action.rate }
        }
        default: return state
    }
}

export const addNewTime = () => ({ type: ADD_NEW_TIME });
const addNewExchangeRate = (rate) => ({ type: ADD_EXCHANGE_RATE, rate });

export const getRates = () => (dispatch) => {
    userAPI.getRates().then(rate => {
        dispatch(addNewExchangeRate(rate));
    })
}

export default sidebarPageReducer;
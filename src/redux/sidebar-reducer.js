const ADD_NEW_TIME = "ADD-NEW-TIME";
const ADD_EXCHANGE_RATE = "ADD-EXCHANGE-RATE";
let initialState = {
    menuItemData: [
        { value: "Новости", linkUrl: "/News" },
        { value: "Сообщения", linkUrl: "/Dialogs" },
        { value: "Чат", linkUrl: "/Chat" }
    ],
    whatTimeNow: "",
    exchangeRate: ""
}
const sidebarPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_TIME: return { ...state, whatTimeNow: new Date().toLocaleTimeString() };
        case ADD_EXCHANGE_RATE: {
            //-------------------------- получение курса доллара -----------------------
            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://www.nbrb.by/api/exrates/rates/145', false); //курс доллара к рублю нацбанк
            xhr.send();
            let bankData = JSON.parse(xhr.response);
            let USD_BYR = bankData.Cur_OfficialRate
            // ------------------------------------------------------------------------
            return { ...state, exchangeRate: USD_BYR }
        }
        default: return state
    }
}

export const addNewTimeAC = () => ({ type: ADD_NEW_TIME });
export const addExchangeRateAC = () => ({ type: ADD_EXCHANGE_RATE });

export default sidebarPageReducer;
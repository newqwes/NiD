
let initialState = {
    menuItemData: [
        { value: "Новости", linkUrl: "/News" },
        { value: "Сообщения", linkUrl: "/Dialogs" },
        { value: "Чат", linkUrl: "/Chat" }
    ]
}
const sidebarPageReducer = (state = initialState, action) => {


    return state
}

export default sidebarPageReducer;
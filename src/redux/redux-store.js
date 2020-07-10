import profilePageReducer from "./profile-reducer";
import dialogPageReducer from "./dialog-reducer";
import sidebarPageReducer from "./sidebar-reducer";
import usersPageReducer from "./users-reducer";
const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogPage: dialogPageReducer,
    menuSideBar: sidebarPageReducer,
    usersPage: usersPageReducer
})
let store = createStore(reducers);

export default store;
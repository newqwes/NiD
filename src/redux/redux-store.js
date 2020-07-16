import profilePageReducer from "./profile-reducer";
import dialogPageReducer from "./dialog-reducer";
import sidebarPageReducer from "./sidebar-reducer";
import usersPageReducer from "./users-reducer";
import authReducer from "./auth";
const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogPage: dialogPageReducer,
    menuSideBar: sidebarPageReducer,
    usersPage: usersPageReducer,
    auth: authReducer
})
let store = createStore(reducers);

window.store = store;  //console call store.GetState() ....

export default store;
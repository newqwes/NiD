import profilePageReducer from "./profile-reducer";
import dialogPageReducer from "./dialog-reducer";
import sidebarPageReducer from "./sidebar-reducer";
const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogPage: dialogPageReducer,
    menuSideBar: sidebarPageReducer
})
let store = createStore(reducers);

export default store;
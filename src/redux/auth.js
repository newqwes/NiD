const TAKE_OWN_AUTH = "TAKE_USER_AUTH";

let initialState = {
    data: {
        id: null,
        email: null,
        login: null
      },
      isAuth: false
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case TAKE_OWN_AUTH: return {
            ...state,
            data: action.data,
            isAuth: true
        };
        default: return state;
    }
}

export const takeOwnAuth = (id, email, login) => ({ type: TAKE_OWN_AUTH, data:{id, email, login} });
export default authReducer;
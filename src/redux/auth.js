import { profileAPI } from "../api/api";

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

const takeOwnAuth = (id, email, login) => ({ type: TAKE_OWN_AUTH, data:{id, email, login} });

export const getOwnProfile = () => (dispatch) => {
    profileAPI.getOwnProfile()
    .then(data => {
        if (data.resultCode === 0) {
            let { id, email, login } = data.data
            dispatch(takeOwnAuth(id, email, login))
        }
    })
}
export default authReducer;
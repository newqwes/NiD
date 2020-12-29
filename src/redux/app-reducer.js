import { getOwnProfile } from './auth';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
  isInitialized: false,
};
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        isInitialized: true,
      };
    default:
      return state;
  }
};

const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});

export const initializeApp = () => (dispatch) => {
  let propmise = dispatch(getOwnProfile());
  Promise.all([propmise]).then(() => {
    dispatch(initializedSuccess());
  });
};
export default appReducer;

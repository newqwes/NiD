import { getOwnProfile } from './auth';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

export type InitialStateType = {
  isInitialized: boolean;
};

let initialState: InitialStateType = {
  isInitialized: false,
};

const appReducer = (state = initialState, action: any): InitialStateType => {
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

type InitializedSuccessActionType = {
  type: typeof INITIALIZED_SUCCESS;
};

const initializedSuccess = (): InitializedSuccessActionType => ({
  type: INITIALIZED_SUCCESS,
});

export const initializeApp = () => (dispatch: any) => {
  let propmise = dispatch(getOwnProfile());
  Promise.all([propmise]).then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;

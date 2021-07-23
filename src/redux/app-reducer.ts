import { INITIALIZED_SUCCESS } from '../actions';

const initialState = {
  isInitialized: false,
};

type InitialStateType = typeof initialState;

const appReducer = (state = initialState, { type }: { type: string }): InitialStateType => {
  switch (type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        isInitialized: true,
      };
    default:
      return state;
  }
};

export default appReducer;

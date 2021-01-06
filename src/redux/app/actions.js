import { INITIALIZED_SUCCESS, GET_INITIALIZED } from './types';

export const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});

export const getInitialized = () => ({
  type: GET_INITIALIZED,
});

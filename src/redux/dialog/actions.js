import { ADD_NEW_MESSAGE } from './types';

export const addNewMessageText = (id, value) => ({
  type: ADD_NEW_MESSAGE,
  id,
  value,
});

import { userAPI } from '../../api/api';
import { ADD_EXCHANGE_RATE } from './types';

const addNewExchangeRate = (rate) => ({ type: ADD_EXCHANGE_RATE, rate });

export const getRates = () => async (dispatch) => {
  const rate = await userAPI.getRates();
  dispatch(addNewExchangeRate(rate));
};

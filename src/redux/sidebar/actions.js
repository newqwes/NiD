import { ADD_EXCHANGE_RATE, GET_RATES } from './types';

export const addNewExchangeRate = (payload) => ({ type: ADD_EXCHANGE_RATE, payload });

export const getRates = () => ({ type: GET_RATES });

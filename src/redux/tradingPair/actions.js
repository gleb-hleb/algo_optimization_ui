import {TRADING_PAIR} from './constants'

export const tradingPairListRequest = () => (
    {type: TRADING_PAIR.GET_TRADING_PAIR_LIST_REQUEST}
);

export const tradingPairListSuccess = (data) => (
    {type: TRADING_PAIR.GET_TRADING_PAIR_LIST_SUCCESS, payload: data}
);

export const tradingPairListError = (error) => (
    {type: TRADING_PAIR.GET_TRADING_PAIR_LIST_ERROR, payload: {error}}
);
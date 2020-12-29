import {INDICATORS} from './constants'

export const indicatorsListRequest = () => (
    {type: INDICATORS.GET_INDICATORS_LIST_REQUEST}
);

export const indicatorsListSuccess = (data) => (
    {type: INDICATORS.GET_INDICATORS_LIST_SUCCESS, payload: data}
);

export const indicatorsListError = (error) => (
    {type: INDICATORS.GET_INDICATORS_LIST_ERROR, payload: {error}}
);
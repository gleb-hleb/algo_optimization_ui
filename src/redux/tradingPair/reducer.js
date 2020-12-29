import {TRADING_PAIR} from "./constants";

const initialState = {
    trading_pair: null,
    loading: false,
    error: null
}

const tradingPairListReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case TRADING_PAIR.GET_TRADING_PAIR_LIST_REQUEST:
            return {
                ...state,
                error: null,
                loading: true
            };
        case TRADING_PAIR.GET_TRADING_PAIR_LIST_SUCCESS:
            return {
                ...state,
                indicators: payload.payload,
                loading: false
            };
        case TRADING_PAIR.GET_TRADING_PAIR_LIST_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default tradingPairListReducer;
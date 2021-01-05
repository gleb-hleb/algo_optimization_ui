import {TRADING_PAIR} from "./constants";

const initialState = {
    selected_trading_pair: null,
    trading_pair_list: null,
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
                trading_pair_list: payload.payload,
                loading: false
            };
        case TRADING_PAIR.GET_TRADING_PAIR_LIST_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
            };
        case TRADING_PAIR.SET_CURRENT_TRADING_PAIR:
            return {
                ...state,
                selected_trading_pair: payload
            };
        default:
            return state;
    }
};

export default tradingPairListReducer;
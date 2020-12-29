import {INDICATORS} from "./constants";

const initialState = {
    indicators: null,
    loading: false,
    error: null
}

const indicatorsListReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case INDICATORS.GET_INDICATORS_LIST_REQUEST:
            return {
                ...state,
                error: null,
                loading: true
            };
        case INDICATORS.GET_INDICATORS_LIST_SUCCESS:
            return {
                ...state,
                //TODO: make payload.indicatorsList
                indicators: payload.payload,
                loading: false
            };
        case INDICATORS.GET_INDICATORS_LIST_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default indicatorsListReducer;
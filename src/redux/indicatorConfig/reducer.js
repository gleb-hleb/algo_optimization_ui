import {INDICATOR_CONFIG} from "./constants";

const initialState = {
    indicator_config: null,
    loading: false,
    error: null
}

const indicatorConfigReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case INDICATOR_CONFIG.GET_INDICATOR_CONFIG_REQUEST:
            return {
                ...state,
                error: null,
                loading: true,
            };
        case INDICATOR_CONFIG.GET_INDICATOR_CONFIG_SUCCESS:
            return {
                ...state,
                //TODO: make payload.indicator
                indicator_config: payload,
                loading: false
            };
        case INDICATOR_CONFIG.GET_INDICATOR_CONFIG_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default indicatorConfigReducer;
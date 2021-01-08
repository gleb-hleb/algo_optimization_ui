import {GENERAL_CONFIG_CONSTANTS} from "./constants";

const initialState = {
    longPeriod: {
        from: null,
        to: null,
        step: null
    },
    shortPeriod: {
        from: null,
        to: null,
        step: null
    }
};
// TODO: DEPRECATED
const generalConfigReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case GENERAL_CONFIG_CONSTANTS.SET_LONG_PERIOD_FROM:
            return {
                ...state,
                longPeriod: {...state.longPeriod, from: payload}
            };
        case GENERAL_CONFIG_CONSTANTS.SET_LONG_PERIOD_TO:
            return {
                ...state,
                longPeriod: {...state.longPeriod, to: payload}
            };
        case GENERAL_CONFIG_CONSTANTS.SET_SHORT_PERIOD_FROM:
            return {
                ...state,
                shortPeriod: {...state.shortPeriod, from: payload}
            };
        case GENERAL_CONFIG_CONSTANTS.SET_SHORT_PERIOD_TO:
            return {
                ...state,
                shortPeriod: {...state.shortPeriod, to: payload}
            };
        case GENERAL_CONFIG_CONSTANTS.SET_LONG_PERIOD_STEP:
            return {
                ...state,
                longPeriod: {...state.longPeriod, step: payload}
            };
        case GENERAL_CONFIG_CONSTANTS.SET_SHORT_PERIOD_STEP:
            return {
                ...state,
                shortPeriod: {...state.shortPeriod, step: payload}
            };
        case GENERAL_CONFIG_CONSTANTS.SET_INTERVAL:
            return {
                ...state,
                interval: payload
            };
        default:
            return state;
    }
};

export default generalConfigReducer;
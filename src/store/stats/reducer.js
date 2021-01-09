import {StatsAction} from "./constants";

const initialState = {
    stats: null,
    loading: false,
    error: null
};

const statsReducer = (state = initialState, action) => {
    const {type, payload} = action;
    
    switch (type) {
        case StatsAction.GET_TASK_STATS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case StatsAction.GET_TASK_STATS_REQUEST_SUCCESS:
            return {
                ...state,
                ...payload,
                loading: false
            };
        case StatsAction.GET_TASK_STATS_REQUEST_ERROR:
            return {
                ...state,
                loading: false,
                error: payload
            };
        default:
            return {...state};
    }
};

export default statsReducer;
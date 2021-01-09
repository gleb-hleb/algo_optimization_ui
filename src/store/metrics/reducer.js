import {MetricsAction} from "./constants";

const initialState = {
    metrics: null,
    loading: false,
    error: null
};

const metricsReducer = (state = initialState, action) => {
    const {type, payload} = action;
    
    switch (type) {
        case MetricsAction.GET_TASK_METRICS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case MetricsAction.GET_TASK_METRICS_REQUEST_SUCCESS:
            return {
                ...state,
                ...payload,
                loading: false
            };
        case MetricsAction.GET_TASK_METRICS_REQUEST_ERROR:
            return {
                ...state,
                loading: false,
                error: payload
            };
        default:
            return {...state};
    }
};

export default metricsReducer;
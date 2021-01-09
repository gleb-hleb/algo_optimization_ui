import {PlotAction} from "./constants";

const initialState = {
    labels: null,
    lines: null,
    loading: false,
    error: null
};

const plotReducer = (state = initialState, action) => {
    const {type, payload} = action;
    
    switch (type) {
        case PlotAction.GET_ASSET_PLOT_REQUEST:
        case PlotAction.GET_TASK_PLOT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case PlotAction.GET_ASSET_PLOT_SUCCESS:
        case PlotAction.GET_TASK_PLOT_SUCCESS:
            return {
                ...state,
                ...payload,
                loading: false
            };
        case PlotAction.GET_ASSET_PLOT_ERROR:
        case PlotAction.GET_TASK_PLOT_ERROR:
            return {
                ...state,
                loading: false,
                error: payload
            };
        default:
            return {...state};
    }
};

export default plotReducer;
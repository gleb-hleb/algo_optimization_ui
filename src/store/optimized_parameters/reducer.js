import {ParametersAction} from "./constants";

const initialState = {
    parameters: null,
    loading: false,
    error: null
};

const parametersReducer = (state = initialState, action) => {
    const {type, payload} = action;
    
    switch (type) {
        case ParametersAction.GET_TASK_PARAMETERS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case ParametersAction.GET_TASK_PARAMETERS_REQUEST_SUCCESS:
            return {
                ...state,
                ...payload,
                loading: false
            };
        case ParametersAction.GET_TASK_PARAMETERS_REQUEST_ERROR:
            return {
                ...state,
                loading: false,
                error: payload
            };
        default:
            return {...state};
    }
};

export default parametersReducer;
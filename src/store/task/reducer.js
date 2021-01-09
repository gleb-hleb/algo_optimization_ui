import {TaskAction} from "./constants";

const initialState = {
    celery_task_id: null,
    progress: null,
    lines: null,
    loading: false,
    error: null
};

const taskReducer = (state = initialState, action) => {
    const {type, payload} = action;
    
    switch (type) {
        case TaskAction.GET_TASK_PROGRESS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case TaskAction.GET_TASK_PROGRESS_REQUEST_SUCCESS:
            return {
                ...state,
                ...payload,
                loading: false
            };
        case TaskAction.GET_TASK_PROGRESS_REQUEST_ERROR:
            return {
                ...state,
                loading: false,
                error: payload
            };
        case TaskAction.RUN_TASK_OPTIMIZATION_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case TaskAction.RUN_TASK_OPTIMIZATION_REQUEST_SUCCESS:
            return {
                ...state,
                ...payload,
                loading: false
            };
        case TaskAction.RUN_TASK_OPTIMIZATION_REQUEST_ERROR:
            return {
                ...state,
                loading: false,
                error: payload
            };
        default:
            return {...state};
    }
};

export default taskReducer;
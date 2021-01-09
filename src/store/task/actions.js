import {TaskAction} from './constants'

export const getTaskProgressRequest = (payload) => (
    {type: TaskAction.GET_TASK_PROGRESS_REQUEST, payload: payload}
);
export const getTaskProgressRequestSuccess = (data) => (
    {type: TaskAction.GET_TASK_PROGRESS_REQUEST_SUCCESS, payload: data}
);
export const getTaskProgressRequestError = (error) => (
    {type: TaskAction.GET_TASK_PROGRESS_REQUEST_ERROR, payload: error}
);

export const runTaskOptimizationRequest = (payload) => (
    {type: TaskAction.RUN_TASK_OPTIMIZATION_REQUEST, payload: payload}
);
export const runTaskOptimizationRequestSuccess = (data) => (
    {type: TaskAction.RUN_TASK_OPTIMIZATION_REQUEST_SUCCESS, payload: data}
);
export const runTaskOptimizationRequestError = (error) => (
    {type: TaskAction.RUN_TASK_OPTIMIZATION_REQUEST_ERROR, payload: error}
);
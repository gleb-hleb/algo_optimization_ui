import {ParametersAction} from './constants'

export const getParametersRequest = (payload) => (
    {type: ParametersAction.GET_TASK_PARAMETERS_REQUEST, payload: payload}
);
export const getParametersRequestSuccess = (data) => (
    {type: ParametersAction.GET_TASK_PARAMETERS_REQUEST_SUCCESS, payload: data}
);
export const getParametersRequestError = (error) => (
    {type: ParametersAction.GET_TASK_PARAMETERS_REQUEST_ERROR, payload: error}
);
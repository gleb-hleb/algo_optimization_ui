import {MetricsAction} from './constants'

export const getMetricsRequest = (payload) => (
    {type: MetricsAction.GET_TASK_METRICS_REQUEST, payload: payload}
);
export const getMetricsRequestSuccess = (data) => (
    {type: MetricsAction.GET_TASK_METRICS_REQUEST_SUCCESS, payload: data}
);
export const getMetricsRequestError = (error) => (
    {type: MetricsAction.GET_TASK_METRICS_REQUEST_ERROR, payload: error}
);
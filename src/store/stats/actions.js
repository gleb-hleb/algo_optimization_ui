import {StatsAction} from './constants'

export const getStatsRequest = (payload) => (
    {type: StatsAction.GET_TASK_STATS_REQUEST, payload: payload}
);
export const getStatsRequestSuccess = (data) => (
    {type: StatsAction.GET_TASK_STATS_REQUEST_SUCCESS, payload: data}
);
export const getStatsRequestError = (error) => (
    {type: StatsAction.GET_TASK_STATS_REQUEST_ERROR, payload: error}
);
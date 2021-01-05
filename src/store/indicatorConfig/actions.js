import {INDICATOR_CONFIG} from "./constants";

export const indicatorConfigRequest = (data) => (
    {type: INDICATOR_CONFIG.GET_INDICATOR_CONFIG_REQUEST, payload: data}
);

export const indicatorConfigSuccess = (data) => (
    {type: INDICATOR_CONFIG.GET_INDICATOR_CONFIG_SUCCESS, payload: data}
);

export const indicatorConfigError = (error) => (
    {type: INDICATOR_CONFIG.GET_INDICATOR_CONFIG_ERROR, payload: error}
);
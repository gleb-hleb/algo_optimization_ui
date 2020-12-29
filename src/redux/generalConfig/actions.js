import {GENERAL_CONFIG_CONSTANTS} from './constants'

export const setLongPeriodFrom = (data) => (
    {type: GENERAL_CONFIG_CONSTANTS.SET_LONG_PERIOD_FROM, payload: data}
);
export const setLongPeriodTo = (data) => (
    {type: GENERAL_CONFIG_CONSTANTS.SET_LONG_PERIOD_TO, payload: data}
);
export const setShortPeriodFrom = (data) => (
    {type: GENERAL_CONFIG_CONSTANTS.SET_SHORT_PERIOD_FROM, payload: data}
);
export const setShortPeriodTo = (data) => (
    {type: GENERAL_CONFIG_CONSTANTS.SET_SHORT_PERIOD_TO, payload: data}
);
export const setLongPeriodStep = (data) => (
    {type: GENERAL_CONFIG_CONSTANTS.SET_LONG_PERIOD_STEP, payload: data}
);
export const setShortPeriodStep = (data) => (
    {type: GENERAL_CONFIG_CONSTANTS.SET_SHORT_PERIOD_STEP, payload: data}
);
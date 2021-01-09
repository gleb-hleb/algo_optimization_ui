import {PlotAction} from './constants'

export const getAssetPlotRequest = (payload) => (
    {type: PlotAction.GET_ASSET_PLOT_REQUEST, payload: payload}
);
export const getAssetPlotRequestSuccess = (data) => (
    {type: PlotAction.GET_ASSET_PLOT_SUCCESS, payload: data}
);
export const getAssetPlotRequestError = (error) => (
    {type: PlotAction.GET_ASSET_PLOT_ERROR, payload: error}
);

export const getTaskPlotRequest = (payload) => (
    {type: PlotAction.GET_TASK_PLOT_REQUEST, payload: payload}
);
export const getTaskPlotRequestSuccess = (data) => (
    {type: PlotAction.GET_TASK_PLOT_SUCCESS, payload: data}
);
export const getTaskPlotRequestError = (error) => (
    {type: PlotAction.GET_TASK_PLOT_ERROR, payload: error}
);
import {call, put, takeLatest, all, fork} from 'redux-saga/effects'
import axios from "axios";
import {getAssetPlotRequestError, getAssetPlotRequestSuccess, getTaskPlotRequestError, getTaskPlotRequestSuccess} from "./actions";
import {PlotAction} from "./constants";

const API_ENDPOINT = window.REACT_APP_API_ENDPOINT;

function* handleAssetPlotRequest(payload) {
    try {
        const result = yield call(
            axios.get,
            `${API_ENDPOINT}/plot?
            start_period=${payload.start_period}&
            end_period=${payload.end_period}&
            symbol=${payload.symbol}&
            price=${payload.price}`,
        );

        if (result.error) {
            yield put(getAssetPlotRequestError(result.error));
        } else {
            yield put(getAssetPlotRequestSuccess(result.data));
        }
    } catch (err) {
        yield put(getAssetPlotRequestError(err.message));
    }
}

function* handleTaskPlotRequest(payload) {
    try {
        const result = yield call(
            axios.get,
            `${API_ENDPOINT}/task/${payload}/plot`,
        );

        if (result.error) {
            yield put(getTaskPlotRequestError(result.error));
        } else {
            yield put(getTaskPlotRequestSuccess(result.data));
        }
    } catch (err) {
        yield put(getTaskPlotRequestError(err.message));
    }
}

function* watchHandleAssetPlotRequest() {
    yield takeLatest(
        PlotAction.GET_ASSET_PLOT_REQUEST,
        handleAssetPlotRequest
    )
}

function* watchHandleTaskPlotRequest() {
    yield takeLatest(
        PlotAction.GET_TASK_PLOT_REQUEST,
        handleTaskPlotRequest
    )
}

export function* assetPlotSaga() {
    yield all([
        fork(watchHandleAssetPlotRequest),
        fork(watchHandleTaskPlotRequest)
    ]);
}

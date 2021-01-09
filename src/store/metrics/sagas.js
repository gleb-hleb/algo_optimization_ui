import {call, put, takeLatest, all, fork} from 'redux-saga/effects'
import axios from "axios";
import {getMetricsRequestSuccess, getMetricsRequestError} from "./actions";
import {MetricsAction} from "./constants";

const API_ENDPOINT = window.REACT_APP_API_ENDPOINT;

function* handleMetricsRequest(payload) {
    try {
        const result = yield call(
            axios.get,
            `${API_ENDPOINT}/task/${payload}/plot`,
        );

        if (result.error) {
            yield put(getMetricsRequestError(result.error));
        } else {
            yield put(getMetricsRequestSuccess(result.data));
        }
    } catch (err) {
        yield put(getMetricsRequestError(err.message));
    }
}

function* watchHandleMetricsRequest() {
    yield takeLatest(
        MetricsAction.GET_TASK_METRICS_REQUEST,
        handleMetricsRequest
    )
}

export function* metricsSaga() {
    yield all([
        fork(watchHandleMetricsRequest),
    ]);
}

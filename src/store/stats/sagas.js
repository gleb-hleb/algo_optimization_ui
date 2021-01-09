import {call, put, takeLatest, all, fork} from 'redux-saga/effects'
import axios from "axios";
import {getStatsRequestError, getStatsRequestSuccess} from "./actions";
import {StatsAction} from "./constants";

const API_ENDPOINT = window.REACT_APP_API_ENDPOINT;

function* handleStatsRequest(payload) {
    try {
        const result = yield call(
            axios.get,
            `${API_ENDPOINT}/task/${payload}/stats`,
        );

        if (result.error) {
            yield put(getStatsRequestError(result.error));
        } else {
            yield put(getStatsRequestSuccess(result.data));
        }
    } catch (err) {
        yield put(getStatsRequestError(err.message));
    }
}

function* watchHandleStatsRequest() {
    yield takeLatest(
        StatsAction.GET_TASK_STATS_REQUEST,
        handleStatsRequest
    )
}

export function* statsSaga() {
    yield all([
        fork(watchHandleStatsRequest),
    ]);
}

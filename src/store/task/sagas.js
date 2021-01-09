import {call, put, takeLatest, all, fork} from 'redux-saga/effects'
import axios from "axios";
import {getTaskProgressRequestError, getTaskProgressRequestSuccess, runTaskOptimizationRequestError, runTaskOptimizationRequestSuccess} from "./actions";
import {TaskAction} from "./constants";

const API_ENDPOINT = window.REACT_APP_API_ENDPOINT;

function* handleTaskOptimizeRequest(payload) {
    try {
        const result = yield call(
            axios.post,
            `${API_ENDPOINT}/task/optimize`,
            payload
        );

        if (result.error) {
            yield put(runTaskOptimizationRequestError(result.error));
        } else {
            yield put(runTaskOptimizationRequestSuccess(result.data));
        }
    } catch (err) {
        yield put(runTaskOptimizationRequestError(err.message));
    }
}

function* handleTaskProgressRequest(payload) {
    try {
        const result = yield call(
            axios.get,
            `${API_ENDPOINT}/task/progress/${payload}`,
        );

        if (result.error) {
            yield put(getTaskProgressRequestError(result.error));
        } else {
            yield put(getTaskProgressRequestSuccess(result.data));
        }
    } catch (err) {
        yield put(getTaskProgressRequestError(err.message));
    }
}

function* watchHandleTaskOptimizeRequest() {
    yield takeLatest(
        TaskAction.RUN_TASK_OPTIMIZATION_REQUEST,
        handleTaskOptimizeRequest
    )
}

function* watchHandleTaskProgressRequest() {
    yield takeLatest(
        TaskAction.GET_TASK_PROGRESS_REQUEST,
        handleTaskProgressRequest
    )
}

export function* taskSaga() {
    yield all([
        fork(watchHandleTaskOptimizeRequest),
        fork(watchHandleTaskProgressRequest)
    ]);
}

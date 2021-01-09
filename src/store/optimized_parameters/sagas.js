import {call, put, takeLatest, all, fork} from 'redux-saga/effects'
import axios from "axios";
import {ParametersAction} from "./constants";
import { getParametersRequestError, getParametersRequestSuccess } from './actions';

const API_ENDPOINT = window.REACT_APP_API_ENDPOINT;

function* handleParametersRequest(payload) {
    try {
        const result = yield call(
            axios.get,
            `${API_ENDPOINT}/task/${payload}/optimized_parameters`,
        );

        if (result.error) {
            yield put(getParametersRequestError(result.error));
        } else {
            yield put(getParametersRequestSuccess(result.data));
        }
    } catch (err) {
        yield put(getParametersRequestError(err.message));
    }
}

function* watchHandleParametersRequest() {
    yield takeLatest(
        ParametersAction.GET_TASK_PARAMETERS_REQUEST,
        handleParametersRequest
    )
}

export function* parametersSaga() {
    yield all([
        fork(watchHandleParametersRequest),
    ]);
}

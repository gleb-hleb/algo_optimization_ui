import {call, put, takeLatest, all, fork} from 'redux-saga/effects'
import axios from "axios";
import {indicatorConfigSuccess} from "./actions";
import {indicatorConfigError} from "./actions";
import {INDICATOR_CONFIG} from "./constants";

const API_ENDPOINT = window.REACT_APP_API_ENDPOINT;

function* handleIndicatorConfigRequest(action) {
    const result = yield call(
        axios.get,
        `${API_ENDPOINT}/indicator/${action.payload}/meta`,
    );
    if (result.error) {
        yield put(indicatorConfigError(result.error));
    } else {
        yield put(indicatorConfigSuccess(result.data));
    }
}

function* watchHandleIndicatorConfigRequest() {
    yield takeLatest(
        INDICATOR_CONFIG.GET_INDICATOR_CONFIG_REQUEST,
        handleIndicatorConfigRequest
    )
}

export function* indicatorConfigSaga() {
    yield all([
        fork(watchHandleIndicatorConfigRequest)
    ]);
}



import {call, put, takeLatest, all, fork} from 'redux-saga/effects'
import axios from "axios";
import {indicatorsListSuccess} from "./actions";
import {indicatorsListError} from "./actions";
import {INDICATORS} from "./constants";

const API_ENDPOINT = window.REACT_APP_API_ENDPOINT;

function* handleIndicatorsListRequest() {
    const result = yield call(
        axios.get,
        `${API_ENDPOINT}/indicator/list`,
    );

    if (result.error) {
        yield put(indicatorsListError(result));
    } else {
        yield put(indicatorsListSuccess(result.data));
    }
}

function* watchHandleIndicatorsListRequest() {
    yield takeLatest(
        INDICATORS.GET_INDICATORS_LIST_REQUEST,
        handleIndicatorsListRequest
    )
}

export function* indicatorsSaga() {
    yield all([
        fork(watchHandleIndicatorsListRequest)
    ]);
}



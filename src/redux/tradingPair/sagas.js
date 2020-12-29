import {call, put, takeLatest, all, fork} from 'redux-saga/effects'
import axios from "axios";
import {tradingPairListSuccess} from "./actions";
import {tradingPairListError} from "./actions";
import {TRADING_PAIR} from "./constants";

const API_ENDPOINT = window.REACT_APP_API_ENDPOINT;

function* handleTradingPairRequest() {
    const result = yield call(
        axios.get,
        `${API_ENDPOINT}/trading-pair/list`,
    );

    if (result.error) {
        yield put(tradingPairListError(result.error));
    } else {
        yield put(tradingPairListSuccess(result.data));
    }
}

function* watchHandleTradingPairRequest() {
    yield takeLatest(
        TRADING_PAIR.GET_TRADING_PAIR_LIST_REQUEST,
        handleTradingPairRequest
    )
}

export function* tradingPairSaga() {
    yield all([
        fork(watchHandleTradingPairRequest)
    ]);
}



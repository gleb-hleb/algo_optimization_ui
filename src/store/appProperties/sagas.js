import {call, put, takeLatest, all, fork} from 'redux-saga/effects'
import axios from "axios";
import {appPropertiesError, appPropertiesSuccess} from "./actions";
import {AppPropertiesAction} from "./constants";

const API_ENDPOINT = window.REACT_APP_API_ENDPOINT;

function* handleAppPropertiesRequest() {
    try {
        const result = yield call(
            axios.get,
            `${API_ENDPOINT}/app/properties`,
        );

        if (result.error) {
            yield put(appPropertiesError(result.error));
        } else {
            yield put(appPropertiesSuccess(result.data));
        }
    } catch (err) {
        yield put(appPropertiesError(err.message));
    }
}

function* watchHandleAppPropertiesRequest() {
    yield takeLatest(
        AppPropertiesAction.GET_APP_PROPERTIES_REQUEST,
        handleAppPropertiesRequest
    )
}

export function* appPropertiesSaga() {
    yield all([fork(watchHandleAppPropertiesRequest)]);
}



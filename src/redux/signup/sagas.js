import axios from 'axios';
import {all, call, fork, put, takeLatest} from 'redux-saga/effects';
import {googleLoginError, googleLoginSuccess, loginError, loginSuccess, userError, userSuccess} from './action';
import {SIGN_UP_ACTION_TYPES} from './constants';

//const API_ENDPOINT = getConfig('REACT_APP_API_ENDPOINT');
// TODO
//const API_ENDPOINT = window.REACT_APP_API_ENDPOINT;
const API_ENDPOINT = "http://localhost:8000"

function* handleSignUpRequest() {
    try {
        const res = yield call(axios.get, `${API_ENDPOINT}/auth/me`);
        if (res.error) {
            yield put(userError(res.error));
        } else {
            yield put(userSuccess(res.data));
        }
    } catch (err) {
        yield put(loginError('Auth error'));
    }
}

function* watchHandleSignUpRequest() {
    yield takeLatest(SIGN_UP_ACTION_TYPES.DO_SIGNUP_REQUEST, handleSignUpRequest);
}

export function* userLoadedSaga() {
    yield all([fork(watchHandleSignUpRequest)]);
}

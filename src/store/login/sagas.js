import {all, call, fork, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {facebookLoginError, facebookLoginSuccess, googleLoginError, googleLoginSuccess, loginError, loginSuccess, userError, userSuccess} from './action';
import { LOGIN_ACTION_TYPES } from './constants';

const API_ENDPOINT = window.REACT_APP_API_ENDPOINT;

function* handleUserLoaded() {
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

function* handleUserLogin(action) {
    const {username, password} = action.payload;
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const res = yield call(
            axios.post,
            `${API_ENDPOINT}/auth/django/`,
            {username, password},
            config
        );
        if (res.error || res.status >= 401) {
            yield put(loginError(res.error));
        } else {
            yield put(loginSuccess(res.data));
        }
    } catch (err) {
        yield put(loginError('Login error.'));
    }
}

function* handleUserGoogleLogin(action) {
    const access_token = {access_token: action.payload};
    const config = {
        headers: {'Content-Type': 'application/json'}
    };
    try {
        const res = yield call(
            axios.post,
            `${API_ENDPOINT}/auth/google/`,
            access_token,
            config
        );

        if (res.error || res.status >= 401) {
            yield put(googleLoginError(res.error));
        } else {
            yield put(googleLoginSuccess(res.data));
        }
    } catch (err) {
        yield put(googleLoginError(err));
        console.log(err)
    }
}

function* handleUserFacebookLogin(action) {
    const access_token = {access_token: action.payload};
    const config = {
        headers: {'Content-Type': 'application/json'}
    };
    try {
        const res = yield call(
            axios.post,
            `${API_ENDPOINT}/auth/facebook/`,
            access_token,
            config
        );

        if (res.error || res.status >= 401) {
            yield put(facebookLoginError(res.error));
        } else {
            yield put(facebookLoginSuccess(res.data));
        }
    } catch (err) {
        yield put(facebookLoginError(err));
        console.log(err)
    }
}

/////////////////////////
function* watchHandleUserLoaded() {
    yield takeLatest(LOGIN_ACTION_TYPES.GET_USER_REQUEST, handleUserLoaded);
}

export function* userLoadedSaga() {
    yield all([fork(watchHandleUserLoaded)]);
}

function* watchHandleUserLogin() {
    yield takeLatest(LOGIN_ACTION_TYPES.LOGIN, handleUserLogin);
}

export function* userLoginSaga() {
    yield all([fork(watchHandleUserLogin)]);
}

function* watchHandleUserGoogleLogin() {
    yield takeLatest(LOGIN_ACTION_TYPES.GOOGLE_LOGIN, handleUserGoogleLogin);
}

export function* userGoogleLoginSaga() {
    yield all([fork(watchHandleUserGoogleLogin)]);
}

function* watchHandleUserFacebookLogin() {
    yield takeLatest(LOGIN_ACTION_TYPES.FACEBOOK_LOGIN, handleUserFacebookLogin);
}

export function* userFacebookLoginSaga() {
    yield all([fork(watchHandleUserFacebookLogin)]);
}

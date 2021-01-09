import {LOGIN_ACTION_TYPES} from './constants';

// receive user
export const userRequest = () => ({type: LOGIN_ACTION_TYPES.GET_USER_REQUEST});
export const userSuccess = (user) => ({type: LOGIN_ACTION_TYPES.GET_USER_SUCCESS, payload: user});
export const userError = (error) => ({type: LOGIN_ACTION_TYPES.GET_USER_ERROR, payload: error});

// login with token
export const doLogin = (payload) => ({type: LOGIN_ACTION_TYPES.LOGIN, payload: payload});
export const loginSuccess = (login) => ({type: LOGIN_ACTION_TYPES.LOGIN_SUCCESS, payload: login});
export const loginError = (error) => ({type: LOGIN_ACTION_TYPES.LOGIN_ERROR, payload: error});

// google signin
export const doGoogleLogin = (payload) => ({type: LOGIN_ACTION_TYPES.GOOGLE_LOGIN, payload: payload});
export const googleLoginSuccess = (login) => ({type: LOGIN_ACTION_TYPES.GOOGLE_LOGIN_SUCCESS, payload: login});
export const googleLoginError = (error) => ({type: LOGIN_ACTION_TYPES.GOOGLE_LOGIN_ERROR, payload: error});

// google signin
export const doFacebookLogin = (payload) => ({type: LOGIN_ACTION_TYPES.FACEBOOK_LOGIN, payload: payload});
export const facebookLoginSuccess = (login) => ({type: LOGIN_ACTION_TYPES.FACEBOOK_LOGIN_SUCCESS, payload: login});
export const facebookLoginError = (error) => ({type: LOGIN_ACTION_TYPES.FACEBOOK_LOGIN_ERROR, payload: error});


// logout
export const doLogout = () => ({type: LOGIN_ACTION_TYPES.LOGOUT});

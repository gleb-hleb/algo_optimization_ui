import {SIGN_UP_ACTION_TYPES} from './constants';

export const doSignUpRequest = (payload) => ({type: SIGN_UP_ACTION_TYPES.DO_SIGNUP_REQUEST, payload: payload});
export const doSignUpRequestSuccess = (payload) => ({type: SIGN_UP_ACTION_TYPES.DO_SIGNUP_REQUEST_SUCCESS, payload: payload});
export const doSignUpRequestError = (payload) => ({type: SIGN_UP_ACTION_TYPES.DO_SIGNUP_REQUEST_ERROR, payload: payload});

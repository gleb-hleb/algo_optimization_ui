import { SIGN_UP_ACTION_TYPES } from './constants';

export const initialState = {
    payload: false,
    error: null,
    loading: true
};

const signUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP_ACTION_TYPES.DO_SIGNUP_REQUEST: {
            return {
                ...state,
                isAuth: true,
                loading: false,
                ...action.payload
            };
        }
        case SIGN_UP_ACTION_TYPES.DO_SIGNUP_REQUEST_SUCCESS: {
            return {
                ...state, 
                isAuth: true, 
                loading: false, 
                user: null
            };
        }
        case SIGN_UP_ACTION_TYPES.DO_SIGNUP_REQUEST_ERROR: {
            return {
                ...state, 
                isAuth: false, 
                loading: true,
                user: null
            };
        }
        default: {
            return state;
        }
    }
};

export default signUpReducer;

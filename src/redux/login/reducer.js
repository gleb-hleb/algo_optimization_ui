import { LOGIN_ACTION_TYPES } from './constants';

export const initialState = {
    user: null,
    token: localStorage.getItem('token'),
    isAuth: false,
    error: null,
    loading: true
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_ACTION_TYPES.GET_USER_SUCCESS: {
            return {
                ...state,
                isAuth: true,
                loading: false,
                ...action.payload
            };
        }
        case LOGIN_ACTION_TYPES.GET_USER_REQUEST: {
            return {
                ...state, 
                isAuth: true, 
                loading: false, 
                user: null
            };
        }
        case LOGIN_ACTION_TYPES.LOGIN: {
            return {
                ...state, 
                isAuth: false, 
                loading: true,
                user: null
            };
        }
        case LOGIN_ACTION_TYPES.LOGIN_SUCCESS: {
            console.log(action)
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuth: true,
                loading: false,
                error: null
            };
        }
        case LOGIN_ACTION_TYPES.GOOGLE_LOGIN: {
            return {
                ...state, 
                isAuth: false, 
                loading: true,
                user: null
            };
        }
        case LOGIN_ACTION_TYPES.GOOGLE_LOGIN_SUCCESS: {
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuth: true,
                loading: false,
                error: null
            };
        }
        case LOGIN_ACTION_TYPES.GOOGLE_LOGIN_ERROR:
        case LOGIN_ACTION_TYPES.GOOGLE_LOGOUT:
        case LOGIN_ACTION_TYPES.LOGIN_ERROR:
        case LOGIN_ACTION_TYPES.LOGOUT:
        case LOGIN_ACTION_TYPES.GET_USER_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuth: false,
                loading: false,
                user: null,
                error: action.payload
            };
        default: {
            return state;
        }
    }
};

export default loginReducer;

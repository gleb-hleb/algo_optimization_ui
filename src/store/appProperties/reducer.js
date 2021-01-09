import {AppPropertiesAction} from "./constants";

const initialState = {
    version: null,
    app_environment: null,
    auth_enabled: null,
    loading: false,
    error: null
};

const appPropertiesReducer = (state = initialState, action) => {
    const {type, payload} = action;
    
    switch (type) {
        case AppPropertiesAction.GET_APP_PROPERTIES_REQUEST:
            return {
                ...state,
                version: null,
                app_environment: null,
                auth_enabled: null,
                loading: true,
                error: null
            };
        case AppPropertiesAction.GET_APP_PROPERTIES_SUCCESS:
            return {
                ...state,
                ...payload,
                loading: false
            };
        case AppPropertiesAction.GET_APP_PROPERTIES_ERROR:
            return {
                ...state,
                version: null,
                app_environment: null,
                auth_enabled: null,
                loading: false,
                error: payload
            };
        default:
            return state;
    }
};

export default appPropertiesReducer;
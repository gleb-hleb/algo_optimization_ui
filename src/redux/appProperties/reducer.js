import {AppPropertiesAction} from "./constants";

const initialState = {
    version: null,
    app_environment: null,
    auth_enabled: null,
    loading: false
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
                loading: true
            };
        case AppPropertiesAction.GET_APP_PROPERTIES_SUCCESS:
            return {
                ...state,
                ...payload,
                loading: false
            };
        default:
            return state;
    }
};

export default appPropertiesReducer;
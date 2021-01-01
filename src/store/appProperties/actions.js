import {AppPropertiesAction} from './constants'

//TODO: typesafe-actions lib
export const appPropertiesRequest = () => (
    {type: AppPropertiesAction.GET_APP_PROPERTIES_REQUEST}
);
export const appPropertiesSuccess = (data) => (
    {type: AppPropertiesAction.GET_APP_PROPERTIES_SUCCESS, payload: {data}}
);
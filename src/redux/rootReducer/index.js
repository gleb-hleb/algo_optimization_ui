import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import {all, fork} from "redux-saga/effects";

import appPropertiesReducer from "../appProperties/reducer";
import indicatorsListReducer from "../indicators/reducer";
import indicatorConfigReducer from "../indicatorConfig/reducer";
import {appPropertiesSaga} from "../appProperties/sagas";
import {indicatorsSaga} from "../indicators/sagas";
import {indicatorConfigSaga} from "../indicatorConfig/sagas";

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    appProperties: appPropertiesReducer,
    indicatorsList: indicatorsListReducer,
    selectedIndicatorConfig: indicatorConfigReducer
});

export function* rootSaga() {
    yield all([
        fork(appPropertiesSaga),
        fork(indicatorsSaga),
        fork(indicatorConfigSaga),
    ])
}

export default createRootReducer;
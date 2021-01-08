import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import {all, fork} from "redux-saga/effects";

import appPropertiesReducer from "./appProperties/reducer";
import indicatorsListReducer from "./indicatorsList/reducer";
import indicatorConfigReducer from "./indicatorConfig/reducer";
import tradingPairListReducer from "./tradingPair/reducer";
import generalConfigReducer from "./generalConfig/reducer";
import feedbackReducer from "./feedback/reducer";
import loginReducer from './login/reducer';
import plotReducer from './plot/reducer';
import metricsReducer from './metrics/reducer';

import {appPropertiesSaga} from "./appProperties/sagas";
import {indicatorsSaga} from "./indicatorsList/sagas";
import {indicatorConfigSaga} from "./indicatorConfig/sagas";
import {tradingPairSaga} from "./tradingPair/sagas";
import {feedbackSaga} from "./feedback/sagas";
import {userFacebookLoginSaga, userGoogleLoginSaga, userLoadedSaga, userLoginSaga} from './login/sagas';
import { assetPlotSaga } from './plot/sagas';
import { metricsSaga } from './metrics/sagas';
import { taskSaga } from './task/sagas';
import taskReducer from './task/reducer';
import { statsSaga } from './stats/sagas';
import { parametersSaga } from './optimized_parameters/sagas';
import statsReducer from './stats/reducer';
import parametersReducer from './optimized_parameters/reducer';


const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    appProperties: appPropertiesReducer,
    indicatorsList: indicatorsListReducer,
    selectedIndicatorConfig: indicatorConfigReducer,
    tradingPairList: tradingPairListReducer,
    generalConfig: generalConfigReducer,
    feedback: feedbackReducer,
    login: loginReducer,    
    plot: plotReducer,
    metrics: metricsReducer,
    task: taskReducer,
    stats: statsReducer,
    parameters: parametersReducer
});

export function* rootSaga() {
    yield all([
        fork(appPropertiesSaga),
        fork(indicatorsSaga),
        fork(indicatorConfigSaga),
        fork(tradingPairSaga),
        fork(feedbackSaga),
        fork(userLoadedSaga),
        fork(userLoginSaga),
        fork(userGoogleLoginSaga),
        fork(userFacebookLoginSaga),
        fork(assetPlotSaga),
        fork(metricsSaga),
        fork(taskSaga),
        fork(statsSaga),
        fork(parametersSaga),
    ])
}

export default createRootReducer;
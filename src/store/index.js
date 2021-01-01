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

import {appPropertiesSaga} from "./appProperties/sagas";
import {indicatorsSaga} from "./indicatorsList/sagas";
import {indicatorConfigSaga} from "./indicatorConfig/sagas";
import {tradingPairSaga} from "./tradingPair/sagas";
import {feedbackSaga} from "./feedback/sagas";
import {userGoogleLoginSaga, userLoadedSaga, userLoginSaga} from './login/sagas';


const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    appProperties: appPropertiesReducer,
    indicatorsList: indicatorsListReducer,
    selectedIndicatorConfig: indicatorConfigReducer,
    tradingPairList: tradingPairListReducer,
    generalConfig: generalConfigReducer,
    feedback: feedbackReducer,
    login: loginReducer,    
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
    ])
}

export default createRootReducer;
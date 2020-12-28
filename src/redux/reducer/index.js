import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import appPropertiesReducer from "../appProperties/reducer";
import {all, fork} from "redux-saga/effects";
import {appPropertiesSaga} from "../appProperties/sagas";
// import history from './history'


// const reducer = combineReducers({
//     router: connectRouter(history),
//     appProperties: appPropertiesReducer,
// });

const createRootReducer = (history) => combineReducers({
    "router": connectRouter(history),
    appProperties: appPropertiesReducer,
});

export function* rootSaga() {
    yield all([
        fork(appPropertiesSaga),
    ])
}

export default createRootReducer;
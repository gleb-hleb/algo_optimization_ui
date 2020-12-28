import {combineReducers} from 'redux';
import appPropertiesReducer from "../appProperties/reducer";
import {all, fork} from "redux-saga/effects";
import {appPropertiesSaga} from "../appProperties/sagas";

const reducer = combineReducers({
    foo: "bar",
    appProperties: appPropertiesReducer,
});

export function* rootSaga() {
    yield all([
        fork(appPropertiesSaga),
    ])
}

export default reducer;
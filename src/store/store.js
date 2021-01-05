import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {routerMiddleware} from 'connected-react-router';

import createRootReducer, {rootSaga} from '.';
import createSagaMiddleware from 'redux-saga';

function initializeStore(initialState, history) {
    const sagaMiddleware = createSagaMiddleware();
    const enhancer = applyMiddleware(
        thunkMiddleware,
        sagaMiddleware,
        routerMiddleware(history)
    );

    const store = createStore(
        createRootReducer(history),
        {},
        composeWithDevTools(enhancer)
    );

    sagaMiddleware.run(rootSaga);

    return store;
}

export default initializeStore;
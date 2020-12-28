import {createStore, applyMiddleware} from 'redux';
import rootReducer, {rootSaga} from './reducer';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension'
import {routerMiddleware} from 'connected-react-router'


function initializeStore(initialState, history) {
    const composeEnhancers = composeWithDevTools({trace: true, traceLimit: 25});
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(routerMiddleware(history), sagaMiddleware)
        )
    );

    sagaMiddleware.run(rootSaga);

    return store;
}

export default initializeStore;
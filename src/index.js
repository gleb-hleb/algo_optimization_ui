import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import './index.css';

import App from './components/app';

import initializeStore from './redux/store';
import history from './redux/reducer/history'

const initialState = window.initialReduxState;
console.log(initialState); // -> undefined
const store = initializeStore(initialState, history)

window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App store={store}/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

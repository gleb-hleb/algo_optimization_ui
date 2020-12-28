import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';

import App from './components/app';

import initializeStore from './redux/store';
import {createHashHistory} from "history";

const history = createHashHistory();
const initialState = window.initialReduxState;
const store = initializeStore(initialState, history)

ReactDOM.render(
    <Provider store={store}>
        <App store={store}/>
    </Provider>,
    document.getElementById('root')
);

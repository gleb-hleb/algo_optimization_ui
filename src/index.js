import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './components/app';

import initializeStore from './redux/store';
import history from './redux/history'

const initialState = {};
const store = initializeStore(initialState, history)

window.store = store;

ReactDOM.render(
    <App store={store} history={history}/>,
    document.getElementById('root')
);

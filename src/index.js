import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';

import App from './components/app';

import initializeStore from './store/store';
import history from './store/history'

import './assets/scss/style.scss'

const initialState = {};
const store = initializeStore(initialState, history)

window.store = store;

ReactDOM.render(
    <App store={store} history={history}/>,
    document.getElementById('root')
);

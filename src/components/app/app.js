import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Provider } from 'react-redux';
import {appPropertiesRequest} from "../../store/appProperties/actions";
import Routes from "../../routes/routes";
import { doGoogleLogin } from '../../store/login/action';

const App = ({store, history}) => {
    store.dispatch(appPropertiesRequest());

    if (localStorage.getItem('googleToken')) {
        store.dispatch(doGoogleLogin(localStorage.getItem('googleToken')));
    }

    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Routes/>
            </ConnectedRouter>
        </Provider>
    )
}

export default App;


import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Provider } from 'react-redux';
import {appPropertiesRequest} from "../../store/appProperties/actions";
import Routes from "../../routes/routes";

const App = ({store, history}) => {

    
    store.dispatch(appPropertiesRequest());

    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Routes/>
            </ConnectedRouter>
        </Provider>
    )
}

export default App;


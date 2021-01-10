import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import Routes from "../../routes/routes";
import { appPropertiesRequest } from "../../store/appProperties/actions";
import { doGoogleLogin } from '../../store/login/action';
import { setupRequestInterceptor, setupResponceInterceptor } from '../../helpers/Interceptors';
import NavigationBar from "../navigationBar";


const App = ({store, history}) => {
    setupRequestInterceptor(localStorage.getItem('token'));
    setupResponceInterceptor(store, history);
    
    store.dispatch(appPropertiesRequest());

    if (localStorage.getItem('googleToken')) {
        store.dispatch(doGoogleLogin(localStorage.getItem('googleToken')));
    }

    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                {/*<Routes/>*/}
                <NavigationBar/>
            </ConnectedRouter>
        </Provider>
    )
}

export default App;


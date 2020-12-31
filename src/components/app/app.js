import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Provider } from 'react-redux';
import {appPropertiesRequest} from "../../redux/appProperties/actions";
<<<<<<< HEAD
import NavigationBar from "../navigationBar";
=======
>>>>>>> c7d8915... messy dump/ saved for a reason/ llbe rebuild xwith only one option to sign in using google account/ other cases are shit
import Routes from "../../routes/routes";

const App = ({store, history}) => {

    
    store.dispatch(appPropertiesRequest());

    return (
<<<<<<< HEAD
        <div>
            <NavigationBar/>
            <Routes/>
        </div>
=======
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Routes/>
            </ConnectedRouter>
        </Provider>
>>>>>>> c7d8915... messy dump/ saved for a reason/ llbe rebuild xwith only one option to sign in using google account/ other cases are shit
    )
}

export default App;


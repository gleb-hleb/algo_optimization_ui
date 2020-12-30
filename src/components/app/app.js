import React from 'react';
import {appPropertiesRequest} from "../../redux/appProperties/actions";
import Header from '../header';
import NavigationBar from "../navigationBar";
import Routes from "../../routes/routes";

const App = ({store}) => {
    store.dispatch(appPropertiesRequest());

    return (
        <div>
            <Header/>
            <NavigationBar/>
            <Routes/>
        </div>
    )
}

export default App;


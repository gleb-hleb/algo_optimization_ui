import React from 'react';
import Header from '../header';
import NavigationBar from "../navigation_bar";
import {appPropertiesRequest} from "../../redux/appProperties/actions";

const App = ({store}) => {
    store.dispatch(appPropertiesRequest());

    return (
        <div>
            <Header/>
            <NavigationBar/>
        </div>
    )
}

export default App;

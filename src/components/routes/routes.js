import React from 'react';
import {Switch, Route} from "react-router-dom";

import Start from '../../pages/start';
import Optimization from '../../pages/optimization';
import Settings from '../../pages/settings';
import Support from '../../pages/support';
import Telegram from '../../pages/telegram';

const Routes = () => {
    return (
        //TODO: Put here authorization in future
        <Switch>
            <Route exact path={'/'} component={Start}/>
            <Route path={'/optimization_page'} component={Optimization}/>
            <Route path={'/settings_page'} component={Settings}/>
            <Route path={'/support_page'} component={Support}/>
            <Route path={'/telegram_page'} component={Telegram}/>
        </Switch>
    )
};

export default Routes;
import React from 'react';
import { useSelector } from 'react-redux';
import {Switch, Route} from "react-router-dom";
import MyLoadable from '../helpers/MyLoadable';

const SignUpPage = MyLoadable({loader: () => import('../pages/signup-page/SignUpPage')});
const LandingPage = MyLoadable({loader: () => import('../pages/landing-page/LandingPage')});
const Optimization = MyLoadable({loader: () => import('../pages/optimization')});
const Settings = MyLoadable({loader: () => import('../pages/settings')});
const Support = MyLoadable({loader: () => import('../pages/support')});
const Telegram = MyLoadable({loader: () => import('../pages/telegram')});
const Start = MyLoadable({loader: () => import('../pages/start')});

const Routes = () => {
    const token = useSelector(store => store.login.token)
    const auth_enabled = useSelector(store => store.appProperties.auth_enabled)
    
    return (
        <> 
            {token !== null || auth_enabled === false ? (
                <Switch>
                    <Route exact path={'/'} component={Start}/>
                    <Route path={'/signup_page'} component={SignUpPage}/>
                    <Route path={'/optimization_page'} component={Optimization}/>
                    <Route path={'/settings_page'} component={Settings}/>
                    <Route path={'/support_page'} component={Support}/>
                    <Route path={'/telegram_page'} component={Telegram}/>
                </Switch>
            ) : (
                <Switch>
                    <Route exact path={'/'} component={LandingPage}/>
                    <Route path={'/signup_page'} component={SignUpPage}/>
                </Switch>
            )}
        </>
    )
};

export default Routes;
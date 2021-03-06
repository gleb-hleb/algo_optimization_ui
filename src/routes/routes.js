import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from "react-router-dom";
import MyLoadable from '../helpers/MyLoadable';
import { userIsAuthenticated } from '../helpers/PrivateRoutes';

const LandingPage = MyLoadable({loader: () => import('../pages/landing-page/LandingPage')});
const Optimization = MyLoadable({loader: () => import('../pages/optimization/optimization')});
const Settings = MyLoadable({loader: () => import('../pages/settings/settings')});
const Support = MyLoadable({loader: () => import('../pages/support/support')});

function NotFoundPage() {
    return (
        <div className='not-found'>
            <span className='error'>404</span>
            <p>Page not found</p>
        </div>
    );
}

function ErrorPage() {
    return (
        <div className='not-found'>
            <span className='error'>400</span>
            <p>Error Page</p>
        </div>
    );
}

const Routes = () => {
    const auth_enabled = useSelector(store => store.appProperties.auth_enabled);
    return (
        <> 
            <Switch>
                <Route 
                    path='/' 
                    exact 
                    component={LandingPage}/>
                <Route 
                    path='/optimization_page' 
                    exact
                    component={auth_enabled ? userIsAuthenticated(Optimization) : Optimization}
                />
                <Route 
                    path='/settings_page' 
                    exact
                    component={auth_enabled ? userIsAuthenticated(Settings) : Settings}
                />
                <Route 
                    path='/support_page'
                    exact
                    component={auth_enabled ? userIsAuthenticated(Support) : Support}/>
                <Route component={NotFoundPage}/>
                <Route 
                    path='/error_page' 
                    exact 
                    component={ErrorPage}/>
            </Switch>
        </>
    )
};

export default Routes;
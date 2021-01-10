import React from 'react';
import {useSelector} from 'react-redux';
import {Switch, Route} from "react-router-dom";
import NavigationBar from '../components/navigationBar/navigation_bar';
import MyLoadable from '../helpers/MyLoadable';
import {userIsAuthenticated} from '../helpers/PrivateRoutes';

const HomePage = MyLoadable({loader: () => import('../pages/home-page/HomePage')});
const BacktestOptionsPage = MyLoadable({loader: () => import('../pages/backtest_options-page/BacktestOptionsPage')});
const BacktestListPage = MyLoadable({loader: () => import('../pages/backtest_list-page/BacktestListPage')});
const BacktestResultPage = MyLoadable({loader: () => import('../pages/backtest_result-page/BacktestResultPage')});

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
        <Switch>
            <Route path='/' exact component={HomePage}/>
            <Route>
                <NavigationBar>
                    <Switch>
                        <Route
                            path='/backtest_options'
                            exact component={auth_enabled ? userIsAuthenticated(BacktestOptionsPage) : BacktestOptionsPage}
                        />
                        <Route
                            path='/backtest_list'
                            exact component={auth_enabled ? userIsAuthenticated(BacktestListPage) : BacktestListPage}
                        />
                        <Route
                            path='/backtest_result'
                            exact component={auth_enabled ? userIsAuthenticated(BacktestResultPage) : BacktestResultPage}/>
                    </Switch>
                </NavigationBar>
            </Route>
            <Route component={NotFoundPage}/>
            <Route path='/error_page' exact component={ErrorPage}/>
        </Switch>
    )
};

export default Routes;
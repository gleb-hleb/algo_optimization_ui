import {connectedRouterRedirect} from 'redux-auth-wrapper/history4/redirect';

export const userIsNotAuthenticated = connectedRouterRedirect({
    wrapperDisplayName: 'UserIsNotAuthenticated',
    redirectPath: '/',
    allowRedirectBack: false,
    authenticatedSelector: state => state.login.token == null
});

export const userIsAuthenticated = connectedRouterRedirect({
    wrapperDisplayName: 'userIsAuthenticated',
    redirectPath: '/landing_page',
    allowRedirectBack: false,
    authenticatedSelector: state => state.login.token !== null
});

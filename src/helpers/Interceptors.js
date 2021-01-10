import axios from 'axios';
import { doLogout } from '../store/login/action';


export const setupRequestInterceptor = (token) => {
    axios.interceptors.request.use(
        function (config) {
            if (!config.headers.common['Authorization']) {
                if (token) {
                    config.headers.common['Authorization'] = `JWT ${token}`;
                } else {
                    return config;
                }
            }
            return config;
        },
        function (error) {
            console.log(error)
            return Promise.reject(error);
        }
    );
}


export const setupResponceInterceptor = (store, history) => {
    axios.interceptors.response.use(
        response => {
            return response;
        },
        error => {
            if ([401, 403].includes(error.response.status)) {
                store.dispatch(doLogout());
                history.push('/')
            }
            return Promise.reject(error);
        }
    );
};
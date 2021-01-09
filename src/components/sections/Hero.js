import React from 'react';
import classNames from 'classnames';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import GoogleLogin from 'react-google-login';
import { doGoogleLogin, googleLoginError } from '../../store/login/action';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';

const Hero = ({className, topOuterDivider, bottomOuterDivider, topDivider, bottomDivider, hasBgColor, invertColor }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const error = useSelector(store => store.login.error);
    const isAuth = useSelector(store => store.login.isAuth);
    const auth_enabled = useSelector(store => store.appProperties.auth_enabled);
    const app_error = useSelector(store => store.appProperties.error);
    const app_loading = useSelector(store => store.appProperties.loading);

    const outerClasses = classNames(
        'hero section center-content',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'hero-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    const responseGoogleSuccess = (response) => {
        dispatch(doGoogleLogin(response.accessToken))
    };

    const responseGoogleFailure = (response) => {
        dispatch(googleLoginError(response.details));
    };

    function handleClick(e) {
        e.preventDefault();
        history.push('/optimization_page')
    }

    const showError = msg => {
        return <span>{msg}</span>;
    };

    const getErrorPage = (error1, error2) => {
        return <section className={outerClasses} >
            <div className="container-sm">
            <div className={innerClasses}>
                <div className="hero-content">
                    <div
                    style={{
                        position: 'absolute', left: '50%', top: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}
                >
                    <span>{error1 ? error1 : error2}</span>
                </div>
                </div>
                    </div>
                </div>
            </section>
    }

    const getLoadingPage = () => {
        return (
            <section className={outerClasses} >
                <div className="container-sm">
                    <div className={innerClasses}>
                        <div className="hero-content">
                
                            <div style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>
                                <CircularProgress disableShrink />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    };

    const getOptimizationButton = () => {
        return (
            <ButtonGroup>
                <Button 
                    tag="a" 
                    color="primary"
                    wideMobile href="https://cruip.com/"
                    onClick={handleClick}>
                    Run Backtesting
                </Button>
            </ButtonGroup>
        )
    }

    const getContentsPage = () => {
        return (
            <section className={outerClasses} >
            <div className="container-sm">
                <div className={innerClasses}>
                <div className="hero-content">
                    <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                        Hey, das ist bright beralussian <span className="text-color-primary">startup</span>
                    </h1>
                    <div className="container-xs">
                    <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                        And we are there to bring you some awesome stuff Bla bla bla bla bla bla bla bla. Still here? Try to clicking buttons below.
                    </p>
                    <div className="reveal-from-bottom" data-reveal-delay="600">

                        {
                            auth_enabled ? (
                                isAuth ? getOptimizationButton() : (
                                    <div className="container-xs">
                                        <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                                            henlo in case u dnt know u can use our app only if ya logged in so pls do it via googl thx
                                        </p>   
                                        <ButtonGroup>
                                            <GoogleLogin
                                                variant="contained"
                                                clientId="264231755039-fvspn2a81tu42bq5nk7rpe6fqa3uiqhd.apps.googleusercontent.com"
                                                buttonText=" Sign In With Google "
                    
                                                onSuccess={responseGoogleSuccess}
                                                onFailure={responseGoogleFailure}
                                            />
                                        </ButtonGroup>
                                    </div>
                                )
                            ) : getOptimizationButton()
                        }
                    </div>
                    </div>
                </div>
                <h1 className="mt-0 mb-50 reveal-from-bottom" data-reveal-delay="200"> </h1>
                {app_error ? showError(app_error) : null}
                <h1 className="mt-0 mb-50 reveal-from-bottom" data-reveal-delay="200"> </h1>
                <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="200px" data-reveal-delay="800">
                
                <iframe title="video" id="ytplayer" type="text/html" width="100%" height="500px"
                    src="https://www.youtube.com/embed/dqOIonni7-Q?autoplay=1&loop=1&color=white&mute=1"
                    frameBorder="0" allowFullScreen></iframe>
                </div>
                </div>
            </div>
            </section>
        );
    };

    React.useEffect(()=>{},[isAuth, app_loading, app_error, error])

    return (
        app_loading ? getLoadingPage() : 
        app_error || error ? getErrorPage(app_error, error) : getContentsPage()
    );
}

export default Hero;
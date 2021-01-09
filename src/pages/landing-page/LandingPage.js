import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import GoogleLogin from 'react-google-login';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { doGoogleLogin, googleLoginError } from '../../store/login/action';
import { useHistory } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundRepeat: 'no-repeat',
    backgroundColor: theme.palette.grey[90],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(10, 2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'flex-end',
  },
  loginError: {
    margin: theme.spacing(10, 2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'flex-end',
    color: 'red',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    width: '100%',
  },
  googleSignIn: {
    margin: theme.spacing(3, 0, 2),
    width: '100%',
    alignContent: "center",
  },
}));


const getContentIfNotLoggedIn = (classes, error, showError, 
    responseGoogleSuccess, responseGoogleFailure) => {
    return (
        <div className={classes.paper}> 
            <Typography component="h1" variant="h5" align="center">
                {'hello in case u dnt know u can use our app only if ya logged in so pls do it via googl or fcbook thx'}
            </Typography>  
            <div className={classes.loginError}>
                {error ? showError(error) : null}
            </div>                
            <GoogleLogin
                variant="contained"
                // move token to config.js thx
                clientId="264231755039-fvspn2a81tu42bq5nk7rpe6fqa3uiqhd.apps.googleusercontent.com"
                className={classes.googleSignIn}
                buttonText="SIGNIN WITH GOOGLE"

                onSuccess={responseGoogleSuccess}
                onFailure={responseGoogleFailure}
            />
        </div>
    );
}


const getContentIfLoggedIn = (classes, onButtonPress) => {
    return (
        <div className={classes.paper}>                   
            <form className={classes.form} noValidate onSubmit={onButtonPress}>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Start optimization
                </Button> 
            </form>
        </div>
    );
}

const getLandingPage = (dispatch, history, auth_enabled, isAuth, classes, error) => {
    const responseGoogleSuccess = (response) => {
        dispatch(doGoogleLogin(response.accessToken))
    };

    const responseGoogleFailure = (response) => {
        dispatch(googleLoginError(response.details));
    };

    const showError = msg => {
        return <span>{msg}</span>;
    };

    const onButtonPress = () => {
        history.push('/optimization_page')
    }

    return <Grid container component="main" className={classes.root}>
            <CssBaseline />
                <Grid item xs={false} sm={4} md={7} className={classes.image} ></Grid>
                <Grid item xs={4} sm={8} md={5} component={Paper} elevation={6} square >
                <div className={classes.paper}>
                    
                    {auth_enabled && !isAuth ? (
                        getContentIfNotLoggedIn(classes, error, showError, 
                            responseGoogleSuccess, responseGoogleFailure)
                    ) : (
                        getContentIfLoggedIn(classes, onButtonPress)
                    )}
                    <Box mt={5}>
                        <Typography variant="body2" color="textSecondary" align="center">
                            {'Copyright © PROJECTPROJECTDEVELOPMENT'}
                            {new Date().getFullYear()}
                            {'.'}
                        </Typography>
                    </Box>
                </div>
                </Grid>
            </Grid>
}

const getLoadingPage = () => {
    return <div
        style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)'
        }}
        >
            <CircularProgress disableShrink />
        </div>
}

const getErrorPage = (msg) => {
    return <div
    style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }}
    >
        <span>{msg}</span>
    </div>
}

const LandingPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const error = useSelector(store => store.login.error);
    const isAuth = useSelector(store => store.login.isAuth);
    const auth_enabled = useSelector(store => store.appProperties.auth_enabled);
    const app_error = useSelector(store => store.appProperties.error);
    const app_loading = useSelector(store => store.appProperties.loading);

    React.useEffect(()=>{},[isAuth, app_loading, app_error])

    return (
        <>
        {app_loading ? getLoadingPage() : 
            app_error ? getErrorPage(app_error) : getLandingPage(dispatch, history, auth_enabled, isAuth, classes, error)
        }
        </>
    );

};

export default LandingPage;
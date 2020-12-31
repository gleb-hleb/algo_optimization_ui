import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { doLogin, doGoogleLogin, googleLoginError } from '../../redux/login/action';
//import { Paper, Grid, TextField, CssBaseline, Button, Typography } from '@material-ui/core/';

import GoogleLogin from 'react-google-login';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: theme.palette.grey[0],
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
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(10, 0, 2),
    width: '100%',
    height: 4,
    maxWidth: '500px'
  },
}));


const SignUpPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const error = null;//useSelector(store => store.signup.error);
    const auth_enabled = useSelector(store => store.appProperties.auth_enabled);

    const [user, setUser] = useState({username: '', email: '', password: '', passwordConfirmation: ''});
    const {username, email, password, passwordConfirmation} = user;
    React.useEffect(() => {
        console.log('signup')
    },[] )

    const onChange = e => {
        setUser({
            ...user, 
            [e.target.name]: e.target.value
        });
    };

    const showError = msg => {
        return <span>{msg}</span>;
    };

    const onSubmit = e => {
        e.preventDefault();
        //dispatch(doSignUp({username, password}));
    };

    return (
        <>
            {auth_enabled === null ? null : (
                <Grid container component="main" className={classes.root}>
                <CssBaseline />
                    <Grid container spacing={3} className={classes.root}>
                        <Grid item xs={3} className={classes.root}></Grid>
                        <Grid item xs={6}>
                            <Grid
                                container
                                xs={false}
                                spacing={0}
                                direction="column"
                                alignItems="center"
                                justify="center"
                                style={{ minHeight: '100vh' }}
                                component={Paper} elevation={6} square
                                >
                                    <div className={classes.paper}>
                                        <form className={classes.form} noValidate  onSubmit={onSubmit}>
                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="username"
                                                label="Username"
                                                name="username"
                                                autoComplete="username"
                                                onChange={onChange}
                                            />
                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="email"
                                                label="Email Address"
                                                name="email"
                                                autoComplete="email"
                                                onChange={onChange}
                                            />
                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                required
                                                fullWidth
                                                name="password"
                                                label="Password"
                                                type="password"
                                                id="password"
                                                onChange={onChange}
                                            />
                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                required
                                                fullWidth
                                                name="passwordConfirmation"
                                                label="Password Confirmation"
                                                type="passwordConfirmation"
                                                id="passwordConfirmation"
                                                onChange={onChange}
                                            />
                                            <div className='signup-error'>
                                                {error ? showError(error) : null}
                                            </div>
                                            <Button
                                                type="submit"
                                                fullWidth
                                                variant="contained"
                                                color="primary"
                                            >
                                                Sign Up
                                            </Button>
                                        </form>
                                    </div>
                            </Grid>
                        </Grid>
                    <Grid item xs={3} className={classes.root}></Grid>
                </Grid>
            </Grid>
            )}
        </>
    );
};

export default SignUpPage;

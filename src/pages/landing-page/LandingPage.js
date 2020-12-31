import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
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
import { makeStyles } from '@material-ui/core/styles';
import { doLogin, doGoogleLogin, googleLoginError } from '../../redux/login/action';
import logo from '../../assets/start_page.png'
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: logo,
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
    margin: theme.spacing(3, 0, 2),
    width: '100%',
  },
  googleSignIn: {
    margin: theme.spacing(3, 0, 2),
    width: '100%',
    alignContent: "center",
  },
}));


const LandingPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const error = useSelector(store => store.login.error);
    const auth_enabled = useSelector(store => store.appProperties.auth_enabled);

    const [user, setUser] = useState({username: '', password: ''});
    const {username, password} = user;
    
    const responseGoogleSuccess = (response) => {
        dispatch(doGoogleLogin(response.accessToken))
    };

    const responseGoogleFailure = (response) => {
        dispatch(googleLoginError(response.error));
        setUser({username: '', password: ''});
    };

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
        dispatch(doLogin({username, password}));
    };

    const onSignUp = e => {
        history.push('/signup_page')
    };

    return (
        <>
            {auth_enabled === null ? null : (
            <Grid container component="main" className={classes.root}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7} className={classes.image} >
                    <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justify="center"
                        style={{ minHeight: '100vh' }}
                        >
                        {/*<Grid item xs={3}>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/e4TFD2PfVPw" 
                                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                            </iframe>
                        </Grid>   */}
                        
                    </Grid> 
                </Grid>
                <Grid item xs={4} sm={8} md={5} component={Paper} elevation={6} square >
                    <div className={classes.paper}>
    
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <form className={classes.form} noValidate onSubmit={onSubmit}>
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
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={onChange}
                            />
                            <div className='login-error'>
                                {error ? showError('* Неправильно введен логин или пароль') : null}
                            </div>
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                        <form className={classes.form} noValidate onSubmit={onSignUp}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Sign Up
                            </Button>
                        </form>
                            
                        <Typography component="h1" variant="h5">
                            Or
                        </Typography>
                        
                        <GoogleLogin
                            fullWidth
                            variant="contained"
                            clientId="264231755039-fvspn2a81tu42bq5nk7rpe6fqa3uiqhd.apps.googleusercontent.com"
                            className={classes.googleSignIn}
                            buttonText="SIGNIN WITH GOOGLE"
                            onSuccess={responseGoogleSuccess}
                            onFailure={responseGoogleFailure}
                        />
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
            )}
        </>
    );

};

export default LandingPage;
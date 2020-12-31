import React from 'react';
import {useDispatch} from 'react-redux';
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
import { doGoogleLogin, googleLoginError } from '../../redux/login/action';

// TODO
//const API_ENDPOINT = window.REACT_APP_API_ENDPOINT;
const API_ENDPOINT = "http://localhost:3000"

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${API_ENDPOINT}/assets/start_page.png)`,
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

const Start = () => {
    const classes = useStyles();
    const dispatch = useDispatch()

    const responseGoogleSuccess = (response) => {
        dispatch(doGoogleLogin(response.accessToken))
        console.log(response);
        console.log(response.accessToken);
        console.log('Success');
        //console.log(accesstoken);
        //let res = await axios.post(
        //"http://localhost:8000/rest-auth/google/",
        //{access_token: accesstoken,}
        //);
        //console.log(res);
        //return await res.status;
    };

    const responseGoogleFailure = (response) => {
        dispatch(googleLoginError('Google Login Failure'))
        console.log(response);
        console.log('Failure');
    }

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={4} sm={8} md={5} component={Paper} elevation={6} square >
                <div className={classes.paper}>

                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
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
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
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
    );
}

export default Start;
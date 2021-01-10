import React, {useState} from 'react';
import styles from './support.module.css'
import {Button, Card, CardContent, CssBaseline, TextField, Typography} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {postFeedback} from "../../store/feedback/actions";
import NavigationBar from "../../components/navigationBar/navigation_bar";

const Support = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = (event) => {
        switch (event.target.id) {
            case 'outlined-name':
                setName(event.target.value);
                break;
            case 'outlined-email':
                setEmail(event.target.value);
                break;
            case 'outlined-username':
                setUsername(event.target.value);
                break;
            case 'outlined-message':
                setMessage(event.target.value);
                break;
            default:
                break;
        }
    }
    const handleClick = () => {
        const body = {
            telegram_profile: username,
            title: 'hz',
            message: message,
            created_by: name
        };
        dispatch(postFeedback(body));
    }

    return (
        <React.Fragment>
            {/*<NavigationBar/>*/}
            {/*<CssBaseline/>  */}
            <div className={styles.tab}>
                <div className={styles.about}>
                    <h1>About [project_name]</h1>
                    <Card className={styles.card}>
                        <CardContent>
                            <Typography gutterBottom>
                                Sample text///Sample text///Sample text///Sample text///Sample text///Sample text///Sample
                                text///Sample text///Sample text///Sample text///Sample text///Sample text///Sample
                                text///Sample text///Sample text///Sample text///Sample text///Sample text///Sample
                                text///Sample text///Sample text///Sample text///Sample text///Sample text///Sample
                                text///Sample text///Sample text///Sample text///Sample text///Sample text///Sample
                                text///Sample text///Sample text///Sample text///Sample text///Sample text///Sample
                                text///Sample text///Sample text///Sample text///Sample text///
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div className={styles.form}>
                    <div style={{width: '70%', margin: '21px 15% 0 15%'}}>
                        <div className={styles.text}>
                            Do you have any questions or suggestions? Feel free
                            to contact us using the form below.
                        </div>
                    </div>
                    <h1 style={{textAlign: 'center', color: 'black'}}>Contact Us</h1>
                    <Card className={styles.card}>
                        <CardContent>
                            <div className={styles.input}>
                                <TextField
                                    onChange={handleChange}
                                    style={{width: '100%'}}
                                    id="outlined-name"
                                    label="Name"
                                    variant="outlined"/>
                            </div>
                            <div className={styles.input}>
                                <TextField
                                    onChange={handleChange}
                                    style={{width: '100%'}}
                                    id="outlined-email"
                                    label="Email"
                                    variant="outlined"/>
                            </div>
                            <div className={styles.input}>
                                <TextField
                                    onChange={handleChange}
                                    style={{width: '100%'}}
                                    id="outlined-username"
                                    label="Telegram username"
                                    variant="outlined"/>
                            </div>
                            <div className={styles.input}>
                                <TextField
                                    onChange={handleChange}
                                    style={{width: '100%'}}
                                    multiline
                                    rows={6}
                                    id="outlined-message"
                                    label="Massage"
                                    variant="outlined"/>
                            </div>
                            <div className={styles.button}>
                                <Button
                                    onClick={handleClick}
                                    fullWidth={true}
                                    variant='contained'
                                    size='large'
                                    color='primary'>
                                    SEND
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Support;
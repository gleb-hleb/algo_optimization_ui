import React from 'react';
import styles from './support.module.css'
import {Button, Card, CardContent, TextField, Typography} from "@material-ui/core";

const Support = () => {
    return (
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
                <h1 style={{textAlign: 'center'}}>Contact Us</h1>
                <Card className={styles.card}>
                    <CardContent>
                        <div className={styles.input}>
                            <TextField
                                style={{width: '100%'}}
                                id="outlined-name"
                                label="Name"
                                variant="outlined"/>
                        </div>
                        <div className={styles.input}>
                            <TextField
                                style={{width: '100%'}}
                                id="outlined-email"
                                label="Email"
                                variant="outlined"/>
                        </div>
                        <div className={styles.input}>
                            <TextField
                                style={{width: '100%'}}
                                id="outlined-username"
                                label="Telegram username"
                                variant="outlined"/>
                        </div>
                        <div className={styles.input}>
                            <TextField
                                style={{width: '100%'}}
                                multiline
                                rows={6}
                                id="outlined-message"
                                label="Massage"
                                variant="outlined"/>
                        </div>
                        <div className={styles.button}>
                            <Button
                                fullWidth='true'
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
    )
}

export default Support;
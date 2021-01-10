import React from 'react';
import {Card, CardContent, Divider, Typography} from "@material-ui/core";
import {useSelector} from "react-redux";
import Grid from "@material-ui/core/Grid";

const Benchmark = () => {
    const ratio = useSelector(store => store.ratio) || '-';
    const total = useSelector(store => store.ratio) || '-';
    const benchmark = useSelector(store => store.ratio) || '-';

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={3}>
                    <Card style={{marginLeft: '10px', marginTop: '10px'}}>
                        <CardContent>
                            <Typography
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    margin: '0 0 0 0',
                                    float: 'left'
                                }}
                                component="div">
                                <Typography>Sharpe Ratio</Typography>
                                <Typography
                                    style={{textAlign: 'center'}}
                                >
                                    {ratio}
                                </Typography>
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card style={{marginLeft: '10px', marginTop: '10px'}}>
                        <CardContent>
                            <Typography
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    margin: '0 0 0 12px',
                                    float: 'left'
                                }}
                                component="div">
                                <Typography>Total return (%)</Typography>
                                <Typography
                                    style={{textAlign: 'center'}}
                                >
                                    {total}
                                </Typography>
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card style={{marginLeft: '10px', marginTop: '10px'}}>
                        <CardContent>
                            <Typography
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    margin: '0 0 0 12px',
                                    float: 'left'
                                }}
                                component="div">
                                <Typography>Benchmark Total Return (%)</Typography>
                                <Typography
                                    style={{textAlign: 'center'}}
                                >
                                    {benchmark}
                                </Typography>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    )
        ;
};

export default Benchmark;
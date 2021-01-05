import React from 'react';
import {Typography} from "@material-ui/core";
import {useSelector} from "react-redux";

const Benchmark = () => {
    const ratio = useSelector(store => store.ratio) || '-';
    const total = useSelector(store => store.ratio) || '-';
    const benchmark = useSelector(store => store.ratio) || '-';

    return (
        <div>
            <Typography
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '22px 0 0 0',
                    float: 'left'
                }}
                component="div">
                <Typography component="h5">Sharpe Ratio</Typography>
                <Typography
                    style={{textAlign: 'center'}}
                    component="h5">
                    {ratio}
                </Typography>
            </Typography>
            <Typography
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '22px 0 0 12px',
                    float: 'left'
                }}
                component="div">
                <Typography component="h5">Total return (%)</Typography>
                <Typography
                    style={{textAlign: 'center'}}
                    component="h5">
                    {total}
                </Typography>
            </Typography>
            <Typography
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '22px 0 0 12px',
                    float: 'left'
                }}
                component="div">
                <Typography component="h5">Benchmark Total Return (%)</Typography>
                <Typography
                    style={{textAlign: 'center'}}
                    component="h5">
                    {benchmark}
                </Typography>
            </Typography>
        </div>
    );
};

export default Benchmark;
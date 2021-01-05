import React from 'react'
import Loadable from 'react-loadable';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import RefreshIcon from '@material-ui/icons/Refresh';
import Fallback from "./SuspenseFallback";


export default function MyLoadable(opts) {
    return Loadable(Object.assign({
        loading: LoadingComponent,
        delay: 300,
        timeout: 10000,
    }, opts));
};

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translateX(-50%) translateY(-50%)',
        },
    }),
);

const LoadingComponent = (props) => {
    const classes = useStyles();
    if (props.error) {
        return <div className={classes.root}>{'Ошибка загрузки!'}
            <Button size={'large'} color="primary"
                    variant="contained"
                    onClick={props.retry}
                    endIcon={<RefreshIcon/>}
            >
                {' Попробуйте перезагрузить страницу'}
            </Button></div>;
    } else if (props.timedOut) {
        return <div
            className={classes.root}>{'Слишком долгая загрузка...'}
            <Button size={'large'} color="primary"
                    variant="contained"
                    onClick={props.retry}
                    endIcon={<RefreshIcon/>}
            >
                {' Попробуйте перезагрузить страницу'}
            </Button></div>;
    } else if (props.pastDelay) {
        return <Fallback/>
    } else {
        return null;
    }
};

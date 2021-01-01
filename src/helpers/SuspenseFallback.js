import React from 'react'
import {createStyles, makeStyles} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

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

const Fallback = () => {
    const classes = useStyles({});
    return <div className={classes.root}>
        <CircularProgress size={50}/>
    </div>
};

export default Fallback
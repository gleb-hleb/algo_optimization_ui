import React from 'react';
import styles from './popUpMenu.module.css'

import {Button, Menu, MenuItem, Typography} from '@material-ui/core';
import {useDispatch} from "react-redux";

const PopUpMenu = ({items, name, action, initialItem}) => {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const tradingPairs = items ? items : [];

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (text) => {
        setAnchorEl(null);
        dispatch(action(text));
    };

    return (
        <div>
            <span className={styles.name}>{`${name}:`}</span>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <Typography component={'span'} variant={'body2'}>
                    {initialItem?initialItem:'-'}
                </Typography>
            </Button>
            <Menu
                id={`${name}-menu`}
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
            >
                {tradingPairs.map((item) => (
                    <MenuItem
                        key={item}
                        id={item}
                        onClick={() => handleClose(item)}>
                        {item}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
};

export default PopUpMenu;
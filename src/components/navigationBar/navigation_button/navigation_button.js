import React from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from "react-router-dom";
import { doLogout } from '../../../store/login/action';

import styles from './navigation_button.module.css';

const NavigationButton = ({image, to, url, disc}) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = () => {
        if (disc) dispatch(doLogout())
        else {
            if (to) history.push(to);
            if (url) window.open(url);
        }
    }

    return (
        <div className={styles.button}>
            <img
                src={image}
                alt={"bar-icon"}
                onClick={handleClick}
            />
        </div>
    );
};

export default NavigationButton;
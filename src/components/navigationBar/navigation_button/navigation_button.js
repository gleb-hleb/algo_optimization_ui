import React from 'react';
import {useHistory} from "react-router-dom";

import styles from './navigation_button.module.css';

const NavigationButton = ({image, to, url}) => {
    const history = useHistory();

    const handleClick = () => {
        if (to) history.push(to);
        if (url) window.open(url);
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
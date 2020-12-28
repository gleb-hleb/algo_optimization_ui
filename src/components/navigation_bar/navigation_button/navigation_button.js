import React from 'react';
import {NavLink, useHistory} from "react-router-dom";

import styles from './navigation_button.module.css';

const NavigationButton = ({image, to}) => {
    const history = useHistory();

    const handleClick = () => {
        history.push(to);
    }

    return (
        <div
            // to={to}
            className={styles.button}>
            <img
                src={image}
                alt={"bar-icon"}
                onClick={handleClick}
            />
        </div>
    );
};

export default NavigationButton;
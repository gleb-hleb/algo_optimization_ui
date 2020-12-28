import React from 'react';
import {useHistory} from "react-router-dom";

import styles from './navigation_button.module.css';

const NavigationButton = ({image, to}) => {
    const history = useHistory();

    const handleClick = () => {
        history.push(to);
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
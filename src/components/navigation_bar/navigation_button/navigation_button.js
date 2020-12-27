import React from 'react';

import styles from './navigation_button.module.css';

const NavigationButton = ({ image }) => {
    return (
        <div className={styles.button}>
            <img src={image} alt={"bar-icon"}/>
        </div>
    );
};

export default NavigationButton;
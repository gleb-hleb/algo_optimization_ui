import React from 'react';

import NavigationButton from './navigation_button';
import styles from './navigation_bar.module.css';
import SettingsImg from './assets/icon-settings.png';
import SupportImg from './assets/icon-support.png';
import SystemImg from './assets/icon-system.png';
import TelegramImg from './assets/icon-telegram.png';

const NavigationBar = () => {
    return (
        <div className={styles.bar}>
            <NavigationButton image={SystemImg}/>
            <NavigationButton image={SupportImg}/>
            <NavigationButton image={TelegramImg}/>
            <NavigationButton image={SettingsImg}/>
        </div>
    );
};
export default NavigationBar;
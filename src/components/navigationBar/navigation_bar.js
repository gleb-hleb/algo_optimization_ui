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
            <div className={styles.topContent}>
                <NavigationButton image={SystemImg} to={'/optimization_page'}/>
                <NavigationButton image={SupportImg} to={'/support_page'}/>
                <NavigationButton image={TelegramImg} to={undefined} url={'https://t.me/tutby_official'}/>
            </div>
            <div className={styles.bottomContent}>
                <NavigationButton image={SettingsImg} to={'/settings_page'} disc={true}/>
            </div>
        </div>
    );
};
export default NavigationBar;
import React from 'react';

import LogoImg from './logo.png';
import styles from './logo.module.css'

const Logo = () => (
    <div className={styles.logo}>
        <img src={LogoImg} alt="logo"/>
    </div>
);

export default Logo;
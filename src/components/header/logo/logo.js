import React from 'react';

import LogoImg from './logo.png';
import styles from './logo.module.css'

const Logo = () => (
    <img className={styles.logo} src={LogoImg} alt="logo"/>
);

export default Logo;
import React, { useRef } from 'react';
import classNames from 'classnames';
import Logo from '../partials/Logo';


const Header = ({className}) => {

  const nav = useRef(null);

  const classes = classNames(
    'site-header', false,
    className
  );

  return (
    <header className={classes}>
      <div className="container">
        <div className={classNames('site-header-inner', false)}>
          <Logo />
        </div>
      </div>
    </header>
  );
}

export default Header;

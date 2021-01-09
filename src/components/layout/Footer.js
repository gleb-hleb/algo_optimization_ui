import React from 'react';
import classNames from 'classnames';
import FooterSocial from '../partials/FooterSocial';
import FooterNav from '../partials/Partials';
import Logo from '../partials/Logo';

const Footer = ({className}) => {
  const classes = classNames(
    'site-footer center-content-mobile', false, className
  );

  return (
    <footer className={classes}>
      <div className="container">
        <div className={classNames('site-footer-inner', 'has-top-divider')}>
          <div className="footer-top space-between text-xxs">
            <Logo />
            <FooterSocial />
          </div>
          <div className="footer-bottom space-between text-xxs invert-order-desktop">
            <FooterNav />
            <div className="footer-copyright">Made by PROJECTPROJECTDEVELOPMENT. All right reserved</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
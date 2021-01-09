import React from 'react';
import classNames from 'classnames';


const Logo = ({className}) => {
    const classes = classNames('brand', className);

    return (
        <div className={classes} >
            <h1 className="m-0">
            </h1>
        </div>
    );
}

export default Logo;
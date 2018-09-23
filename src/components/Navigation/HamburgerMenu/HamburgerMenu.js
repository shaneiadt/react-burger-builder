import React from 'react';

import classes from './HamburgerMenu.css';
import Aux from '../../../hoc/Aux';

const hamburgerMenu = (props) => {
    return (
        <Aux>
            <div className={classes.HamburgerMenu} onClick={props.clicked}>
                <div className={classes.Bar1}></div>
                <div className={classes.Bar2}></div>
                <div className={classes.Bar3}></div>
            </div>
            <div className={classes.DesktopView}>
                Menu Text
            </div>
        </Aux>
    );
};

export default hamburgerMenu;
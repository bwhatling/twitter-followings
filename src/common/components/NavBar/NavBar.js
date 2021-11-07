import React from 'react';

import PropTypes from 'prop-types';
import './NavBar.sass'

const NavBar = ({navigationButtons}) => {
    return (
        <div className="navbar-container">
            <div className="navbar-nav-buttons">
                {navigationButtons}
            </div>
        </div>
    )
}

NavBar.propTypes = {
    navigationbuttons: PropTypes.arrayOf(PropTypes.element).isRequired
}

export default NavBar;
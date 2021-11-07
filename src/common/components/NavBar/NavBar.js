import React from "react";

import PropTypes from "prop-types";
import "./NavBar.sass";

const NavBar = ({ navigationButtons }) => (
  <div className="navbar-container">
    <div className="navbar-nav-buttons">{navigationButtons}</div>
  </div>
);

NavBar.propTypes = {
  navigationButtons: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default NavBar;

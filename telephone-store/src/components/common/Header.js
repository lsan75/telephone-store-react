import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div>
        This is the header
        <NavLink to="/phones" activeClassName="active">
          List of Phones
        </NavLink>
        <NavLink to="/" activeClassName="active">
          Home
        </NavLink>
      </div>
    );
  }
}

export default Header;

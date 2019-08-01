import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MenuList from "./Menu/MenuList";
import MenuItem from "./Menu/MenuItem";
import MenuLink from "./Menu/MenuLink";

class Header extends Component {
  render() {
    return (
      <MenuList>
          <MenuItem>
            <MenuLink to="/">Home</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/radio/">Radio</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/playlists/">Playlists</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/help/">Help</MenuLink>
          </MenuItem>
      </MenuList>
    );
  }
}

export default Header;

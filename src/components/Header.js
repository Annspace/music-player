import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/radio/">Radio</Link>
          </li>
          <li>
            <Link to="/playlists/">Playlists</Link>
          </li>
          <li>
            <Link to="/help/">Help</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;

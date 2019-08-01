import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuItem from './Menu/MenuItem';
import MenuLink from './Menu/MenuLink';

class Playlist extends Component {
  render() {
    const { id, title } = this.props;
    return (
        <MenuItem key={id}>
          <MenuLink to={`/playlists/${id}`}>
            {title}
          </MenuLink>
        </MenuItem>
    );
  }
}

Playlist.ptopTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default Playlist;

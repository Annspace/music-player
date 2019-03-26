import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Playlist extends Component {
  render() {
    const { id, title } = this.props;
    return (
      <div>
        <div key={id}>
          <Link to={`/playlists/${id}`}>
            {title}
          </Link>
        </div>
      </div>
    );
  }
}

Playlist.ptopTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default Playlist;

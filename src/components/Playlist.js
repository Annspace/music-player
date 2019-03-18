import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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

export default Playlist;

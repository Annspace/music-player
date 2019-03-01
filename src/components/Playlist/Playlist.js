import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Playlist.css';
import Track from '../Track/index';

class Playlist extends Component {
  render() {
    const { songs } = this.props;
    return (
      <div>
        {
         songs.map(song => (
           <Track
             key={song.id}
             title={song.title}
             artist={song.artist}
             duration={song.duration}
           />
         ))
      }
      </div>
    );
  }
}

Playlist.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Playlist;
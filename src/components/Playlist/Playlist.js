import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Playlist.css';
import Track from '../Track';

class Playlist extends Component {
  render() {
    const { songs } = this.props;
    return (
      <div>
        {
         songs.map((song) => {
           const {
             id, title, artist, duration,
           } = song;
           return (
             <Track
               key={id}
               title={title}
               artist={artist}
               duration={duration}
             />
           );
         })
      }
      </div>
    );
  }
}

Playlist.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Playlist;

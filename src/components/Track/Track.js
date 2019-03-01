import React, { Component } from 'react';
import './Track.css';
import PropTypes from 'prop-types';

class Track extends Component {
  render() {
    const { title, artist, duration } = this.props;
    return (
      <div>
        {title}
        {' '}
        <b>{artist}</b>
        {' '}
        {duration}
        {' '}
min
      </div>
    );
  }
}

Track.propTypes = {
  title: PropTypes.string,
  artist: PropTypes.string,
  duration: PropTypes.number,
};

Track.defaultProps = {
  title: 'No name',
  artist: 'No sinder',
  duration: 'Unknown',
};

export default Track;

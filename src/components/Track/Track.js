import React from 'react';
import './Track.css';
import PropTypes from 'prop-types';
import secToMin from 'sec-to-min';

function Track(props) {
  const { title, artist, duration } = props;
  return (
    <div>
      {title}
      {' '}
      <b>{artist}</b>
      {' '}
      {secToMin(duration)}
      {' '}
      min
    </div>
  );
}

Track.propTypes = {
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  duration: PropTypes.number,
};

Track.defaultProps = {
  duration: 'Unknown',
};

export default Track;

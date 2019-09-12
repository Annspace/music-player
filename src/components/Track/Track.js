import React from 'react';
import './Track.css';
import PropTypes from 'prop-types';
import secToMin from 'sec-to-min';
import TableItem from "../Table/TableItem";
import AddButton from '../Table/AddButton';
import PlayButton from '../Table/PlayButton';

function Track(props) {
  const { title, artist, duration } = props;
  return (
    <tr>
      <TableItem>
        <AddButton/>
      </TableItem>
      <TableItem>
        <PlayButton/>
      </TableItem>
      <TableItem>
        {title}
      </TableItem>
      <TableItem>
        {artist}
      </TableItem>
      <TableItem>
        {secToMin(duration)} min
      </TableItem>
    </tr>
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

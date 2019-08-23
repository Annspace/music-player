import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Error from '../components/Error';
import Track from '../components/Track';
import MainContentHeader from '../components/MainContentHeader';
import Table from '../components/Table/Table';
import TableHeader from '../components/Table/TableHeader';
import { getTracks } from '../actions';

class Tracks extends Component {
  componentDidMount() {
    const playlistId = this.props.match.params.id;
    const { getData } = this.props;
    getData(playlistId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      const playlistId = this.props.match.params.id;
      const { getData } = this.props;
      getData(playlistId);
    }
  }

  render() {
    const { tracksItems, isLoading, errorText } = this.props;
    return (
      <React.Fragment>
        <MainContentHeader/>
        {errorText && <Error errorText={errorText} />}
        <Table>
          <tbody>
            <tr>
              <TableHeader>&nbsp;</TableHeader>
              <TableHeader>&nbsp;</TableHeader>
              <TableHeader>Title</TableHeader>
              <TableHeader>Artist</TableHeader>
              <TableHeader>Duration</TableHeader>
            </tr>
              {
                tracksItems.map((track) => {
                  const {
                    id, title, artist, duration,
                  } = track;
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
          </tbody>

        </Table>
      </React.Fragment>
    );
  }
}

Tracks.propTypes = {
  getData: PropTypes.func.isRequired,
  tracksItems: PropTypes.instanceOf(Array).isRequired,
  isLoading: PropTypes.bool.isRequired,
  errorText: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  tracksItems: state.tracks.tracksItems,
  isLoading: state.tracks.isLoading,
  errorText: state.tracks.errorText,
});
const mapDispatchToProps = dispatch => ({
  getData: id => dispatch(getTracks(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tracks);

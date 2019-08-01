import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import Error from '../components/Error';
import Track from '../components/Track';
import { getTracks } from '../actions';

class Tracks extends Component {
  componentDidMount() {
    console.log('Load data from back (by componentDidMount)');
    const playlistId = this.props.match.params.id;
    const { getData } = this.props;
    getData(playlistId);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      console.log('Load data from back (by componentDidUpdate)');
      const playlistId = this.props.match.params.id;
      const { getData } = this.props;
      getData(playlistId);
    }
  }

  render() {
    const { tracksItems, isLoading, errorText } = this.props;
    return (
      <div>
        {isLoading && (
          <Loader
            type="Ball-Triangle"
            color="#00BFFF"
            height="100"
            width="100"
          />
        )}
        {errorText && <Error errorText={errorText} />}
        <div>
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
        </div>
      </div>
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

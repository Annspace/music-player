import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import Error from '../components/Error';
import { getPlaylists } from '../actions';
import Playlist from '../components/Playlist';

class Playlists extends Component {
  componentDidMount() {
    const { getData } = this.props;
    getData();
  }

  render() {
    const {
      playlistsItems, isLoading, errorText, getData,
    } = this.props;
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
        {errorText && (
          <div>
            <Error errorText={errorText} />
            <button type="button" onClick={getData}>Try again!</button>
          </div>
        )}
        {playlistsItems.map(list => (
          <Playlist key={list.id} id={list.id} title={list.title} />
        ))}
      </div>
    );
  }
}

Playlists.propTypes = {
  getData: PropTypes.func.isRequired,
  playlistsItems: PropTypes.instanceOf(Array).isRequired,
  isLoading: PropTypes.bool.isRequired,
  errorText: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  playlistsItems: state.playlists.playlistsItems,
  isLoading: state.playlists.isLoading,
  errorText: state.playlists.errorText,
});
const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getPlaylists()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Playlists);

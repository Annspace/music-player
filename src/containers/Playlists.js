import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { API_HOST } from '../config';
import { getPlaylists, loadingPlaylists } from '../actions';
import Playlist from '../components/Playlist';

class Playlists extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.loadingPlaylists();
  }

  render() {
    const { playlists, isLoading, errorText } = this.state;
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
            {errorText}
            {' '}
            <button type="button" onClick={this.getData}>Try again!</button>
          </div>
        )}
        {playlists.map(list => (
          <Playlist key={list.id} id={list.id} title={list.title} />
        ))}
      </div>
    );
  }
}

Playlists.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  ...state,
});
const mapDispatchToProps = dispatch => ({
  loadingPlaylists: () => dispatch(loadingPlaylists()),
  getPlaylists: () => dispatch(getPlaylists()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Playlists);

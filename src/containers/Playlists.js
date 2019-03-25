import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { getPlaylists } from '../actions';
import Playlist from '../components/Playlist';

class Playlists extends Component {
  componentDidMount() {
    const { getData } = this.props;
    getData();
  }

  render() {
    const {
      playlists, isLoading, errorText, getData,
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
            {errorText}
            {' '}
            <button type="button" onClick={getData}>Try again!</button>
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
  getData: PropTypes.func.isRequired,
  playlists: PropTypes.instanceOf(Array).isRequired,
  isLoading: PropTypes.bool.isRequired,
  errorText: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  ...state,
});
const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getPlaylists()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Playlists);

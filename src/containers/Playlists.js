import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Error from '../components/Error';
import { getPlaylists } from '../actions';
import Playlist from '../components/Playlist';
import MenuList from '../components/Menu/MenuList';


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
      <MenuList>
        {errorText && (
          <div>
            <Error errorText={errorText}/>
            <button type="button" onClick={getData}>Try again!</button>
          </div>
        )}
        {playlistsItems.map(list => (
          <Playlist key={list.id} id={list.id} title={list.title} />
        ))}
      </MenuList>
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

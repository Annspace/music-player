import { combineReducers } from 'redux';
import playlists from './playlistsReducer';
import tracks from './tracksReducer';

export default combineReducers({
  playlists,
  tracks,
});

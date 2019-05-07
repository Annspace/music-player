import { combineReducers } from 'redux';
import playlists from './playlistsReducer';
import tracks from './tracksReducer';
import auth from './authReducer';

export default combineReducers({
  playlists,
  tracks,
  authUser: auth,
});

import { GET_PLAYLISTS, GET_PLAYLISTS_SUCCSESS, GET_PLAYLISTS_ERROR } from '../actions';

const playlists = (state = { playlistsItems: [], isLoading: false, errorText: '' }, action) => {
  switch (action.type) {
    case GET_PLAYLISTS:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case GET_PLAYLISTS_SUCCSESS:
      return Object.assign({}, state, {
        isLoading: false,
        playlistsItems: action.playlists,
      });
    case GET_PLAYLISTS_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        errorText: action.error,
      });
    default:
      return state;
  }
};

export default playlists;

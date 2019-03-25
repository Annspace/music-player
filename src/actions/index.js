import axios from 'axios';
import { API_HOST } from '../config';

export const GET_PLAYLISTS = 'GET_PLAYLISTS';
export const GET_PLAYLISTS_SUCCSESS = 'GET_PLAYLISTS_SUCCSESS';
export const GET_PLAYLISTS_ERROR = 'GET_PLAYLISTS_ERROR';

function getPlaylistsSuccsess(playlists) {
  return {
    type: GET_PLAYLISTS_SUCCSESS,
    playlists,
  };
}
function getPlaylistsError(error) {
  return {
    type: GET_PLAYLISTS_ERROR,
    error,
  };
}

export function getPlaylists() {
  return (dispatch) => {
    dispatch({ type: GET_PLAYLISTS });
    axios.get(`${API_HOST}/playlists`)
      .then((response) => {
        dispatch(getPlaylistsSuccsess(response.data));
      })
      .catch((error) => {
        dispatch(getPlaylistsError(error));
      });
  };
}

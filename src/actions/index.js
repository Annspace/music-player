import axios from 'axios';

export const LOADING = 'LOADING';
export const GET_PLAYLISTS_SUCCSESS = 'GET_PLAYLISTS_SUCCSESS';
export const GET_PLAYLISTS_ERROR = 'GET_PLAYLISTS_ERROR';

export function loadingPlaylists() {
  return {
    type: LOADING,
  };
}

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
    axios.get('http://176.57.217.40:3000/playlists')
      .then((response) => {
        dispatch(getPlaylistsSuccsess(response.data));
      })
      .catch((error) => {
        dispatch(getPlaylistsError(error));
      });
  };
}

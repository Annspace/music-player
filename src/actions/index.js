import axios from 'axios';

function addPlaylists(playlists) {
  return {
    type: 'GET_PLAYLISTS',
    playlists,
  };
}

function getPlaylists() {
  return (dispatch) => {
    axios.get('http://176.57.217.40:3000/playlists/')
      .then((response) => {
        dispatch(addPlaylists(response.data));
      });
  };
}

export default getPlaylists;

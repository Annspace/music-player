import { GET_TRACKS, GET_TRACKS_SUCCSESS, GET_TRACKS_ERROR } from '../actions';

const tracks = (state = { tracksItems: [], isLoading: false, errorText: '' }, action) => {
  switch (action.type) {
    case GET_TRACKS:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case GET_TRACKS_SUCCSESS:
      return Object.assign({}, state, {
        isLoading: false,
        tracksItems: action.tracks,
      });
    case GET_TRACKS_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        errorText: action.error,
      });
    default:
      return state;
  }
};

export default tracks;

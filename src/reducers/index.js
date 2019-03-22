import { LOADING, GET_PLAYLISTS_SUCCSESS, GET_PLAYLISTS_ERROR } from '../actions';

export const initialState = {
  playlists: [],
  isLoading: false,
  errorText: '',
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case GET_PLAYLISTS_SUCCSESS:
      return Object.assign({}, state, {
        isLoading: false,
        playlists: action.playlists,
      });
    case GET_PLAYLISTS_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        errorText: action.error,
      });
    default:
      return state;
  }
}

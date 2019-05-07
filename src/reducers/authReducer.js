import { AUTH_SUCCSESS, AUTH_ERROR, AUTHENTIFICATION } from '../actions';

const auth = (state = { authenticating: false, authenticated: true, errorText: '' }, action) => {
  switch (action.type) {
    case AUTHENTIFICATION:
      return Object.assign({}, state, {
        authenticating: true,
        authenticated: false,
      });
    case AUTH_SUCCSESS:
      return Object.assign({}, state, {
        authenticating: false,
        authenticated: true,
      });
    case AUTH_ERROR:
      return Object.assign({}, state, {
        authenticating: false,
        authenticated: false,
        errorText: action.error,
      });
    default:
      return state;
  }
};

export default auth;

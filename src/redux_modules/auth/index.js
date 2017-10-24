import request, * as api from '../../services/api';

const AUTH_CLEAR = 'app/auth/logout';
const AUTH_SET = 'app/auth/auth_set';
const ERROR_SET = 'app/auth/error_set';
const LOADING = 'app/auth/loading';
const LOADING_COMPLETE = 'app/auth/loading_complete';
const PROFILE_UPDATE = 'app/auth/profile_update';

const initialState = {
  dry: true,
  error: '',
  loading: false,
  login: false,
  token: '',
  user: null,
};

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_CLEAR:
      return { ...initialState, dry: false };
    case AUTH_SET:
      return { login: true, error: '', dry: false, ...action.payload };
    case ERROR_SET:
      return { ...state, error: action.payload, dry: false };
    case LOADING:
      return { ...state, loading: true, dry: false };
    case LOADING_COMPLETE:
      return { ...state, loading: false };
    case PROFILE_UPDATE:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

// Action Creator
export function setAuth(payload) {
  return dispatch => {
    const { token, user } = payload;
    if (token) {
      request.set('Authorization', `JWT ${token}`);
      window.localStorage.setItem('pekanRistekToken', token);
    }
    if (user) {
      const { id } = user;
      window.localStorage.setItem('pekanRistekId', id);
    }
    dispatch({ type: AUTH_SET, payload });
  };
}

export function setError(payload) {
  return { type: ERROR_SET, payload };
}

export function clearAuth() {
  return { type: AUTH_CLEAR };
}

export function loading() {
  return { type: LOADING };
}

export function completeLoading() {
  return { type: LOADING_COMPLETE };
}

// Thunk
export function logout() {
  return async dispatch => {
    request.set('Authorization', null);
    window.localStorage.removeItem('pekanRistekToken');
    window.localStorage.removeItem('pekanRistekId');
    dispatch(clearAuth());
    await api.ssoLogout();
  };
}

export function reloadAuth() {
  return async dispatch => {
    try {
      dispatch(loading());
      const { pekanRistekToken, pekanRistekId } = window.localStorage;
      // if token or user id is null, relogin
      if (pekanRistekToken) {
        dispatch(setAuth({ token: pekanRistekToken }));
        const { body } = await api.getUser({ id: pekanRistekId });
        dispatch(setAuth({ token: pekanRistekToken, user: body }));
      } else {
        dispatch(logout());
      }
      dispatch(completeLoading());
    } catch (e) {
      dispatch(setError(e.message));
      dispatch(completeLoading());
    }
  };
}

export function login({ username, password }) {
  return async dispatch => {
    try {
      dispatch(loading());
      const { body } = await api.login({ username, password });
      dispatch(setAuth(body));
    } catch (e) {
      dispatch(setError(e.message));
      dispatch(completeLoading());
    }
  };
}

export function signup({ email, first_name, institution, last_name, password, phone, username }) {
  return async dispatch => {
    try {
      dispatch(loading());
      const { body } = await api.signup({
        email,
        first_name,
        institution,
        last_name,
        password,
        phone,
        username,
      });
      dispatch(setAuth(body));
      dispatch(completeLoading());
    } catch (e) {
      dispatch(setError(e.message));
      dispatch(completeLoading());
    }
  };
}

export function updateProfile({ id, email, first_name, institution, last_name, phone }) {
  return async dispatch => {
    try {
      dispatch(loading());
      const { body } = await api.patchUser({
        id,
        email,
        first_name,
        last_name,
        institution,
        phone,
      });
      dispatch({ type: PROFILE_UPDATE, payload: body });
      dispatch(completeLoading());
    } catch (e) {
      dispatch(setError(e.message));
      dispatch(completeLoading());
    }
  };
}

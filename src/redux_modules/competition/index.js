import request, * as api from '../../services/api';

const ERROR_SET = 'app/competition/error_set';
const LOADING = 'app/competition/loading';
const LOADING_COMPLETE = 'app/competition/loading_complete';
const TEAM_SET = 'app/competition/team_set';

const initialState = {
  hasRegistered: false,
  name: '',
  token: '',
  members: [],
  verified: false,
  error: '',
  loaded: false,
  loading: false,
};

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TEAM_SET:
      return {
        ...state,
        hasRegistered: action.payload.has_registered,
        members: action.payload.members || [],
        name: action.payload.name || '',
        token: action.payload.team_token || '',
        verified: action.payload.verified,
      };
    case ERROR_SET:
      return { ...state, error: action.payload, dry: false };
    case LOADING:
      return { ...state, loading: true, dry: false };
    case LOADING_COMPLETE:
      return { ...state, loading: false };
    default:
      return state;
  }
}

// Action Creator
export function setError(payload) {
  return { type: ERROR_SET, payload };
}

export function loading() {
  return { type: LOADING };
}

export function completeLoading() {
  return { type: LOADING_COMPLETE };
}

export function succeedJoinTeam(payload) {
  return {
    type: TEAM_SET,
    payload: {
      has_registered: true,
      ...payload,
    },
  };
}

export function succeedCreateTeam(payload) {
  return {
    type: TEAM_SET,
    payload: {
      has_registered: true,
      ...payload,
    },
  };
}

export function hasNotRegisteredYet() {
  return {
    type: TEAM_SET,
    payload: {
      has_registered: false,
    },
  };
}

// Thunk
export function createTeam({ competition, name }) {
  return async dispatch => {
    try {
      dispatch(loading());
      const { body } = await api.createTeam({ competition, name });
      dispatch(succeedCreateTeam({ name, ...body }));
      dispatch(completeLoading());
    } catch (e) {
      dispatch(setError(e.message));
      dispatch(completeLoading());
    }
  };
}

export function joinTeam({ token }) {
  return async dispatch => {
    try {
      dispatch(loading());
      const { body } = await api.joinTeam({ token });
      dispatch(succeedJoinTeam(body));
      dispatch(completeLoading());
    } catch (e) {
      dispatch(setError(e.message));
      dispatch(completeLoading());
    }
  };
}

export function loadTeam({ code }) {
  return async dispatch => {
    try {
      dispatch(loading());
      const { body } = await api.getTeam({ code });
      dispatch({ type: TEAM_SET, payload: { has_registered: true, ...body } });
      dispatch(completeLoading());
    } catch (e) {
      dispatch(setError(e.message));
      dispatch(hasNotRegisteredYet());
      dispatch(completeLoading());
    }
  };
}

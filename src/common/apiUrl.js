import config from '../config';

export const base = uri => config.API_URL + uri;

export const ssoLOGIN = base('/cas-login/');
export const ssoLOGOUT = base('/cas-logout/');
export const login = base('/login/');
export const signup = base('/signup/');
export const users = base('/users/');
export const user = id => `${users}profile/${id}/`;
export const updatePassword = id => `${users}update-password/${id}/`;
export const teams = base('/teams/');
export const createTeam = `${teams}create-team/`;
export const joinTeam = `${teams}join-team/`;
export const team = competition => `${base('/teams/')}${competition}`;

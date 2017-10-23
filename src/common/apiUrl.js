import config from '../config';

export const base = uri => `${config.API_URL}/api/${uri}`;

export const ssoLOGIN = base('cas-login/');
export const login = base('login/');
export const signup = base('signup/');
export const users = base('users/');
export const user = id => `${users}profile/${id}/`;
export const updatePassword = id => `${users}update-password/${id}/`;
export const teams = base('teams/');
export const createTeam = `${teams}create-team/`;
export const joinTeam = `${teams}join-team/`;

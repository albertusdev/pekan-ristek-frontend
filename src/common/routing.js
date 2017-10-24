import createHistory from 'history/createBrowserHistory';

const history = createHistory();
export default history;

// All URL here are for this project (frontend) browser url, not the API url / endpoints
export const LOGIN_PATH = '/login/';
export const LOGOUT_PATH = '/logout/';
export const SIGNUP_PATH = '/signup/';
export const DASHBOARD_PATH = '/dashboard/';
export const DASHBOARD_EDIT_PROFILE_PATH = `${DASHBOARD_PATH}edit-profile`;
export const DASHBOARD_EDIT_PASSWORD_PATH = `${DASHBOARD_PATH}edit-password`;

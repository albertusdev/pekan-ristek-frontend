import createHistory from 'history/createBrowserHistory';

const history = createHistory();
export default history;

// All URL here are for this project (frontend) browser url, not the API url / endpoints
export const BASE_URL = '/pekan-ristek/';
export const LOGIN_PATH = `${BASE_URL}login/`;
export const LOGOUT_PATH = `${BASE_URL}logout/`;
export const SIGNUP_PATH = `${BASE_URL}signup/`;
export const DASHBOARD_PATH = `${BASE_URL}dashboard/`;
export const DASHBOARD_EDIT_PROFILE_PATH = `${DASHBOARD_PATH}edit-profile`;
export const DASHBOARD_EDIT_PASSWORD_PATH = `${DASHBOARD_PATH}edit-password`;

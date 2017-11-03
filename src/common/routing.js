import createHistory from 'history/createBrowserHistory';

const history = createHistory();
export default history;

// All URL here are for this project (frontend) browser url, not the API url / endpoints
export const BASE_URL = '/pekan-ristek/';
export const LOGIN_PATH = `${BASE_URL}login/`;
export const LOGOUT_PATH = `${BASE_URL}logout/`;
export const SIGNUP_PATH = `${BASE_URL}signup/`;
export const DASHBOARD_PATH = `${BASE_URL}dashboard/`;
export const DASHBOARD_EDIT_PROFILE_PATH = `${BASE_URL}edit-profile`;
export const DASHBOARD_EDIT_PASSWORD_PATH = `${BASE_URL}edit-password`;
export const COMPLEX_DASHBOARD_PATH = `${DASHBOARD_PATH}:category`;
export const createDashboardPath = category => `${DASHBOARD_PATH}${category}`;

// Dashboard Category
export const COMPETITIONS = 'competitions';
export const SEMINARS = 'seminars';

import { BASE_URL } from './common/routing';

const RISTEK_URL = 'http://ristek.cs.ui.ac.id/';
const BACKEND_BASE_URL = 'pr-api';

const LOCAL_URL = 'http://localhost:4000/';

const config = {
  production: {
    API_URL: RISTEK_URL + BACKEND_BASE_URL,
    FRONTEND_URL: RISTEK_URL + BASE_URL,
  },
  development: {
    API_URL: RISTEK_URL + BACKEND_BASE_URL,
    FRONTEND_URL: RISTEK_URL + BASE_URL,
  },
  local: {
    API_URL: LOCAL_URL + BACKEND_BASE_URL,
    FRONTEND_URL: LOCAL_URL + BASE_URL,
  },
};

export default config[process.env.NODE_ENV || 'production'];

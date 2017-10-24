const config = {
  production: {
    API_URL: 'http://ristek.cs.ui.ac.id/pr-api',
  },
  development: {
    API_URL: 'http://example.dev',
  },
  local: {
    API_URL: 'http://localhost:8000',
  },
};

export default config[process.env.NODE_ENV || 'development'];

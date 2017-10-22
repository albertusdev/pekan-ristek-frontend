const config = {
  production: {
    API_URL: 'http://ristek.cs.ui.ac.id/pekan-ristek',
  },
  development: {
    API_URL: 'http://example.dev',
  },
  local: {
    API_URL: 'http://localhost:8080',
  },
};

export default config[process.env.NODE_ENV || 'development'];

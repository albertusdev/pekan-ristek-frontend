const LOCAL_URL = 'http://localhost:4000/pekan-ristek/';
const PRODUCTION_URL = 'http://ristek.cs.ui.ac.id/pekan-ristek/';

module.exports = (options, req) => ({
  webpack(config) {
    config.output.publicPath = PRODUCTION_URL;
    return config;
  },
  html: {
    title: 'Pekan Ristek 2017',
  },
  env: {
    NODE_ENV: process.env.NODE_ENV || 'development',
  },
  output: {
    publicPath: 'http://localhost:8080/yakin',
  },
  port: 4000,
});

const LOCAL_URL = 'http://localhost:4000/pekan-ristek/';
const PRODUCTION_URL = 'http://ristek.cs.ui.ac.id/pekan-ristek/';

module.exports = (options, req) => {
  if (!process.env.NODE_ENV) {
    return {
      webpack(config) {
        config.output.publicPath = LOCAL_URL;
        return config;
      },
      html: {
        title: 'Pekan Ristek 2017',
      },
      env: {
        NODE_ENV: process.env.NODE_ENV || 'development',
      },
      port: 4004,
    };
  }
  return {
    html: {
      title: 'Pekan Ristek 2017',
    },
    env: {
      NODE_ENV: process.env.NODE_ENV || 'development',
    },
    port: 4004,
  };
};

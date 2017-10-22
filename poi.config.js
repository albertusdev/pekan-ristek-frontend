module.exports = (options, req) => ({
  html: {
    title: 'Pekan Ristek 2017',
  },
  env: {
    NODE_ENV: process.env.NODE_ENV || 'development',
  },
  port: 4000,
});

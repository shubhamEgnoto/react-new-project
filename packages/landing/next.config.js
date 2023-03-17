const withPlugins = require('next-compose-plugins');
const withSaas = require

const nextConfig = {
  // distDir: '../../dist/functions/next'
  images: {
    domains: ['pbs.twimg.com'],
  },
};

module.exports = withPlugins([], nextConfig);

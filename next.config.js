/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (config, {isServer}) => {
      if (isServer) {
          config.externals.push('_http_common');
        // config.externals.push('encoding');
      }
      return config;
  },
  target: 'experimental-serverless-trace',
};

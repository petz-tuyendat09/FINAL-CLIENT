/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["antd"],
  output: "standalone",
  swcMinify: true,
  ignoreBuildErrors: false,
  images: {
    domains: ["localhost"],
  },
};

const moment = require("moment");
const createNextIntlPlugin = require("next-intl/plugin");
const withNextIntl = createNextIntlPlugin();

module.exports = withNextIntl({
  ...nextConfig,
  env: {
    BUILD_TIME: moment().format("HH:mm-DD/MM/YYYY"),
  },
  webpack: (config, { isServer }) => {
    return config;
  },
});

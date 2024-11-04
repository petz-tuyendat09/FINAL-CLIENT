/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["antd"],
  output: "standalone",
  swcMinify: true,
  ignoreBuildErrors: false,
  images: {
    domains: ["final-asm.s3.ap-southeast-2.amazonaws.com", "www.maxbone.com"],
  },
};

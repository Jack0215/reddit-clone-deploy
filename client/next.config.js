/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'www.gravatar.com',
      'localhost',
      'ec2-34-202-157-121.compute-1.amazonaws.com',
    ],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    allowedDevOrigins: ['http://192.168.*.*', 'http://localhost:3000'],
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;

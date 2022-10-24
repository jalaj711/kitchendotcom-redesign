/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path",
        destination: "http://localhost:8000/:path/",
      },
    ];
  },
};

module.exports = nextConfig;

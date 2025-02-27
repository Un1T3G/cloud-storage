/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: process.env.NODE_ENV === 'development',
  env: {
    SERVER_URL: process.env.SERVER_URL,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.SERVER_URL}/api/:path*`,
      },
      {
        source: '/uploads/:path*',
        destination: `${process.env.SERVER_URL}/uploads/:path*`,
      },
    ]
  },
}

export default nextConfig

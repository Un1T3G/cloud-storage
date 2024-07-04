/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: process.env.NODE_ENV === 'development',
  env: {
    SERVER_URL: process.env.SERVER_URL,
  },
}

export default nextConfig
